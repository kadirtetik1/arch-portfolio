import React from 'react'
import "./FinishedCardStyle.css"
import Tilt from "react-parallax-tilt";
import { Component } from 'react';

class FinishedCard extends Component {

  render(){


  return (

    <Tilt glareEnable={true} tiltMaxAngleX={10} 
        tiltMaxAngleY={10} perspective={1000} 
        glareColor={"rgba(255, 0, 0, 0)"}>

    <div className='bg-card-finished'>

      <div className='card-image'>
        
      </div>

      <div className='card-content'>

        <h1>{this.props.label}</h1>
        <p>{this.props.description}</p>
      </div>

      <div className='card-buttons'>
        <h4>İNCELE</h4>
      </div>
      
    </div>

   </Tilt>
  )
}

};

export default FinishedCard
