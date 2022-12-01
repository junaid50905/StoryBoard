import React,{useState} from 'react'
import './Signin.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const loggedInUrl = 'http://localhost:9090/api/v1/auth/login'

function Signup() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: '',
    password : ''
  })
  const {username, password} = loggedInUser
  
  const inputHandler = (e) => {
    const inputFieldName = e.target.name
    const inputFieldValue = e.target.value
    setLoggedInUser((prev) => {
      return {
        ...prev,
        [inputFieldName]: inputFieldValue
      }
    })
  }

  const submitHandler = async (e)=>{
    e.preventDefault()
    axios.post(loggedInUrl, loggedInUser).then((res => console.log(res.data))).catch(err => console.log(err.response.data));
    
  }
  const navigate = useNavigate()
  return (
    <div className='signin-form'>
      <div className = "content-middle">
        <div className="form-container">
          <div className="form">
            <form action="" onSubmit={submitHandler}>
            <div className="heading">
              <div className="before"></div>
              <h2 className='text-center'>Login</h2>
              <div className="after"></div>
            </div>
            <p className='text-center'>Log in to share your story and respond to others</p>
            <div className="group email">
              <input type="email" placeholder='Email' name='username' onChange={inputHandler} value={username}/>
            </div>
            <div className="group password">
              <input type="password" placeholder='Password' name='password' onChange={inputHandler} value={password}/>
            </div>
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
            <button className='signin'>Sign In</button>
          </form>
          <p className='text-center goto-signup'>Don’t have an account?<a onClick={()=>{navigate('/signup')}}> Sign Up</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
