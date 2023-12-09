import React, { useState } from 'react';
import "./Login.css"

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
        <h3 className='subTittle'>Correo electrónico *</h3>
        <input 
          className='Input'
          type="email"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3 className='subTittle'>Contraseña*</h3>
        <input
          className='Input'
          type="password"
          placeholder=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='ContButton'>
        <button className='Button ButtonIniciar' type="submit"><p className='textButton textButtonIniciar'>INICIAR SESION</p></button>
        <button className='Button ButtonCrear' type="button"><p className='textButton textButtonCrear'>CREAR UNA CUENTA</p></button>
        </div>
      </form>
    </div>
  );
};

export default Login;