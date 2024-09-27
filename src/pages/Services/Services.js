import React, { useState } from 'react'
import './Services.css';
import Frontend from './icons8-frontend-50.png';
import Backend from './icons8-server-64.png';
import FullStack from './icons8-full-stack-64.png';
import rightArrow from './icons8-right-arrow-50.png';
import close from './icons8-close-50.png';
import Tick from './icons8-tick-50 (1).png';
const Services = () => {
    const [modal1, setmodal1] = useState(false);
    const [modal2, setmodal2] = useState(false);
    const [modal3, setmodal3] = useState(false);

  return (
    <div id='services' className='services-main'>
        <h1 className='intro-name'>Services</h1>
        <p className='intro-bio'>What i offer</p>
        <div className="services-banner">
            <div className="services-stack">
                <img className='services-icon' src={Frontend} alt="" />
                <div className="text">

                <h4 className='services-text'>Frontend</h4>
                <h4 className='services-text'>developer</h4>
                <div onClick={() => setmodal1(!modal1)} className="arrows">
                    <span>view more </span>
                    <img className='arrow' src={rightArrow} alt="" />
                </div>
                </div>
            </div>
            <div className={modal1 ? "modal" : "hidden"}>
                <div className="content">
                    <img onClick={() => setmodal1(!modal1)} className='modal-close' src={close} alt="" />
                    <div className="text">
                    <h1 className='service-name'>Frontend</h1>
                    <p className='service-bio'>I am a front end developer with over two years of experience in creating user-friendly, responsive websites</p>
                    <div className="C">
                        <div className="html">
                            <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill '>I build web applications with web development best practices</p>
                            </div>
                            {/* <span className='skill-status'>Advance</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>Develop single page web applications</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img  className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>Transform app designs into front-end code</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                    
                    
                    <div className="html">
                    <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>Write scalable, and reusable code</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>Develop New User-Facing Features</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill left'>Collaborating with back-end to integrate front-end and back-end systems</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                    
                </div>
                    </div>
                
                </div>
        

            </div>
            <div className="services-stack">
                <img className='services-icon' src={Backend} alt="" />
                <div className="text">

                <h4 className='services-text'>Backend</h4>
                <h4 className='services-text'>developer</h4>
                <div onClick={() => setmodal2(!modal2)} className="arrows">
                    <span>view more </span>
                    <img className='arrow' src={rightArrow} alt="" />
                </div>
                </div>
            </div>
            <div className={modal2 ? "modal" : "hidden"}>
                <div className="content">
                    <img onClick={() => setmodal2(!modal2)} className='modal-close' src={close} alt="" />
                    <div className="text">
                    <h1 className='service-name'>Backend</h1>
                    <p className='service-bio'>I am a Backend developer with over one years of experience in creating, maintaining, testing, and debugging the entire back end of an application or system</p>
                    <div className="C">
              
                        <div className="html">
                            <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill '>I build the Restful APIs</p>
                            </div>
                            {/* <span className='skill-status'>Advance</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>Develop reliable and secure back-end functionality</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img  className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>Maintain, expand, and scale the applications
                                </p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                    
                    
                    <div className="html">
                    <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>Write scalable, and reusable code</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>Authentication with JWT tokens</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill left'>Collaborate with front-end to match visual design intent</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                    
                </div>
                    </div>
                
                </div>
        

            </div>
            
            <div className="services-stack">
                <img className='services-icon' src={FullStack} alt="" />
                <div className="text">

                <h4 className='services-text'>FullStack</h4>
                <h4 className='services-text'>developer</h4>
                <div onClick={() => setmodal3(!modal3)}  className="arrows">
                    <span>view more </span>
                    <img className='arrow' src={rightArrow} alt="" />
                </div>
                </div>
            </div>
            <div className={modal3 ? "modal" : "hidden"}>
                <div className="content">
                    <img onClick={() => setmodal3(!modal3)} className='modal-close' src={close} alt="" />
                    <div className="text">
                    <h1 className='service-name'>FullStack</h1>
                    <p className='service-bio'>I am a fullstack developer with over two years of experience in creating both frontend and backend of application</p>
                    <div className="C">
              
                        <div className="html">
                            <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill '>I design the client-side and server-side architecture</p>
                            </div>
                            {/* <span className='skill-status'>Advance</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>Build the front-end of applications through appealing visual design</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img  className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>Develop and manage well-functioning database and application</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                    
                    
                    <div className="html">
                    <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>Write effective APIs</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>Create security and data protection settings</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill left'>Build features and applications with a mobile responsive design</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                    
                </div>
                    </div>
                
                </div>
        

            </div>
        </div>
    </div>
  )
}

export default Services