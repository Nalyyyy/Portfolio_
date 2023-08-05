import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import SwitchThème from '../components/SwitchThème';
import Scrollbar from '../components/Scrollbar';
import Cursor from '../components/Cursor'
import HackerBackground from '../components/HackerBackground';
import Loader from '../components/Loader';
import Contact from '../components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


export default function Content() {

  return (
    <div className='content'>
      <Loader/>
      <Scrollbar/>
      <Cursor/>
      <HackerBackground/>
      <Header/>
      <SwitchThème/>
      <h1 className='h1intro'>Ylan Ancelin</h1>
      <h2 className='h2intro'>Développeur web.</h2>
      <h3 className='intro'>Bienvenue sur mon portfolio </h3>
      <a href='#aPropos' className='bigChevron' aria-label="Découvrez moi"><FontAwesomeIcon icon={faChevronDown} /></a>
      {/* <div className='line'></div> */}

      <h2 id='aPropos' tabIndex={0}>A propos de moi</h2>
      <p className='aProposContent'> Bonjour, je m'appelle Ylan Ancelin, je suis développeur web et je vis à
        Bordeaux. Je me suis formé pendant 8 mois chez OpenClassrooms (site de formation en ligne) où j'ai appris à coder du front mais également 
        du back, à optimiser un site et son SEO ou encore à planifier le développement d'un site. Je peux créer le 
        front-end de sites où d'applications web avec rigueur, j'aime bien écrire du code propre et compréhensible.
         <br/>
        Je suis prêt à saisir les opportunités d'emplois où encore à réaliser vos missions (si vous en avez) , n'hésitez 
        pas à me <a href='#Contact'>contacter</a>.
      </p>
      

      <h2 id='mesCompétences' tabIndex={0}>Mes compétences</h2>
      <Skills/>
      

      {/* <h2 id='monParcours'>Mon parcours</h2> */}


      <h2 id='mesProjets' tabIndex={0}>Mes projets</h2>
      <Projects/>


      <h2 id='Contact' tabIndex={0} >Contact</h2>
      <Contact/>

      <Footer/>
    </div>
  )
}
