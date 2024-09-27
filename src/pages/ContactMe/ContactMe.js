import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css';
import Whatsapp from './icons8-whatsapp-50.png';
import Messenger from './icons8-email-50.png';
import Email from './icons8-email-50.png';
import rightArrow from '../Services/icons8-right-arrow-50.png';
import { toast } from "react-toastify";



const ContactMe = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(form);
    
    emailjs
      .sendForm('service_welmzqn', 
        'template_346sxv5', 
        form.current, {
        publicKey: 'pCLPlN7uJymEuwZ4R',
      })
        
          
      .then(
        () => {
            const name = document.getElementById("name-input").value;
            const email = document.getElementById("email-input").value;
            const project = document.getElementById("project-input").value;
            console.log(name, email, project);
            
            if(name === "" || email === "" || project === ""){
                return(

                    toast.error("Please enter the information")
                ) 
                    
            }
            toast.success("message send successfuly!")

        },
        (error) => {
        //   toast.error("Please enter the information")
        },
      );
  };
  return (
    <div id='contact' className="contact-main">
        <div className="contact-firstBanner">
            <h2 className='intro-name' >Talk to me</h2>
            <div className="email box">
                <img className='img-icon' src={Email} alt="" />
                <h4 className='services-text'>Email</h4>
                <span>hassannawaz70000@gmail.com</span>
                <div  className="arrows">
                    <span>write me </span>
                    <img className='arrow' src={rightArrow} alt="" />
                </div>
                

            </div>
            <div className="whatsapp box">
                <img className='img-icon' src={Whatsapp} alt="" />
                <h4 className='services-text'>WhatsApp</h4>
                <span>+92318-7255068</span>
                
                <div className="arrows">
                    <span>write me </span>
                    <img className='arrow' src={rightArrow} alt="" />
                </div>
                
            </div>
            <div className="messenger box">
                <img className='img-icon' src={Messenger} alt="" />
                <h4 className='services-text'>Messenger</h4>
                <span>Hassan Nawaz</span>
                <div className="arrows">
                    <span>write me </span>
                    <img className='arrow' src={rightArrow} alt="" />
                </div>
            </div>
        </div>
        <div className="contact-secondBanner">
            <h2 className='intro-name' >Write me your project</h2>
            <form  ref={form} onSubmit={sendEmail} action="">

                <div className="contact-form-div">
                    <label className='namee' htmlFor="name">Name</label>
                    <input 
                    id='name-input'
                    className='input-name' 
                    type="name" 
                    name='name'
                    placeholder='Insert your name' />
                </div>
                <div className="contact-form-div">
                <label className='namee' htmlFor="name">Email</label>
                    <input 
                    id='email-input'
                    className='input-name' 
                    type="email" 
                    name='email'
                    placeholder='Insert your email' />
                </div>
                <div className="contact-form-div">
                <label className='namee' 
                htmlFor="name">Project details</label>
                    <textarea
                    id='project-input'
                     className='textarea' 
                     cols={30} 
                     rows={10} 
                     name="project" placeholder='Write me your project'></textarea>
                    
                </div>

                <button type='submit' className='contact-btn'>Send message</button>
          
            </form>
        </div>
    </div>
  )
}

export default ContactMe