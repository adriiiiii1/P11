import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useLoginMutation } from '../../app/API';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../app/actions/user.action';
import "./Loginform.css";

export default function LoginForm() {
  const [login, { isLoading }] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (isLoading) {
      return;
    }
  
    try {
      const response = await login({ email: email, password: password }).unwrap();
      if (response.status === 200) {
        localStorage.setItem('token', response.body.token); 
        dispatch(loginUser(email));
      }
      // login reussi
      navigate("/user");
    } catch (err) {
      // erreur
      console.error('Login error:', err);
      setErrorMessage("Invalid username or password. Please try again.");
    }
  };

  return (
    <main className="main bg-dark">
      <section className='loginform'>
        <form onSubmit={handleSubmit} className="sign-in-content">
          <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon-form" size="lg" />
          <h1>Sign In</h1>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}