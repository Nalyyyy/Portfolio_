import React from 'react'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='iconsFooter'>
        <a href='https://github.com/Nalyyyy' className='iconSpan' alt='github'><img className='github' src='assets/icons/github.png' alt='github'></img></a>
        <a href='mailto:ylanancpro@gmail.com' className='iconSpan'alt='mail'><img className='mail' src='assets/icons/email.png' alt='mail'></img></a>
        <a href='https://www.instagram.com/ylan.yx/' className='iconSpan' alt='instagram'><img className='instagram' src='assets/icons/instagram.png' alt='instagram'></img></a>
      </div>
      <p className='footerText'>Réalisé par Ylan Ancelin</p>
    </footer>
  )
}
