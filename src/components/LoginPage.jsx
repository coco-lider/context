import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <h2>Login</h2>
      <button>
        <Link to="/category">Login</Link>
      </button>
    </div>
  );
};

export default LoginPage;
