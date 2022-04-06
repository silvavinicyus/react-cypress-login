import React, { ChangeEvent, FormEvent, useState } from "react";
import './styles.css';
import compalLogo from '../../assets/logo.svg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  function handleEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);    
  }

  function handlePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);            
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if(email === "admin@compal.com.br" && password === "123456")  {        
      navigate('/home');
    } else {
      toast.error("Email ou senha incorretos!");
    }
  }

  return (
    <div className="login-box">

      <img src={compalLogo} alt="logo" />

      <form onSubmit={handleSubmit}>

        <input type="text" placeholder="example@compal.com" onChange={handleEmail}/>
        
        <input type="password" placeholder="********" onChange={handlePassword}/>

        <button>Entrar</button>
      </form>
      <ToastContainer position="bottom-left"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick        
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover/>
    </div>
  )
}

export { Login };
