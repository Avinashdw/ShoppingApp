import React from 'react'
import './LoginSignup.css';
function LoginSignup() {
  return (
    <div className='login-container'>
      <div className="signup">
        <h2>Sign Up</h2><br/><br/>
        <input type='text' name='username' value='' placeholder='Enter Name'></input><br/><br/>
        <input type='text' name='username' value='' placeholder='Enter Email'></input><br/><br/>
        <input type='password' name='password' value='' placeholder='Enter Password'></input><br/><br/>
        <button>Register</button>
        <div className="login-here">
         <p >Already have an account?<span>Login here</span></p>
         
        </div>
    </div>
    </div>
  )
}
export default LoginSignup