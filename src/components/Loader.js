import React from 'react'
import '../styles/loader.css'

export default function Loader() {

    window.addEventListener('load', () =>{
        const loader = document.querySelector('.loader');
        loader.classList.add('loaded')
    })

  return (
    <div className='loader'>
        <img src='assets/pictures/loader.gif' className='loaderGif' alt='loader'/>
    </div>
  )
}

