import React from 'react';
import './Banner.css';
import Image1 from './WhatsApp Image 2024-08-12 at 11.17.22 PM.jpeg';
import Image2 from './WhatsApp Image 2024-08-12 at 10.57.19 PM.jpeg';
import Image3 from './WhatsApp Image 2024-08-12 at 10.57.40 PM.jpeg';
import LinkedIn from './icons8-linkedin-50.png';
import Instagram from './icons8-instagram-50.png';
import GitHub from './icons8-github-50.png';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
const Banner = () => {
  return (
    <>
    <div id='banner' className='banner'>
        <div className="banner_first">
            <a href="">
                <img className='social_icon' src={GitHub} alt="" />
            </a>
            <a href="">
                <img className='social_icon' src={Instagram} alt="" />
            </a>
            <a href="">
                <img className='social_icon' src={LinkedIn} alt="" />
            </a>
        </div>
        <div className="banner_second">
            <div className="info">
                <h1 className='intro-name'>Hassan Nawaz~</h1>
                <p className='intro-bio'>______ MERN Stack Developer</p>
                <span className='intro-discr'>Hi, I'm Hassan, a passionate MERN stack developer with expertise in HTML, CSS, React, Node.js, Express, and MongoDB.</span>
                <br />
                <Link
                to='contact'
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
                ><button className='btn-hello'>
                Say Hello
                </button>
            
                </Link>
            </div>
            <div className="image">
                <img className='bioPic' src={Image1} alt="" />
            </div>
        </div>
    </div>
    
    </>

  )
}

export default Banner