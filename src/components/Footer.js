import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='iconsFooter'>
        <a href='https://github.com/Nalyyyy' className='iconSpan'><img className='github' src='assets/icons/github.png'></img></a>
        <a href='mailto:ylanancpro@gmail.com' className='iconSpan'><img className='mail' src='assets/icons/email.png'></img></a>
        <a href='https://www.instagram.com/ylan.yx/' className='iconSpan'><img className='instagram' src='assets/icons/instagram.png'></img></a>
      </div>
      <p className='footerText'>Réalisé par Ylan Ancelin</p>
    </div>
  )
}
