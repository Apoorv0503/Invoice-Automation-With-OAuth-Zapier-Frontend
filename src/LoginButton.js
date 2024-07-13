// LoginButton.js
import React from 'react';

const LoginButton = () => {
  return (
    <div>
      <a href="http://localhost:5000/auth/google">Login with Google</a>
    </div>
  );
};

export default LoginButton;

// This component handles the Google OAuth login button using a link to your backend /auth/google endpoint.