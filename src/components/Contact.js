import React from 'react'
import '../styles/contact.css'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_c1egof2' , 'template_mkhos5w', e.target , 'yis8FgXJGDf-pbVyx');
        const form = document.querySelector('.form');
        form.classList.add('none')
        const merci = document.querySelector('.merci');
        merci.classList.remove('none');
    }

  return (
    <section>
        <form onSubmit={sendEmail} className='form'>
            <div>
                <label htmlFor="nom">Votre nom</label>
                <input type="text" id="nom" name="nom" placeholder="Prénom" required/>
            </div>
            <div>
                <label htmlFor="email">Votre e-mail</label>
                <input type="email" id="email" name="email" placeholder="monadresse@mail.com" required/>
            </div>
            <div>
                <label htmlFor="message">Votre message</label>
                <textarea id="message" name="message" placeholder="Bonjour, j'aimerais savoir...." required></textarea>
            </div>
            <div>
                <button type="submit">Envoyer</button>
            </div>
        </form>
        <div className='merci none'>Merci! <br/> Je vous recontacte au plus vite!</div>
    </section>
  )
}
