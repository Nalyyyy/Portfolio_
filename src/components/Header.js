import React from 'react'
import '../styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


export default function Header() {

  const openClose = ()=>{
    const headerContent = document.querySelector('.headerContent');
    const background = document.querySelector('.headerBackground');
    const up = document.querySelector('.up');
    const down = document.querySelector('.down');


    if(headerContent.classList.contains('close')){
      headerContent.classList.remove('close');
      background.classList.remove('close');
      down.classList.add('none');
      up.classList.remove('none');
    }else{
      headerContent.classList.add('close');
      background.classList.add('close');
      up.classList.add('none');
      down.classList.remove('none');
    }
  }




  return (
      <div className='header'  >
          <div className='headerBackground close' ></div>
          <h1 className='logo'>ANCELIN YLAN</h1>
          <div className='headerContent close'>
              <a href='#aPropos' className='hook' onClick={openClose}>A Propos</a>
              <a href='#mesCompétences' className='hook' onClick={openClose}>Mes compétences</a>
              <a href='#monParcours' className='hook' onClick={openClose}>Mon parcours</a>
              <a href='#mesProjets'className='hook' onClick={openClose}>Mes projets</a>
              <a href='#Contact' className='hook' onClick={openClose}>Contact</a>
          </div>
          <span className='chevron up none' onClick={openClose}><FontAwesomeIcon icon={faChevronUp} /></span>
          <span className='chevron down ' onClick={openClose}><FontAwesomeIcon icon={faChevronDown} /></span>
      </div>

  )
}
