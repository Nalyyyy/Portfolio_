import React from 'react';
import jsonProjects from '../assets/projects.json'
import '../styles/project.css'

export default function Projects() {

  let array = [];

  for (let x = 0; x<jsonProjects.length ; x++){

    const close = () =>{
      const videos = document.querySelector(`.video${x}`);
      const img = document.querySelector(`.pictureProject${x}`)
      const description = document.querySelector(`.description${x}`);
      const problems = document.querySelector(`.problems${x}`);
      const skills = document.querySelector(`.skillsProject${x}`);
      const project = document.querySelector(`.project${x}`);
      videos.classList.add('none');
      img.classList.remove('none');
      problems.classList.add('none');
      description.classList.add('none');
      skills.classList.add('none');
      project.classList.remove('projectClicked');
      const content =document.querySelector('.content');
      content.removeEventListener('click', ()=>{
        close();
      })
    };


    const clicked = ()=>{
      const videos = document.querySelector(`.video${x}`);
      const img = document.querySelector(`.pictureProject${x}`);
      const description = document.querySelector(`.description${x}`);
      const problems = document.querySelector(`.problems${x}`);
      const project = document.querySelector(`.project${x}`);
      const skills = document.querySelector(`.skillsProject${x}`);
      videos.classList.remove('none');
      img.classList.add('none');
      problems.classList.remove('none');
      skills.classList.remove('none');
      description.classList.remove('none');
      project.classList.add('projectClicked');
      const content =document.querySelector('.content');
      content.addEventListener('click', ()=>{
        close();
      })
    }

    let lilArray = [];
    lilArray.push(<img src={jsonProjects[x].picture} className={'pictureProject pictureProject'+x}onClick={clicked}/>);
    lilArray.push(<video controls autoPlay src={jsonProjects[x].link} type="video/mp4" className={'video none video'+x}/>)
    lilArray.push(<h3 className='projectName'>{jsonProjects[x].name}</h3>);
    lilArray.push(<p className={'description none description'+x}>{jsonProjects[x].description}</p>);
    lilArray.push(<p className={'problems none problems'+x}>{jsonProjects[x].problèmes}</p>);
    let skillsArray =[];
    const test = jsonProjects[x].skills;
    for (let i =0; i<jsonProjects[x].skills.length;i++){
      skillsArray.push(<img src={jsonProjects[x].skills[i]}  className='skillProject'/>)
    };
    lilArray.push(<div className={'skillsProject none skillsProject'+[x]}>{skillsArray}</div>);
    array.push(<div className={'oneProject project'+x} >{lilArray}</div>)
  }


  return (
    <div className='projects'>
      {array}
    </div>
  )
}
