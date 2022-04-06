import React, {useState} from 'react'
import "./Register.css"

const Register = () => {
  const [formData, setFormData] = useState({
    username:"",
    name: "",
    lastName:"",
    car:""
  })
  const { username, name, lastName, car} = formData
  
  const onChange = (e) => {
    setFormData((prevState) => ({
  ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = async (e) => {
    e.prevent.default()
   
  }
  return (
    <div className='register-container'>
      <div className='register-wrapper'>
          <h1 className='register-h1'>CREATE A CUSTOMER</h1>
          <form  className='form-reg'>
              <input id="username" name="username" value={username} onChange={onChange} className='register-input' placeholder='Username' required/>
              <input id="name" name="name" value={name} onChange={onChange} className='register-input' placeholder='Name' required/>
              <input id="lastName" name="lastName" value={lastName} onChange={onChange}  className='register-input' placeholder='Last Name' required/>
             <input id="car" name="car" value={car} onChange={onChange} className='register-input' placeholder='Car' />
              <span className='register-span'>
              By creating an customer, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
              </span>
              <button  onSubmit={onSubmit} className='register-button' 
              >CREATE</button>
          </form>
          
      </div>
      </div>
  )
}

export default Register