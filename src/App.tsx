import React from 'react';
import './styles/global.css';
import { Employment } from './components/Employment';
import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { Speaking } from './components/Speaking';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="page">
      <div className="main-container">
        <aside className="sidebar">
          <Header />
          <Summary />
          <Certifications />
          <Speaking />
          <Education />
        </aside>
        
        <main className="main-content">
          <Employment />
          <Skills />
        </main>
      </div>
    </div>
  );
}

export default App;
