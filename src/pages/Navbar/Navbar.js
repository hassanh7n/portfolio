import React, { useState } from 'react'
import { Link,  animateScroll as scroll,  } from 'react-scroll';
import './Navbar.css'
import Logo from './menu_8917404.png'
import Home from './home_738822.png'
import ContactUs from './icons8-contact-us-32.png'
import Skills from './icons8-form-80.png'
import Portfolio from './icons8-portfolio-48.png'
import Services from './icons8-services-50.png'
import About from './icons8-about-50.png'
import Close from './icons8-close-50.png'
const Navbar = () => {
    const [menu, setMenu] = useState(false);




    const scrollTo = () => {
        scroll.scrollTo(10); // Scrolling to 100px from the top of the page.
      };
    
   
  return (
    <div id='home' className='main'>
        
        <div className="sectionOne">
            <p className='name'>Hassan Dev</p>
        </div>
        <div className={menu ? "sectionsTwo show-menu" : "sectionsTwo"}>
            <nav>
                <ul>
                    <div  className="nav-item active-link">
                        <li className='active-link'>
                            <Link
                            onClick={scrollTo}
                             className=' active-link nav-link a'>
                                <i><img className='icon' src={Home} alt="" /></i>
                            
                            Home</Link></li>
                    </div>
                    <div className="nav-item">
                        <li><Link  
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={1000}
                         className='nav-link a'>
                     
                            <i><img className='icon' src={About} alt="" /></i>
                            About</Link></li>
                    </div>
                    <div className="nav-item">
                        
                        <li><Link
                         to='skills'
                         spy={true}
                         smooth={true}
                         offset={50}
                         duration={1000}
                          className='nav-link a'>
                            <i><img className='icon' src={Skills} alt="" /></i>
                            Skills</Link></li>
                    </div>
                    <div className="nav-item">
                        
                        <li><Link 
                        to='services'
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={1000}
                         className='nav-link a'>
                            <i><img className='icon' src={Services} alt="" /></i>
                            Services</Link></li>
                    </div>
                    <div className="nav-item">
                        
                        <li><Link 
                        to='portfolio'
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={1000}
                         className='nav-link a'>
                            <i><img className='icon' src={Portfolio} alt="" /></i>
                            Portfolio</Link></li>
                    </div>
                    <div className="nav-item">
                        
                        <li><Link 
                        
                        to='contact'
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={1000}
                            className='nav-link a'>
                            <i><img className='icon' src={ContactUs} alt="" /></i>
                            Contact</Link></li>
                    </div>
                </ul>

          
            </nav>
          <i width={"40px"} className='close'><img onClick={() => setMenu(!menu)} className='icon' src={Close} alt="" /></i>
            
        </div>
        <img width={"25px"} onClick={() => setMenu(!menu)} className='logo' src={Logo} alt="" />
    </div>
  )
}

export default Navbar