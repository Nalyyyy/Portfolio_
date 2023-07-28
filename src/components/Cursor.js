import React from 'react'
import { useState } from 'react'
import '../styles/cursor.css'
import { logDOM } from '@testing-library/react';

export default function Cursor() {
    const [mouse, updateMouse] =useState( { left: 0 , top :0});

    document.addEventListener('mousemove', (x) => {
        updateMouse({left : x.clientX -15 +'px' , top : x.clientY-15  +'px'})
    });
    document.addEventListener('click', (x) => {
      const cursor = document.querySelector('.cursor');
      cursor.classList.add('click');
      setTimeout(()=>{
        cursor.classList.remove('click');
      },500)
  })

  return (
    <div className='cursor' style={{left:mouse.left , top: mouse.top}}></div>
  )
}

