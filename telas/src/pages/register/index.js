import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cadastro from '../../images/cadastro1.png';
import gria from '../../images/gria.png';
import './index.css';
function Register() {

  const [register, setRegister] = useState({
    cpfCnpj: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setRegister({
      ...register, [name]: value,
    });
  };

  const handleClick = async () => {    
    alert('Cadastro realizado com sucesso');
  };

  return(
    <div className="div-main">      
      <div className="div-first-content">
        <img src={ cadastro } alt="logo-cadastro" />
      </div>

      <div className="div-second-content">
        <div className="div-header">
          <div className="div-phrase">
            <h3 className="h3-register">Cadastrar Candidato</h3>
            <p>Cadatre-se e encontre a oportunidade que deseja</p>
          </div>

          <img className="img-logo-gria" src={ gria } alt="logo-gria" />
        </div>
        
        <form className="form">
          <input
            className="input-cpf-cnpj"              
            placeholder="CPF ou CNPJ"
            name="cpf-cnpj"            
            type="text"
            onChange={ (event) => handleChange(event) }         
          />

          <input
            className="input-email"              
            placeholder="E-mail"
            name="email"          
            type="email"
            onChange={ (event) => handleChange(event) }
          /> 

          <input
            className="input-password"
            placeholder="Senha"
            name="password"          
            type="password"
            onChange={ (event) => handleChange(event) }
          />

          <input
            className="input-confirm-password"              
            placeholder="Confirmar Senha"
            name="confirmPassword"          
            type="password"
            onChange={ (event) => handleChange(event) }
          /> 

          <button 
          type="button" 
          className="button-register"
          onClick={ handleClick }
          >
            CADASTRAR
          </button>   
        </form>                     
        <Link className="link-login" to="/login">
          JÁ POSSUI CADASTRO? FAÇA LOGIN AQUI
        </Link>        
      </div>                   
    </div>
  );
}

export default Register;