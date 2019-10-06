import React from 'react';
import logo from './logo.svg';
import './App.css';
import  HeroSlideshow from './HeroSlider';


const heroImages = [
   ["/assets/img/home-hero/maize.png", "A CROSS SECTION OF AN OUT-GROWER’S MAIZE SEED FARM, SOBA, KADUNA STATE"],
   ["/assets/img/home-hero/rice.png", "A CROSS SECTION OF AN OUT-GROWER’S RICE SEED FARM, BIRNIN-GWARI, KADUNA STATE"],
   ["/assets/img/home-hero/equipment.png", "A CROSS SECTION OF GOLDAGRIC's SEED PROCESSING PLANT"],
   ["/assets/img/home-hero/factory.png", "A SIDE VIEW OF SEED PROCESSING FACTORY, KAPAM-RIDO, KADUNA"]
];

function App() {
  return (
    <div className="App">
        <section className="g-pos-rel2">
          <div className="dzsparallaxer2 auto-init2 height-is-based-on-content2 use-loading mode-scroll2">
               <HeroSlideshow images={heroImages} />
          </div>
        </section>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Goldagric
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
