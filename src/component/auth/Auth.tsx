import React, { useState } from 'react'
import union from '../../assest/Union.svg'
import lendsqr from '../../assest/lendsqr.svg'
import pablo from '../../assest/pablo-sign-in 1.svg'
import './auth.css'
import SignIn from '../../firebase'

function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState('')

  const SignIn = () => {
    
  }

  return (
    <div className='login'>
      <div className="nav">
        <img src={union} alt="..." className='union'/>
        <img src={lendsqr} alt="..." className='lendImg' />
      </div>
      <div className="left-img">
        <img src={pablo} alt="..." />
      </div>
      <div className="form">
        <h2 className='form-welcome'>Welcome!</h2>
        <h3 className='form-details'>Enter details to login.</h3>
        <form>
          <input type="email" name="email" id="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" name="password" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <h4>forgot password</h4>
          <button type='submit'> LOG IN </button>
        </form>
      </div>
    </div>
  )
}

export default Auth