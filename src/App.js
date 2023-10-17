import React, { useState, useEffect } from 'react';
import './App.css';
import './Fondvideo/bannervideos.css';
import BannerVideos from './Fondvideo/BannerVideos';
import Lottie from 'lottie-react';
import animationData from './Lottie/pacman.json';
import ContactForm from './ContactForm';
import 'animate.css';
import ClickerGame from './Game/ClickerGame';
import './Fondvideo/bannervideocube.css';



function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


function App() {
  const [tauxNico, setTauxNico] = useState('');
  const [quantiteLiquide, setQuantiteLiquide] = useState('');
  const [aromepourcentage, setAromePourcentage] = useState('');
  const [boosterml, setBoosterMl] = useState('');
  const [aromeml, setAromeMl] = useState('');
  const [basefinale, setBaseFinale] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [waveActive, setWaveActive] = useState(false);


  const calcul = () => {
    const taux = parseFloat(tauxNico);
    const quantite = parseFloat(quantiteLiquide);
    const aromepercent = parseFloat(aromepourcentage);

    if (isNaN(taux) || isNaN(quantite) || isNaN(aromepercent)) {
      // Si l'une des valeurs n'est pas un nombre, affichez un message d'erreur
      setBoosterMl("t'as rien compris...");
      setAromeMl("t'as rien compris...");
      setBaseFinale("t'as rien compris...");
      setShowResults(true);
    } else {
      const qteboosterValue = (taux * quantite) / 200 * 10;
      setBoosterMl(qteboosterValue.toFixed(2));

      const qtearomeValue = (quantite * aromepercent) / 100;
      setAromeMl(qtearomeValue.toFixed(2));

      const baseValue = quantite - qtearomeValue - qteboosterValue;
      setBaseFinale(baseValue.toFixed(2));

      // Afficher les résultats uniquement après le calcul
      setShowResults(true);
    }
  };
  


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const animatedText = document.querySelector('.animated-text');
    if (isElementInViewport(animatedText)) {
      animatedText.classList.add('fade-in-active');
      window.removeEventListener('scroll', handleScroll);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fonction pour gérer le clic sur le bouton "Calculer"
  const handleButtonClick = () => {
    // Exécutez la fonction de calcul
    calcul();

    // Activez l'effet d'onde en ajoutant la classe CSS
    setWaveActive(true);

    // Désactivez l'effet d'onde après un court délai (par exemple, 300 ms)
    setTimeout(() => {
      setWaveActive(false);
    }, 300);
  };



  return (
    <div className="App">
      <header className="header">
        <img
          src="Images/react.png"
          alt="React logo"
          className="header-image"
        />
      </header>

      <section className="features">
        <button className="button-3d" onClick={() => scrollToSection('about')}>
          <h2 className="feature-title">Qui suis-je ?</h2>
        </button>
        <button className="button-3d" onClick={() => scrollToSection('creations')}>
          <h2 className="feature-title">Mes réalisations</h2>
        </button>
        <button className="button-3d" onClick={() => scrollToSection('contact')}>
          <h2 className="feature-title">Me contacter</h2>
        </button>
      </section>

      <div className='banner-video-container'>
        <BannerVideos />
      </div>



      <section id="about" className="new-section">
        <div className="new-section-content">
          <h2>Découvrez mes créations web</h2>
          <p className="animated-text fade-in">
          Passionné du développement web avec une expertise particulière dans les technologies <span class="texte-rouge">Node.js</span> et <span class="texte-rouge">React</span>. Avec plusieurs années d'expérience dans le domaine, j'ai acquis une solide compréhension de ces deux technologies de pointe, ce qui me permet de créer des applications web robustes et performantes.

En tant que développeur Node.js, j'ai travaillé sur divers projets, de la création d'APIs performantes à l'optimisation des flux de données en temps réel. Je suis à l'aise avec la création de serveurs, la gestion de bases de données et l'intégration de solutions tierces pour répondre aux besoins spécifiques de chaque projet.

D'un autre côté, ma maîtrise de React me permet de concevoir des interfaces utilisateur interactives et conviviales. J'ai une passion pour la création d'expériences utilisateur fluides et intuitives en utilisant les composants React et en exploitant la puissance de la gestion d'état avec Redux ou les Hooks.

Je suis également un fervent défenseur des meilleures pratiques de développement, de la qualité du code et de l'optimisation des performances. J'aime travailler en équipe, partager mes connaissances et apprendre constamment de nouvelles choses pour rester à jour avec les dernières avancées technologiques.

En dehors du développement, je suis un amateur de café, un adepte du code propre et un passionné de résolution de problèmes. Si vous cherchez un développeur Node.js et React déterminé à créer des solutions web exceptionnelles, je serais ravi de discuter de vos projets et de contribuer à leur succès. N'hésitez pas à me contacter pour discuter de la manière dont je peux vous aider à atteindre vos objectifs technologiques.          </p>
        </div>
      </section>

      

            <Lottie
        animationData={animationData}
        loop
        autoplay
        className="move-left-to-right"
      />

      <section id="creations" className="three-columns">
        <section id="clicker-game">
          <ClickerGame />
        </section>

        <section id="diy-calculator" className="App">
          <h3>Calculateur DIY</h3>
          <br />
          <div className="diy-row">
            <div className="diy-field">
              <label>Nicotine</label>
              <input
                type="text"
                size="8"
                value={tauxNico}
                onChange={(e) => setTauxNico(e.target.value)}
              />
              <br />
              <label>mg / ml</label>
            </div>
            <div className="diy-field">
              <label>E-liquide</label>
              <input
                type="text"
                size="8"
                value={quantiteLiquide}
                onChange={(e) => setQuantiteLiquide(e.target.value)}
              />
              <br />
              <label>ml</label>
            </div>
            <div className="diy-field">
              <label>Arôme</label>
              <input
                type="text"
                size="8"
                value={aromepourcentage}
                onChange={(e) => setAromePourcentage(e.target.value)}
              />
              <br />
              <label>%</label>
            </div>
          </div>
          <br />

          {/* Utilisez la fonction handleButtonClick pour gérer le clic */}
          <button
            type="button"
            id="calculate-button"
            onClick={handleButtonClick}
            className={waveActive ? 'wave-button wave-active' : 'wave-button'}
          >
            Calculer
          </button>

          <br />
          <br />
          <br />

          <div className="results">
            <div className="result-field">
              <label>Boosters</label>
              <input
                type="text"
                size="15"
                style={{ textDecoration: 'none', color: '#FF0000' }}
                value={boosterml}
                readOnly
              />
              <label> ml </label>
            </div>

            <div className="result-field">
              <label>Arôme</label>
              <input
                type="text"
                size="15"
                style={{ textDecoration: 'none', color: '#FF0000' }}
                value={aromeml}
                readOnly
              />
              <label>ml</label>
            </div>

            <div className="result-field">
              <label>Base</label>
              <input
                type="text"
                size="15"
                style={{ textDecoration: 'none', color: '#FF0000' }}
                value={basefinale}
                readOnly
              />
              <label> ml </label>
            </div>
          </div>

          {showResults && (
            <div>
              {/* Afficher les résultats ici */}
            </div>
          )}
        </section>

        <div className="App">
          <button className="phone-button">
            <i className="fas fa-phone"></i> 0616732487
          </button>
        </div>
      </section>

      

      <div id="contact" className="contact-form-section">
        <ContactForm />
      </div>

    </div>
  );
}

export default App;
