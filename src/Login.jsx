import React,{useState} from 'react'
import { Link } from 'react-router-dom';
// import{Link}from 'react-router-dom'
import './Login.css'
function Login() {
const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email ) {
      setError('Please enter an email');
      return;
    }
    if(!password){
      setError('Please enter a password');
      return;
    }

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Perform the login
    console.log('Logging in with email:', email, 'and password:', password);
    setError('');
  };
  return (
    <div className='container'>
        <h3>Login</h3>
        <form onSubmit={handleSubmit} method="post" className="form">
            <div className="ff">
            <label className="label" htmlFor="email">email</label>
            <input type="text"  id="email"  value={email} onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div className="cc">
            <label className="label" htmlFor="password">password</label>
            <input type="password"  id="password"value={password} onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <br />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Login</button>
            <div className="bo">
            <h4>New here ?</h4>
            <Link to="/Inscription"><p>Sign in</p></Link>
            </div>
        </form>

    </div>
  )
}

export default Login