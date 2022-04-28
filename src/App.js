import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Explore from "./pages/Explore"
import Offers from "./pages/Offers"
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Navbar from "./components/Navbar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./components/PrivateRoute"
import Categories from "./pages/Categories"
import {MarketContextProvider}  from './hooks/UseContext.jsx'
import CreateListing from "./pages/CreateListing"
import ListItem from "./pages/ListItem"
import AboutApp from "./pages/AboutApp"


function App(){
    return(
        <div className="app">
        <MarketContextProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Explore/>}/>
                <Route path="/offers" element={<Offers/>}/>
                <Route path="/create-listing" element={<CreateListing/>}/>
                <Route path="/about" element={<AboutApp/>}/>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/category/:categoryName" element={<Categories/>}/>
                <Route path="/category/:categoryName/:listingId" element={<ListItem/>}/>
                <Route  path="profile" element={<PrivateRoute/>}>
                <Route path="/profile" element={<Profile/>}/>
                </Route>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
            </Routes> 
            <Navbar/>   
        </Router>
        <ToastContainer/>
        </MarketContextProvider>
       
        </div>
    )
}
export default App