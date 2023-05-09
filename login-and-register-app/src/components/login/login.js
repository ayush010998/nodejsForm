import React from 'react'
import { useState } from 'react';
import './login.css';
import axios from "axios";
import {useHistory} from "react-router-dom";
const Login = () => {

  const history=useHistory();

  const [user,setUser]=useState({
    email:'',
    password:''
  });

   const handleChange=(e)=>{
    const{name,value}=e.target
    setUser({
      ...user,
      [name]:value
    })
  }

  const login=()=>{
    axios.post("http://localhost:9000/login").then((res)=>{console.log(res)
    })
  }


  return (
    <div className='login'>
      <h1>Login</h1>
      <input type='text' name='email' value={user.email} placeholder='Enter your email' onChange={handleChange}></input>
      <input type='password' name='password' value={user.password} placeholder='enter your password' onChange={handleChange}></input>
      <div className='button' onClick={login}>Login</div>
      <div>Or</div>
      <div className='button' onClick={()=>history.push('/register')}>Register</div>

    </div>
  )
}

export default Login
