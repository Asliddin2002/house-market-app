import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import {getAuth, signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import { GoogleLogo } from '../components/assests/GoogleLogo'
import {doc,setDoc,getDoc, serverTimestamp} from 'firebase/firestore'
import { db } from '../firebas.config'
import { toast } from 'react-toastify'




function GoogleAuth() {
  const navigate = useNavigate()
  const location = useLocation()


  const onGoogleClick = async() => {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      // check for user
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)
      // id user doesnot exist creat user
      if(!docSnap.exists()){
        await setDoc (doc(db, 'users', user.uid),{
          name:user.displayName,
          email:user.email,
          timestamp:serverTimestamp()

        })
      }
      navigate('/')
    } catch (error) {
      toast.error("Could not regiser with Google")
    }
  }

  return (
    <div className=' mb-5 container google-wrapper'>
    <p >Sign {location.pathname ==='/sign-up'? 'up' :'in'} with</p>    
    <button onClick={onGoogleClick} className='google-btn'><img className='google-logo' src={GoogleLogo} alt="" /></button>
    </div>
  )
}

export default GoogleAuth