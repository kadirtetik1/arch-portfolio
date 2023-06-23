import React, { Component } from 'react'
import "./CustomerBgStyle.css"; 
import {MovingComponent} from 'react-moving-text'


class CustomerBg extends Component {

  render() {

    return (
      <div className='background'>
        <div className='head-texts'>
          
<MovingComponent
  type="fadeInFromTop"
  duration="1000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="none">
   <h1>{this.props.text1}</h1>
    <p>{this.props.text2}</p>
</MovingComponent>


         <div className='type-writer'>
         <MovingComponent type="typewriter"
  dataText={[
  'Tasarım',
  'Çizim',
  'Hata Düzeltme',
  'Arsa Değer Tespiti',
  'Ve Çok Daha Fazlası...'
]} />
         </div>

        </div>
      </div>
    );
  }
  
};

export default CustomerBg
