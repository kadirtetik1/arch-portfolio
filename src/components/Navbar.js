import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./NavbarStyle.css";
import {FaBars, FaTimes} from "react-icons/fa";
import {motion} from "framer-motion";


const Navbar = () => {

    const [isClicked, setClick] = useState(false);  //mobilde görüncek menu iconu için
    const handleClick = () => setClick(!isClicked);

    const [isScrolled, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >=100){ //100 pixelden fazla yatayda kaydırılırsa true gönder.
            setColor(true);
        }

        else{
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

  return (
    <div className={isScrolled ? 'header header-scroll':'header'}>

        <Link to="/" className='Logo'>
            <h1>AC Mimarlık</h1>
            </Link>

           <ul className={isClicked ? 'nav-menu goster': 'nav-menu'}>

            <li>
                <Link to="/">
                    <motion.div className='nav-items' whileHover={{scale:1.1}}>
                    Anasayfa
                    </motion.div>
                </Link>
            </li>
            <li>
                <Link to="/about">
                <motion.div className='nav-items' whileHover={{scale:1.1}}>
                Hakkımızda
                    </motion.div>
                    </Link>
            </li>
            <li>
                <Link to="/projects">
                <motion.div className='nav-items' whileHover={{scale:1.1}}>
                Projeler
                    </motion.div>
                    </Link>
            </li>
            <li>
                <Link to="/contact">
                <motion.div className='nav-items' whileHover={{scale:1.1}}>
                İletişim
                    </motion.div>
                    </Link>
            </li>

           </ul>

           <div className='menuButton' onClick={handleClick}>
            {
                isClicked ? <FaTimes size={20} style={{color:"#fff"}}/> : <FaBars size={20} style={{color:"#fff"}}/>
            }
            
           </div>
        
      
    </div>
  )
}

export default Navbar
