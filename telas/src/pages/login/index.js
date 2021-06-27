import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return(
    <div className="div-main">
      <Link to= "/register"> Voltar </Link>
      Tela de Login
    </div>
  );
}

export default Login;