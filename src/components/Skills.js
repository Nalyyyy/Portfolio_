import React from 'react';
import '../styles/skills.css'
import jsonSkills from '../assets/skills.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Skills() {

  let skills = [];

  const func2 = ()=>{ 
      for(let x = 0; x<jsonSkills.length ; x++){
         let stars = [null] ;
         for(let i = 0; i<5 ; i++){
          if(i<jsonSkills[x].stars){
           stars.push( <FontAwesomeIcon icon="fa-solid fa-star" key={i+'etoile'+x} className='star'/> )
          }  
          else{
           stars.push(<FontAwesomeIcon icon="fa-regular fa-star" key={i+'etoile_vide'+x} className='star'/>)
          }}
          skills.push(<div className='skill' key={x+'skill'}><img src={jsonSkills[x].img} key={x} alt={jsonSkills[x].name} className='icon'/><div className='stars'>{stars}</div></div>);
       }
      }

  func2();


  return (
    <section className='skills'>
      {skills}
    </section>
  )
}
