import React, { useState } from 'react';
import "./Login.css";
import { Link} from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className='Container'>
      <h3 className='tittle'>Iniciar sesión</h3>
      <form onSubmit={handleSubmit}>
        <div className='contCorreo'>
        <h3 className='subTittle'>Correo electrónico *</h3>
        <input 
          className='Input'
          type="email"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className='contContra'>
        <h3 className='subTittle'>Contraseña*</h3>
        <input
          className='Input'
          type="password"
          placeholder=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <div className='ContButton'>
        <button className='Button ButtonIniciar' type="submit">
          <p className='textButton textButtonIniciar'>INICIAR</p>
          <p className='textButton textButtonIniciar'>SESION</p>

          </button>
        <Link
          to={'/register'}
          className='Button ButtonCrear'
        >
          <p className='textButton textButtonCrear'>CREAR UNA</p>
          <p className='textButton textButtonCrear'>CUENTA</p>

        </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;