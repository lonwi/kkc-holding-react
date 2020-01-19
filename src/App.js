import React from 'react';
import logo from './assets/images/logo.png';
import './App.css';

function App() {
  return (
    <div className="app animated fadeIn">
      <header className="app__header">
        <img src={logo} className="app__logo" alt="KK Consulting - logo" />
        <div className="app__separator">&nbsp;</div>
        <div className="app__headline app__headline--top">
          &bull; droga do sukcesu &bull;
        </div>
        <div className="app__separator"></div>
        <div className="app__headline app__headline--bottom">
          jest zawsze w budowie
        </div>
        <div className="app__separator"></div>
        <div className="app__footer">
          <div>
            <strong>KK Consulting</strong>
          </div>
          <div>
            <strong>Katarzyna Korniaho</strong>
          </div>
          <div>
            NIP <strong>9581433595</strong>, REGON <strong>383914944</strong>
          </div>
          <div>
            <span>
              tel: <a href="tel:0048604792760">&nbsp;+48 604 792 760&nbsp;</a>
            </span>
            <span>
              e-mail:
              <a href="mailto:kontakt@kasiakorniaho.pl">
                &nbsp;kontakt@kasiakorniaho.pl&nbsp;
              </a>
            </span>
          </div>
          <div></div>
        </div>
      </header>
    </div>
  );
}

export default App;
