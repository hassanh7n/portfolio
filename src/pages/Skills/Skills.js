import React from 'react'
import './Skills.css'
import Tick from './icons8-checkmark-32.png';


const Skills = () => {
  return (
    <div id='skills' className='Skills-main'>
        <h1 className='intro-name'>My Skills</h1>
        <p className='intro-bio'>My technical level</p>
        <div className="skills-banner">
            <div className="skills-first">
                <h3 className='skill-name'>Frontend developer</h3>
                <div className="skills-details">
                    <div className="skill-divOne">
                        <div className="html">
                            <div className="section">
                                <img className='skill-icon' src={Tick} alt="" />
                                <p className='skill-skill'>HTML</p>
                            </div>
                            <span className='skill-status'>Advance</span>
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='skill-icon' src={Tick} alt="" />
                                <p className='skill-skill'>CSS</p>
                            </div>
                            <span className='skill-status'>Intermediate</span>
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='skill-icon' src={Tick} alt="" />
                                <p className='skill-skill'>JavaScript</p>
                            </div>
                            <span className='skill-status'>Intermediate</span>
                        </div>
                    </div>
                    <div className="skill-divOne">
                    <div className="html">
                    <div className="section">
                                <img className='skill-icon' src={Tick} alt="" />
                                <p className='skill-skill'>React</p>
                            </div>
                            <span className='skill-status'>Intermediate</span>
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='skill-icon' src={Tick} alt="" />
                                <p className='skill-skill'>Redux</p>
                            </div>
                            <span className='skill-status'>Intermediate</span>
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='skill-icon' src={Tick} alt="" />
                                <p className='skill-skill'>TailwindCss</p>
                            </div>
                            <span className='skill-status'>Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skills-first">
                <h3 className='skill-name'>Backend developer</h3>
                <div className="skills-details">
                    <div className="skill-divOne">
                        <div className="html">
                            <div className="section">
                                <img className='skill-icon' src={Tick} alt="" />
                                <p className='skill-skill'>NodeJs</p>
                            </div>
                            <span className='skill-status'>Advance</span>
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='skill-icon' src={Tick} alt="" />
                                <p className='skill-skill'>Authentication</p>
                            </div>
                            <span className='skill-status'>Intermediate</span>
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='skill-icon' src={Tick} alt="" />
                                <p className='skill-skill'>Git</p>
                            </div>
                            <span className='skill-status'>Basic</span>
                        </div>
                    </div>
                    <div className="skill-divOne">
                    <div className="html">
                    <div className="section">
                                <img className='skill-icon' src={Tick} alt="" />
                                <p className='skill-skill'>MongoDb</p>
                            </div>
                            <span className='skill-status'>Intermediate</span>
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='skill-icon' src={Tick} alt="" />
                                <p className='skill-skill'>ExpressJs</p>
                            </div>
                            <span className='skill-status'>Intermediate</span>
                        </div>
                        <div className="html">
                        <div className="section">
                                <img className='skill-icon' src={Tick} alt="" />
                                <p className='skill-skill'>REST APIs</p>
                            </div>
                            <span className='skill-status'>Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills