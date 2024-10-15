import React from 'react'
import './Portfolio.css'
import ProjectOne from './Screenshot (2)-min.png';
import ProjectTwo from './Screenshot (9)-min.png';
import ProjectThree from './Screenshot (8)-min.png';
import ProjectFour from './Screenshot (7)-min.png'
import Tick from '../Services/icons8-tick-50 (1).png';
const Portfolio = () => {
  return (
    <div id='portfolio' className='portfolio-banner'>
        <h1 className='intro-name'>Portfolio</h1>
        <p className='intro-bio'>My recent work</p>
        
        <div className="portfolio-main">
            {/* Akaza first project  */}
        
        <div className="project">
            <a href="">
            <img className='project-img' src={ProjectOne} alt="" />
            <p className='project-discription'>Ecommerce application</p>
            </a>
                
                <div className="project-detail">
                <div className="C">
                        <div className="html">
                            <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill '>Application build using MERN Stack</p>
                            </div>
                            {/* <span className='skill-status'>Advance</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>RESTful API</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img  className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>Authentication with JWT Tokens</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                    
                    
                    <div className="html">
                    <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>Payment with Stripe</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>Search filters with React-controlled inputs</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill left'>Responsive design and pagination</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                    <div className="multiple-buttons">
                        <a href="https://github.com/hassanh7n/Akaza-server">
                            <button className='btn-project'>Github Code</button>
                        </a>
                        <a href="https://akaza-hassan.netlify.app">
                            <button className='btn-project'>View project</button>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        


        {/* Second project */}
        <div className="project">
            <a href="">
                <img className='project-img' src={ProjectTwo} alt="" />
                <p className='project-discription'>Wheels</p>
            </a>
                <div className="project-detail">
                <div className="C">
                        <div className="html">
                            <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill '>Application build using MERN Stack</p>
                            </div>
                            {/* <span className='skill-status'>Advance</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>Files upload by using cloudinary</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img  className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>Admin panel with CRUD functionality</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                    
                    
                    <div className="html">
                    <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>RESTful API</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>Search filters with React-controlled inputs</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill left'>Responsive design using React-styled components</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                        <div className="multiple-buttons">
                        <a href="https://github.com/hassanh7n/wheels-server">
                            <button className='btn-project'>Github Code</button>
                        </a>
                        <a href="https://wheels-hassan.netlify.app">
                            <button className='btn-project'>View project</button>
                        </a>
                    </div>
                </div>
                </div>
            </div>



       


        {/* third project  */}
        <div className="project">
            <a href="">
                <img className='project-img' src={ProjectThree} alt="" />
                <p className='project-discription'>Social media application</p>
            </a>
                <div className="project-detail">
                <div className="C">
                        <div className="html">
                            <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill '>Application build using MERN Stack</p>
                            </div>
                            {/* <span className='skill-status'>Advance</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>High resolution images uploading with cloudinary</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img  className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>Scalable application</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                    
                    
                    <div className="html">
                    <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>Authentication with JWT Tokens</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>RESTful API</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill left'>Responsive design</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                        <div className="multiple-buttons">
                        <a href="https://github.com/hassanh7n/SocialMedia-server">
                            <button className='btn-project'>Github Code</button>
                        </a>
                        <a href="https://hassan-socialmedia-app.netlify.app">
                            <button className='btn-project'>View project</button>
                        </a>
                    </div>
                </div>
                </div>
            </div>





        {/* fourth project */}
        <div className="project">
            <a href="">
                <img className='project-img' src={ProjectFour} alt="" />
                <p className='project-discription'>Admin Panel</p>
            </a>
                <div className="project-detail">
                <div className="C">
                        <div className="html">
                            <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill '>Application build using MERN Stack</p>
                            </div>
                            {/* <span className='skill-status'>Advance</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>CRUD functionality</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img  className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>Data visualization with graphs</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                    
                    
                    <div className="html">
                    <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>Authentication with JWT Tokens</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>RESTful API</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill left'>Responsive design</p>
                            </div>
                            {/* <span className='skill-status'>Intermediate</span> */}
                        </div>
                        <div className="multiple-buttons">
                        <a href="https://github.com/hassanh7n/hassan-jobster-backend">
                            <button className='btn-project'>Github Code</button>
                        </a>
                        <a href="https://jobify-hassan.netlify.app">
                            <button className='btn-project'>View project</button>
                        </a>
                    </div>
                    
                </div>
                </div>
            </div>








        {/* Fifth project */}
        {/* <div className="project">
                <a href="">
                <img className='project-img' src={ProjectFive} alt="" />
                <p className='project-discription'>CocktailDB</p>
                </a>
                <div className="project-detail">
                <div className="C">
                        <div className="html">
                            <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill '>Application build using ReactJs</p>
                            </div>
                            
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>Search filter with React-controlled inputs</p>
                            </div>
                        </div>
                        <div className="html">
                        <div className="section">
                                <img  className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>Scalable application</p>
                            </div>
                        </div>
                    
                    
                    <div className="html">
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill'>RESTful API</p>
                            </div>
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='service-icon' src={Tick} alt="" />
                                <p className='service-skill left'>Responsive design</p>
                            </div>
                        </div>
                        <div className="multiple-buttons">
                        <a href="">
                            <button className='btn-project'>Github Code</button>
                        </a>
                        <a href="">
                            <button className='btn-project'>View project</button>
                        </a>
                    </div>
                </div>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Portfolio