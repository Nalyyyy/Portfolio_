import React from 'react'
import '../styles/scrollbar.css'
import { useState } from 'react'

export default function Scrollbar() {

    // const progressBar = document.querySelector('.scrollbar');

    // on recupere la taille de la partie non visible 
    let totalHeight= document.documentElement.scrollHeight - document.documentElement.clientHeight;


    const [progressBar, updateProgress] = useState(0)


    window.addEventListener('scroll', (e) =>{
        // on recupere la progression du scroll en pourcentage 
        let progress = (document.documentElement.scrollTop / totalHeight * 100)
        updateProgress (`${progress}%`);
    })  

    const progressBarClick = (e) =>{
        let newPageScroll = e.clientY / window.innerHeight * totalHeight;
        window.scrollTo({
            top: newPageScroll,
            behavior:'smooth'
        })
    }

  return (
    <div>
    <div className='scrollbar' style={{height: progressBar ,opacity: progressBar}}  ></div>
    <div className='clickScrollbar' onClick={progressBarClick}></div>
    </div>
  )
}
