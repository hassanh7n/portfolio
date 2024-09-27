import React from 'react';
import './Footer.css';
import Github from './icons8-github-30.png';
import Instagram from './icons8-instagram-30.png';
import Linkedin from './icons8-linkedin-30.png';
import { Link} from 'react-scroll';
const Footer = () => {
  return (
    <div className="footer-main">
        <div className="footer-main-first">
            <h2 className='footer-title'>Hassan Dev</h2>
            <div className="footer-second">
                <Link
                to='about'
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
                >

                <span className='footer-detail'>about</span>
                </Link>
                <Link
                to='portfolio'
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
                >
                <span className='footer-detail'>projects</span>
                </Link>

                <Link
                to='services'
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
                >
                
                <span className='footer-detail'>services</span>
                </Link>
            </div>
            <div className="footer-first">
                <img className='footer-icon' src={Github} alt="" />
                <img className='footer-icon' src={Instagram} alt="" />
                <img className='footer-icon' src={Linkedin} alt="" />
            </div>
           
        </div>
        <div className="footer-main-second">
            <span className='footer-details'>&#169; hassanh7n. All rights reserved</span>
        </div>
    </div>
  )
}

export default Footer