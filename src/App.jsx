import React from 'react'
//import {Routes , Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'

function App() {
 
  return (
   <>
   {/* <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/Inscription" element={<Inscription />} />
    </Routes> */}
    <Login/>
   <style>
    @import url('https://fonts.googleapis.com/css2?family=Lexend+Tera&display=swap');
   </style>
   </>
  )
}

export default App
