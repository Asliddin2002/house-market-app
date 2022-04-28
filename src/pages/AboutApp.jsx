import React from 'react'
import { useState } from 'react'



function AboutApp() {
    const[translate,setTranslate] = useState(false)


  return (
    <div className='about-app'>
        <main className='about-card'>

            <div className="header">
                <h5>{translate? "Dastur haqida": "About app"}</h5>
                <button className='btn btn-dark' onClick={()=> setTranslate(!translate)}> {translate ?"Translate in Eng" : "Tarjima qilish uz"}</button>
            </div>
            
            {translate? <p>Bu Javascriptning React kutubxonasidan foydalangan holda ishlab chiqilgan  mobil ilova. U CSS va Bootsrap va biroz moddiy CSS bilan bezalgan.
                Uning vazifasi uylarni sotish yoki ijaraga berishdir. Foydalanuvchi o'z profiliga kirishi va tizimga kirishi mumkin. Bunday holda, ular ro'yxatlarni qo'shishlari mumkin bo'ladi.
                Agar foydalanuvchi login parolini unutgan bo'lsa, "Forgot password" bo'limiga o'tadi va yangi parolni email orqali qabul qiladi. Tizimga kirish, va google bilan tizimga kirish uchun FireBase malumotlar bazasidan foydalanilgan.
                <br/>
                Kamchiliklar: Foydalanuvchi rasmni yuklay olmaydi, lekin rasmlarning havola manzilini yuklashi mumkin.
                Roʻyxat elementlari mahalliy xotirada saqlanmaydi.
                <br/>
                <br/>
               <span>Asliddin Xolto`rayev</span> 
                </p>: <p>This is mobile-first app developed by using React library of Javascript. It was styled with CSS and Bootsrap and a bit material CSS.
                Duty of it is to sell or rent Houses. User can Log up and Log in their profile. In this case, they will be able to add listings.
                If user forgot their login password, they will Go through "Forgot password". For log in ,log up and, sign in with google, FireBase was used.
                <br/>
                Deficiencies: User cannot upload picture but can upload link address of pictures.
                List items will not be saved in local storage.
                <br/>
                <br/>
                <span>Asliddin Kholturaev</span></p>}
            <p>

                </p>


        </main>
    </div>
  )
}

export default AboutApp