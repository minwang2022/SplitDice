import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link className="signup-button" to="/login">Login</Link>
      &nbsp;&nbsp;
      <Link className="signup-button" to="/signup">Sign up!</Link>
    </nav>
  );
  const personalGreeting = () => (
    <header className="login-signup">
      <h2 >Hi, {currentUser.username}!</h2>
      &nbsp;&nbsp;
      <button className="signup-button" onClick={logout}>Log Out</button>
    </header>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;