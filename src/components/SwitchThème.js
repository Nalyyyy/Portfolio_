import React from 'react'

export default function SwitchThème() {

    let switchValue = 0;

    const switchThème = ()=>{
        const headerConfig = document.querySelector('.headerBackground');
        if (switchValue === 0){
            document.documentElement.style.setProperty('--transition', '0s');
            document.documentElement.style.setProperty('--text', '#262626');
            document.documentElement.style.setProperty('--background', '#f1f1f1');
            document.documentElement.style.setProperty('--greenRed', '#A21133');
            document.documentElement.style.setProperty('--greenBackground', '#E6E6E6');
            if(headerConfig.classList.contains('close')){document.documentElement.style.setProperty('--header', '#262626');}
            else{document.documentElement.style.setProperty('--header', '#f1f1f1');}
            switchValue= 1
            headerConfig.classList.add('ok')
            setTimeout(()=>{
              document.documentElement.style.setProperty('--transition', '2s');
            },1000)
            const moon = document.querySelector('.moon');
            const sun = document.querySelector('.sun')
            moon.classList.remove('none');
            sun.classList.add('none');
              
        }
        else{
            document.documentElement.style.setProperty('--transition', '0s');
            document.documentElement.style.setProperty('--text', '#f1f1f1');
            document.documentElement.style.setProperty('--background', '#0b0b0b');
            document.documentElement.style.setProperty('--greenRed', '#08FF2D');
            document.documentElement.style.setProperty('--greenBackground', '#050505');
            if(headerConfig.classList.contains('close')){document.documentElement.style.setProperty('--header', '#f1f1f1');}
            else{document.documentElement.style.setProperty('--header', '#262626');}
            switchValue = 0
            headerConfig.classList.remove('ok')
            setTimeout(()=>{
              document.documentElement.style.setProperty('--transition', '2s');
            },1000)
            const moon = document.querySelector('.moon');
            const sun = document.querySelector('.sun')
            moon.classList.add('none');
            sun.classList.remove('none');
        }
    };
    


  return (
    <div onClick={switchThème} className='switch'>
      <img src='assets/icons/sun.svg' className='sun' alt='sun' tabIndex={0}/>
      <img src='assets/icons/moon.png'className='moon none' alt='moon' tabIndex={0}/>
    </div>
  )
}
