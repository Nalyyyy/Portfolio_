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
    lilArray.push(<img src={jsonProjects[x].picture} className={'pictureProject pictureProject'+x}onClick={clicked} alt={jsonProjects[x].name} key={jsonProjects[x].name+'img'}/>);
    lilArray.push(<video controls autoPlay src={jsonProjects[x].link} type="video/mp4" className={'video none video'+x} key={jsonProjects[x].name+'video'}/>)
    lilArray.push(<h3 className='projectName' key={jsonProjects[x].name}>{jsonProjects[x].name}</h3>);
    lilArray.push(<p className={'description none description'+x} key={jsonProjects[x].name+'description'}>{jsonProjects[x].description}</p>);
    lilArray.push(<p className={'problems none problems'+x} key={jsonProjects[x].name+'problems'}>{jsonProjects[x].problèmes}</p>);
    let skillsArray =[];
    for (let i =0; i<jsonProjects[x].skills.length;i++){
      skillsArray.push(<img src={jsonProjects[x].skills[i]}  className='skillProject' alt='technologie' key={jsonProjects[x].skills[i]}/>)
    };
    skillsArray.push(<a href={jsonProjects[x].github} key={jsonProjects[x].github+'lien'} className='skillProject'><img src='assets/icons/github.png' className='githubProject skillProject' alt='lien github'key={jsonProjects[x].github}/> </a> )
    lilArray.push(<div className={'skillsProject none skillsProject'+[x]} key={x+'skills'}>{skillsArray}</div>);
    array.push(<div className={'oneProject project'+x} key={x+'Project'}>{lilArray}</div>)
  }


  return (
    <section className='projects'>
      {array}
    </section>
  )
}
