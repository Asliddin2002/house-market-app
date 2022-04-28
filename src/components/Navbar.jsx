import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'


function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()

    const pathMatchRoute =(route)=> {
        if(route  === location.pathname){
            return true
        }
    }

  return (
    <footer className='footer'>
        <nav className='w-100 nav'>
            
            <ul className='nav-ul'>
                <li onClick={()=> navigate("/")}  >
                   <i className={ pathMatchRoute("/") ? "material-icons text-dark" : "material-icons" } >explore</i>
                   <p className={ pathMatchRoute('/') ? 'nav-title text-dark' :"nav-title"}>Explore</p>
                </li >
                <li onClick={()=> navigate('/offers')} >
                    <i className={ pathMatchRoute("/offers") ? "material-icons text-dark" : "material-icons" }>pin_drop</i>
                    <p className={ pathMatchRoute('/offers') ? 'nav-title text-dark' :"nav-title"}>Offer</p>
                </li>
                <li onClick={()=> navigate('/profile')}  >
                    <i className={ pathMatchRoute("/profile") ? "material-icons text-dark" : "material-icons" }>person_outline</i>
                    <p className={ pathMatchRoute('/profile') ? 'nav-title text-dark' :"nav-title"}>profile</p>
                </li>
            </ul>
        </nav>
    </footer>
    )
}

export default Navbar


