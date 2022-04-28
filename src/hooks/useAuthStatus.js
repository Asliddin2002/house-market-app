import {useState, useEffect,useRef} from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] =useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)
    const isMouted = useRef(true)


    useEffect(() => {
        if(isMouted){
            const auth = getAuth()
            onAuthStateChanged(auth,(user)=> {
                if(user){
                    setLoggedIn(true)
                }
            setCheckingStatus(false)
            })
                    }
            return ()=> {
                isMouted.current = false
            }
    }, [isMouted])


  return {loggedIn, checkingStatus}
}

