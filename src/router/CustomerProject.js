import React from 'react'
import CustomerBg from '../components/CustomerBg';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Navbar from '../components/Navbar';

const CustomerProject = () => {
  return (
    <div>
      <Navbar/>
      <CustomerBg text1="Yardıma Mı İhtiyacınız Var ?" text2="Kısaca bize danışmak istediğiniz konudan bahsedin ve size en kısa sürede geri dönüş yapalım."/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default CustomerProject
