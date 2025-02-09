import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

library.add(fab, faGooglePlusG, faFacebookF, faGithub, faLinkedinIn);


function App() {
  const [active, setActive] = useState(false);

  const handleRegister = () => {
    setActive(true);
  };

  const handleLogin = () => {
    setActive(false);
  };

  return (
    <div className={`container ${active ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon"><FontAwesomeIcon icon={['fab', 'google-plus-g']} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={['fab', 'github']} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
          </div>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon"><FontAwesomeIcon icon={['fab', 'google-plus-g']} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={['fab', 'github']} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
          </div>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" onClick={handleLogin}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button className="hidden" onClick={handleRegister}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;