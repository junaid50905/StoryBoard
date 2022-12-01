import React,{useState} from 'react'
import './Signup.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
const registrationUrl = "http://localhost:9090/api/v1/auth/register";

function Signup() {
 
  const navigate = useNavigate()
  //registration
  const [registerUser, setRegisterUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })
  const {firstname, lastname, email, password} = registerUser
  //registration input handler
  const registerInputHanlder = (e)=>{
    const inputFieldName = e.target.name
    const inputFieldValue = e.target.value
    setRegisterUser((prev)=>{
      return{...prev, [inputFieldName] : inputFieldValue}
    })
  }
  
  
  //registration submit handler
  const registerSubmitHandler = async (e)=>{
    e.preventDefault()
     axios.post(registrationUrl,registerUser).then((res => console.log(res.data))).catch(err=>console.log(err.response.data));

    navigate('/signin')
    
  }
  return (
    <div className='signup-form'>
      <div className = "content-middle">
        <div className="form-container">
          <div className="form">
            <form action="" onSubmit={registerSubmitHandler}>
            <div className="heading">
              <div className="before"></div>
              <h2 className='text-center'>Registration</h2>
              <div className="after"></div>
            </div>
            <p className='text-center'> Create your account.It 's free and only takes a minute.</p>
            <div className="name-image">
              <div className="name">
                <div className="group">
                  <input type="text" placeholder='first name' name='firstname' onChange={registerInputHanlder} value={firstname}/>
                </div>
                <div className="group">
                  <input type="text" placeholder='last name' name='lastname' onChange={registerInputHanlder} value={lastname}/>
                </div>
              </div>
              {/* <div className = "group image">
                <label htmlFor="file">
                  <div className="img">
                    <img src={setProfilPicture} alt="" />
                  </div>
                </label>
                <label htmlFor="file">Choose avatar</label>
                <input type="file" id="file"/>
              </div> */}
            </div>
            <div className="group email">
              <input type="email" placeholder='Email' name='email' onChange={registerInputHanlder} value={email}/>
            </div>
            <div className="group password">
              <input type="password" placeholder='Password' name='password' onChange={registerInputHanlder} value={password}/>
            </div>
            {/* <div className="group check">
              <input type="checkbox" id="terms"/>
              <label htmlFor="terms">I accept all terms and conditions</label>
            </div> */}
            <button className='signup'>Sign Up</button>
          </form>
          <p className='text-center goto-signin'>Already have an account?<a onClick={()=>{navigate('/signin')}}>Sign In</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
