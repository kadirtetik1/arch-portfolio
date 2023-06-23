import React from 'react'
import "./HomeBgStyle.css"; 
import BGImg from "../assets/background-home.jpg"
import { Link } from 'react-router-dom';
import {MovingComponent} from 'react-moving-text'

const BgImage = () => {
  return (
    <div className='background'>
        <div className='mask'>
            <img className='bgImg' src={BGImg} alt="bgImg"/>
        </div>

        <div className='content'>
        <MovingComponent
  type=""
  duration="1000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="none">
 <p>AC Mimarlık</p>
  <h1>Alper Çolakoğlu</h1>
</MovingComponent>
            

 <div className='main-buttons'>

  
                <Link to="/customerProject" className='btn'>Danışmanlık</Link>

                <Link to="/contact" className='btn-light'>İletişim</Link>
 </div>

            
        </div>
      
    </div>
  )
}

export default BgImage
