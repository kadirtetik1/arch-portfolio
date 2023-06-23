import React from 'react'
import "./FooterStyle.css"
import {FaGithub, FaHome,FaInstagram,FaLinkedin,FaMailBulk,FaPhone} from "react-icons/fa"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>

        <div className='footer-container'>
            <div className='left-side'>


                <div className='location'>
                    <FaHome size={20} style={{color:"#fff", marginRight:"1rem"}}/>
                
                        <p>Çayyolu mahallesi, 12.sokak, 11/2 Ankara/Çankaya</p>
                    
                </div>
                
                <div className='contact-phone'>
                    <FaPhone size={20} style={{color:"#fff", marginRight:"1rem"}}/>
                
                        <p>+90 (545) 656 10 10</p>
                    
                </div>

                <div className='contact-mail'>
                    <FaMailBulk size={20} style={{color:"#fff", marginRight:"1rem"}}/>
                
                        <p >acm@info.com.tr</p>
                    
                </div>


            </div>

            <div className='developer-ad'>
                <div className='dev-name'>
                <span style={{color:"#ffffff"}}>Copyright © 2023 - </span><span style={{color:"#c3c3c3"}}>Bu websitesi </span><span style={{color:"#ffffff"}}>Kadir Tetik</span><span style={{color:"#c3c3c3"}}> tarafından geliştirilmiştir.</span>
                </div>

                <div className='dev-social'>

                <a href='https://www.linkedin.com/in/kadir-t-bbab05129/' target='_blank' rel="noopener noreferrer">
                <FaLinkedin className='linkedin-logo' size={25} style={{color:"#ffffff", marginRight:"1rem"}}/>
                </a>

                <a href='https://www.github.com/kadirtetik1' target='_blank' rel="noopener noreferrer">
                <FaGithub className='github-logo' size={25} style={{color:"#ffffff", marginRight:"1rem"}}/>
                </a>

                {/* <a href='https://www.instagram.com/tetik.kadirr' target='_blank' rel="noopener noreferrer">
                <FaInstagram className='instagram-logo' size={25} style={{color:"#fff", marginRight:"1rem"}}/>
                </a> */}

                </div>

            </div>


            <div className='right-side'>

                <div className='owner-name'>
                    <p>Mimar Alper Çolakoğlu</p>
                </div>

                <div className='owner-social'>

                <Link to="">
                <FaInstagram className='instagram-logo' size={25} style={{color:"#fff", marginRight:"1rem"}}/>
                </Link>

                <Link to="">
                <FaLinkedin className='linkedin-logo' size={25} style={{color:"#ffffff", marginRight:"1rem"}}/>
                </Link>

                </div>



            </div>
        </div>
      
    </div>
  )
}

export default Footer
