import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {getAuth, sendPasswordResetEmail} from 'firebase/auth'
import { toast } from 'react-toastify'


function ForgotPassword() {
  const [email, setEmail] = useState('')  
  
  const onChange = (e)=> {
    setEmail(e.target.value)
  }

  const onSubmit =  async(e)=> {
    e.preventDefault()

    try {
      const auth = getAuth()
      sendPasswordResetEmail(auth,email)
      toast.success("Email was sent")
    } catch (error) {
      toast.error('Could not send reset email')
    }
  }


  return (
    <div className='forgotPassword container'>
      <h2 className='mb-4 mt-4  title '>Forgot Password</h2>
      <form onSubmit={onSubmit}>
        <div className="input-email mb-4">
        
              <input type='email'
              placeholder='email'
              className='form-control input '
              id='email'
              value={email}
              onChange= {onChange}
              />
              <i className='material-icons email-icon'>
              email
            </i>
          </div>
          <div className="forgot-password w-100">
            <Link to='/sign-in' className=' mb-5 forgot-text'>Sign In</Link>
            </div>
            <div className=" mt-5 mb-5 w-100 signin-btn ">
                  <h3 className='text-dark fw-bold'>Send Reset Link</h3>
                  <button type='submit' className=" btn left-arrow">
                      <i className='material-icons'>chevron_right</i>
                  </button>
            </div>
      </form>
    </div>
  )
}

export default ForgotPassword