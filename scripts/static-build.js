require('@babel/register')({
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    'babel-plugin-css-modules-transform'
  ],
  extensions: ['.ts', '.tsx']
});

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const fs = require('fs-extra');
const path = require('path');
const prettier = require('prettier');
const App = require('../src/App').default;

// The analytics script is only baked into the HTML for deploy builds. Local
// builds leave the placeholder empty so test traffic never reaches analytics.
const ANALYTICS_PLACEHOLDER = '<!-- ANALYTICS -->';
const ANALYTICS_TAG =
  '<script defer data-site="FHYZNUK" src="https://a.sleepypixel.monster/script.js"></script>';

function analyticsEnabled() {
  if (process.env.ENABLE_ANALYTICS) {
    return process.env.ENABLE_ANALYTICS === 'true';
  }
  return false;
}

async function buildStatic() {
  // Generate static HTML
  const html = ReactDOMServer.renderToStaticMarkup(React.createElement(App));
  
  // Read the template
  const templatePath = path.resolve(__dirname, '../public/index.html');
  const template = await fs.readFile(templatePath, 'utf8');
  
  // Replace the root div with our rendered HTML
  const finalHtml = template.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`
  );
  
  // Read CSS files
  const globalCss = await fs.readFile(path.resolve(__dirname, '../src/styles/global.css'), 'utf8');
  
  // Add CSS to head
  const withCss = finalHtml.replace(
    '</head>',
    `<style>${globalCss}</style></head>`
  );

  // Swap in the analytics tag, or strip the placeholder entirely
  const includeAnalytics = analyticsEnabled();
  const withAnalytics = withCss.replace(
    ANALYTICS_PLACEHOLDER,
    includeAnalytics ? ANALYTICS_TAG : ''
  );
  console.log(`Analytics script: ${includeAnalytics ? 'included' : 'omitted'}`);

  // Format HTML
  const formattedHtml = await prettier.format(withAnalytics, { parser: 'html' });

  // Ensure build directory exists
  await fs.ensureDir('./build');

  // Write the final HTML
  await fs.writeFile('./build/index.html', formattedHtml);
  
  // Copy other necessary assets
  await fs.copy('./public', './build', {
    filter: (src) => !src.endsWith('index.html')
  });
}

buildStatic().catch(console.error);
