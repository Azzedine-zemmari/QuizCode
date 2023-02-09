import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Inscription from './Inscription'
function App() {
 
  return (
   <>
   <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/Inscription" element={<Inscription />} />
     <Route path="/Login" element={<Login />} />
     <Route path="/Home" element={<Home />} />
    </Routes>
   <style>
    @import url('https://fonts.googleapis.com/css2?family=Lexend+Tera&display=swap');
   </style>
   </>
  )
}

export default App
