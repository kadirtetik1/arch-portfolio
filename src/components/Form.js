import React from 'react'
import "./FormStyle.css"

const Form = () => {
  return (
    <div className='form'>

        <form className='form-items'>
            {/* <label>Adınız</label> */}
            <input type="text" placeholder='Ad Soyad'></input>
            
            {/* <label>Mail Adresiniz</label> */}
            <input type="email" placeholder='Mail Adresi'></input>

            {/* <label>Telefon Numaranız</label> */}
            <input type="text" placeholder='Telefon Numarası'></input>

            {/* <label>Mesaj</label> */}
            <textarea rows="10" placeholder='Danışmak istediğiniz konudan bahsedelim..'/>

            <button className='btn'>Gönder</button>

        </form>
      
    </div>
  )
}

export default Form
