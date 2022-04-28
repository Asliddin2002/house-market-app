import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {getAuth, createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import {db} from '../firebas.config';
import {setDoc, doc, serverTimestamp}from 'firebase/firestore'
import { toast } from 'react-toastify';
import GoogleAuth from './GoogleAuth'
import { FaQuestion} from 'react-icons/fa';


function SignUp() {

  const navigate = useNavigate();

  const[showPassword, setShowPassword] =useState(false)
  const [formInput,setFormInput] = useState({
    name:'',
    email:'',
    password:''
  })
  const {email,password,name} = formInput

  const onChange = (e) => {
    setFormInput((prev)=> ({
      ...prev,
      [e.target.id]:e.target.value
    }))
  }

  //  email password submit
  const onSubmit =async(e)=> {
    e.preventDefault()

    try {
      const auth =getAuth();

      const userCredential =await createUserWithEmailAndPassword(auth, email,password)
    
      const user = userCredential.user

      updateProfile(auth.currentUser,{
        displayName:name
      })

      const formDataCopy ={...formInput}
      delete formDataCopy.password
      formDataCopy.timestamp=serverTimestamp()

      await setDoc(doc(db,'users',user.uid), formDataCopy)

      navigate('/');
    } catch (error) {
      toast.error("Something went wrong! ")
    }
  }





  return (
    <div className=' sign-in container'>
      <div className="d-flex w-100 mt-4 mb-4" >
      <h2 className='  title '>Welcome !</h2>
       <div className="question-wraper" onClick={()=> navigate("/about")}>
          <FaQuestion className='question-mark'/>
      </div>
          
      </div>
      <form onSubmit={onSubmit}>
      <div className="input-email mb-4">
        
        <input type='text'
        placeholder='Name'
        className='form-control input '
        id='name'
        value={name}
        onChange= {onChange}
        />
        <i className='material-icons email-icon'>
        contact_mail
      </i>
    </div>

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
          {/* <div className="forgot-password w-100">
            <Link to='/forgot-password' className=' mb-5 forgot-text'>Forgot password</Link>
            </div> */}
            <div className=" mt-5 mb-5 w-100 signin-btn ">
                  <h3 className='text-dark fw-bold'>Sign Up</h3>
                  <button className="left-arrow btn" type='submit'>
                      <i className=' material-icons'>chevron_right</i>
                  </button>
            </div>
          
      </form>
        <GoogleAuth/>
      <div className="d-flex w-100 d-flex justify-content-center">
              <Link to='/sign-in' className='signup-link' >Sign In Instead</Link> 
          </div>
          
    </div>
  )
}

export default SignUp