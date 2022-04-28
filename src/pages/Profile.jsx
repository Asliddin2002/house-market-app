import React, {useState} from 'react'
import {getAuth, updateProfile} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import {updateDoc,doc} from 'firebase/firestore'
import {db} from '../firebas.config'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

function Profile() {

  const navigate = useNavigate()
  const auth = getAuth()
  const [changeDetails,setChangeDetails] = useState(false)
  const [formInput,setFormInput]= useState({
    name:auth.currentUser.displayName,
    email:auth.currentUser.email
  })
  const {name, email} =formInput
  const logOut =()=> {
    auth.signOut()
    navigate('/')
  }

  const onSubmit = async()=> {
    try {
      if(auth.currentUser.displayName !== name){
        // update diplay name in fb
         await updateProfile(auth.currentUser, {
              displayName:name,
            }
        )

        // Update in fireStore
        const userRef = doc(db,'users', auth.currentUser.uid)
        await updateDoc(userRef, {
          name,
        })
      }
    } catch (error) {
      toast.error('Could not update profile details!')
    }
  }

  const onChange =(e) => {
    setFormInput((prev) => ({
      ...prev,
      [e.target.id]:e.target.value
    }))
  }


  return (
    <div className='profile container'>
      <header className='header d-flex justify-content-between mx-3'>
          <h2 className='fw-bold'>My Profile</h2>
          <button onClick={logOut} className='btn-sm log-out btn'>Log out</button>    
      </header>
      <main className='mt-5 mx-3'>
        <div className="profileDetails d-flex justify-content-between">
            <p className='profileDetailsText fw-bold'>Personal Details</p>
            <p className='changeDetails fw-bold' onClick={()=> {
              changeDetails && onSubmit()
              setChangeDetails((prev)=> (
                !prev
              ))
            }}>
              {
                changeDetails ? "done" : 'change'
              }  
              
            </p>
          </div>
      
      <div className="profile-card">
        <input type="text"
        value={name}
        onChange={onChange} 
        disabled={!changeDetails}
        className={!changeDetails ? "form-control profileName": 'form-control profileNameActive'} id="name" />
        
        <input type="text"
        value={email}
        onChange={onChange} 
        disabled={true}
        className={!changeDetails ? "form-control pro-email profileName": 'form-control profileNameActive'} id="email" />
        </div>
        

        <Link to='/create-listing' className= ' mt-5 create-listing' >
          <i className="material-icons">home</i>
          <div className='text-secondary fw-bold'>Sell or rent your home</div>
          <i className="material-icons">chevron_right</i>
        </Link>
      </main>

    </div>
  )



}

export default Profile