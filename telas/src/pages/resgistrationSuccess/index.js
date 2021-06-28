import React from 'react';
import { Link } from 'react-router-dom';

function ResgistrationSuccess(props) {
  const email = (props.location.state);
  return (
    <div>
      <Link to= "/register"> Voltar </Link>
      <br />
      <br />
      Registro Realizado com sucesso (Construção)
      <br />
      <br />
      {`${ email }`}
    </div>
  )
}

export default ResgistrationSuccess;