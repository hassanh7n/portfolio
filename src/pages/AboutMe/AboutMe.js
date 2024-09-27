import React from 'react'
import './AboutMe.css'
import Completed from './icons8-completed-60.png';
import Experience from './icons8-experience-50.png';
import Support from './icons8-support-50.png';
import DP from '../Banner/WhatsApp Image 2024-08-12 at 11.17.22 PM.jpeg';
import Cv from './Rizwan Ahmad-1.png';
const AboutMe = () => {
    // const about = useRef(null);
  return (
    <div id='about' className='banner-main'>
        <h1 className='intro-name'>About Me</h1>
        <p className='intro-bio'>My introduction</p>
        <div className="banners">
            <img className='about-img'  src={DP} alt="" />
            <div className="second">
                    <div className="second-one">
                        <div className="head">
                        <div className="experience box-shadow">
                            <img className='about-icon' src={Experience} alt="" />
                            <h4 className='about-name'>Experience</h4>
                            <p className='about-discr'>1.5+ Years</p>
                        </div>
                        <div className="completed box-shadow">
                            <img className='about-icon' src={Completed} alt="" />
                            <h4 className='about-name'>Completed</h4>
                            <p className='about-discr'>25+ Projects</p>
                        </div>
                        <div className="support box-shadow">
                            <img className='about-icon' src={Support} alt="" />
                            <h4 className='about-name'>Support</h4>
                            <p className='about-discr'>Online 24/7</p>
                        </div>
                        </div>
                    </div>
                    <div className="second-two">
                        <h5 className='about-detail'> MERN Stack developer, I design and implement RESTful APIs for seamless integration between front-end and back-end systems. I work closely with UI/UX designers to create responsive and visually appealing user interfaces. Troubleshoot, debug, and optimize code to ensure high performance and reliability.</h5>
                    </div>
                    <div className="second-three">
                    <button className='about-btn' >
                        
                    <a className='aa' href={Cv} download="Hassan Dev(CV)">Download CV</a>
                        </button>
                        
                    </div>
                </div>
        </div>
    </div>
  )
}

export default AboutMe