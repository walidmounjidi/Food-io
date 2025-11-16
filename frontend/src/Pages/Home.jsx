import React from 'react'
import MoroccanTajine from '../assets/MoroccanTajine.png'
import "../App.css"
export default function Home() {
  return (
    <div>
        <section className='home'>
            <div className='left'>
                <h1>Lorem ipsum dolor sit.</h1>
                <p>
                   Lorem ipsum dolor sit amet, consectetur 
                   adipisicing elit. Culpa sed maiores asperiores quam. 
                   Odit, doloremque.
                </p>
                <button>Lorem, ipsum dolor.</button>
            </div>
            <div className='right'>
                <img src={MoroccanTajine} alt="" width="350px" height="350px"/>
            </div>
        </section>
        <div className="bg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff9560" fill-opacity="1" d="M0,160L30,
            170.7C60,181,120,203,180,208C240,213,300,203,360,208C420,213,
            480,235,540,218.7C600,203,660,149,720,117.3C780,85,840,75,900,69.3C960,64,1020,64,1080,90.7C1140,117,1200,171,1260,197.3C1320,224,1380,224,1410,224L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,
            540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
        </div>
    </div>
  )
}
