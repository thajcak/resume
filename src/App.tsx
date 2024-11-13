import React from 'react';
import './styles/global.css';
import './styles/index.css';
import { Employment } from './components/Employment';
import { Header } from './components/Header';
import { Divider } from './components/Divider';
import { Speaking } from './components/Speaking';
import { Credentials } from './components/Credentials';

function App() {
  return (
    <div className="page">
      <Divider position="top" />

      <div className="section-plain">
        <div className="content-limiter">
          <Header />
        </div>
      </div>

      <Divider position="bottom" />

      <Employment />

      <Divider position="top" />

      <Speaking />

      <Divider position="bottom" />

      <Credentials />
    </div>
  );
}

export default App;
