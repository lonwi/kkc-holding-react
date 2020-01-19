import React from 'react';
import logo from './assets/images/logo.png';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="app__logo" />
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
            <strong>KK Consulting - Katarzyna Korniaho</strong>
          </div>
          <div>
            NIP <strong>9581433595</strong>, REGON <strong>383914944</strong>
          </div>
          <div>
            tel.&nbsp;<a href="tel:0048604792760">+48 604 792 760</a>
            &nbsp;e-mail:&nbsp;
            <a href="mailto:kontakt@kasiakorniaho.pl">
              kontakt@kasiakorniaho.pl
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
