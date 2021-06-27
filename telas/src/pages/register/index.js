import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cadastro from '../../images/cadastro1.png';
import gria from '../../images/gria.png';


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
      <div className="div-body-register">
        <img src={ cadastro } alt="logo-cadastro" />
        <h3>Cadastrar Candidato</h3>
        <h6>Cadatre-se e encontre a oportunidade que deseja</h6>
        <img src={ gria } alt="logo-gria" />

        <label htmlFor="cpf-cnpj" className="label-cpf-cnpj">
          <input
            className="input-cpf-cnpj"
            id="cpf-cnpj"
            placeholder="CPF ou CNPJ"
            name="cpf-cnpj"            
            type="text"
            onChange={ (event) => handleChange(event) }         
          />
        </label>

        <label htmlFor="userEmail" className="label-email">
          <input
            className="input-email"
            id="userEmail"
            placeholder="E-mail"
            name="email"          
            type="text"
            onChange={ (event) => handleChange(event) }
          />
        </label>

        <label htmlFor="password" className="label-password">
          <input
            className="input-password"
            id="password"
            placeholder="Senha"
            name="password"          
            type="text"
            onChange={ (event) => handleChange(event) }
          />
        </label>

        <label htmlFor="confirm-password" className="label-confirm-password">
          <input
            className="input-confirm-password"
            id="confirm-password"
            placeholder="Confirmar Senha"
            name="confirmPassword"          
            type="text"
            onChange={ (event) => handleChange(event) }
          />
        </label>

        <button 
          type="button" 
          className="button-register"
          onClick={ handleClick }
        >
          CADASTRAR
        </button>   

        <Link className="link-login" to="/login">
          JÁ POSSUI CADASTRO? FAÇA LOGIN AQUI
        </Link>        
      </div>      
    </div>
  )
}

export default Register;