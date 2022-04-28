import React, {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { toast } from 'react-toastify'
import GoogleAuth from './GoogleAuth'


function SignIn() {

  const navigate=useNavigate()

  const[showPassword, setShowPassword] =useState(false)
  const [formInput,setFormInput] = useState({
    email:'',
    password:''
  })
  const {email,password} = formInput

  const onChange = (e) => {
    setFormInput((prev)=> ({
      ...prev,
      [e.target.id]:e.target.value
    }))
  }


    const onSubmit = async(e)=> {
      e.preventDefault()
      try {
        const auth=getAuth()

      const userCredential = await signInWithEmailAndPassword(auth,email,password)

      if(userCredential.user){
        navigate('/')
      }

      } catch (error) {
        toast.error('Incorrect username or password!')
      }

      
    }


  return (
    <div className=' sign-in container'>
      <h2 className='mb-4 mt-4 title '>Welcome Back!</h2>
      <form onSubmit={onSubmit}>
        <div className="input-email mb-4">
        
              <input type='text'
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
        <div className="input-password mb-3">
           {showPassword? <i className='material-icons visible-icon'onClick={()=> setShowPassword(!showPassword)} > visibility_off</i> : <i onClick={()=> setShowPassword(!showPassword)} className='material-icons visible-icon'>visibility</i>} 
            
            <input className='form-control input'
            type={showPassword ? 'text' : 'password'} 
            onChange= {onChange}
            placeholder='Password' 
            id='password'
            value={password} />
            <i className='material-icons password-icon'>
              password
            </i>
          </div>
          <div className="forgot-password w-100">
            <Link to='/forgot-password' className=' mb-5 forgot-text'>Forgot password</Link>
            </div>
            <div className=" mt-5 mb-5 w-100 signin-btn ">
                  <h3 className='text-dark fw-bold'>Sign In</h3>
                  <button type='submit' className=" btn left-arrow">
                      <i className='material-icons'>chevron_right</i>
                  </button>
            </div>
          {/* <div className="d-flex w-100 d-flex justify-content-center">
              <Link to='/sign-up' className='signup-link' >Sign Up Instead</Link> 
          </div> */}
      </form>
      <GoogleAuth/>
      <div className="d-flex w-100 d-flex justify-content-center">
              <Link to='/sign-up' className='signup-link' >Sign Up Instead</Link> 
          </div>
    </div>
  )
}

export default SignIn