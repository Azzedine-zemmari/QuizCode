import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Inscription.css'

function Inscription() {
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const validateForm = () => {
    setError('')
    if (!nom || !prenom) {
      setError('Nom and prenom are required fields')
      return false
    }
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError('Please enter a valid email address')
      return false
    }

    if (!password) {
      setError('Password is a required field')
      return false
    }

    return true
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (validateForm()) {
      // submit the form data
      console.log('Form data:', { nom, prenom, email, password })
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>👋 Welcome</h2>
        <div className="info">
         
          <label>F.name</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={prenom}
            onChange={e => setPrenom(e.target.value)}
          />
           <label>Name</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={nom}
            onChange={e => setNom(e.target.value)}
          />
        </div>
        <div className="infoS">
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Sign up</button>
        <div className="ba">
        <h4>Already have an account!</h4>
        <Link to="/"><p>Login</p></Link>
        </div>
      </form>
    </div>
  )
}

export default Inscription