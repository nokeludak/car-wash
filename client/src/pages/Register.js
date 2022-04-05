
import React from 'react'
import "./Register.css"

const Register = () => {
 
  return (
    <div className='register-container'>
      <div className='register-wrapper'>
          <h1 className='register-h1'>CREATE A CUSTOMER</h1>
          <form className='form-reg'>
              <input  className='register-input' placeholder='Username' required/>
              <input className='register-input' placeholder='Name' required/>
              <input  className='register-input' placeholder='Last Name' required/>
             <input  className='register-input' placeholder='Car' />
              <span className='register-span'>
              By creating an customer, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
              </span>
              <button className='register-button' 
              >CREATE</button>
          </form>
          
      </div>
      </div>
  )
}

export default Register