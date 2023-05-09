import React from 'react'
import { useState } from 'react'
import './register.css'
import axios from "axios";
import {useHistory} from 'react-router-dom';


const Register = () => {
  const history=useHistory();


  

  const [user,setUser]=useState({
    name:'',
    email:'',
    password:'',
    reEnterPassword:''
  });

  const handleChange=(e)=>{
    const{name,value}=e.target
    setUser({
      ...user,
      [name]:value
    })
  }

  const register=()=>{
    const {name,email,password,reEnterPassword} = user
    if(name && email && password && (password==reEnterPassword)){
      axios.post("http://localhost:9000/register",user)
      .then(res=>{console.log(res)})

    }
    else{
      alert("Invalid Input")
    }
    
  }




  return (


    <div>
      <div className='login'>
      <h1>    Register </h1>
      <input type='text' name='name' value={user.name} placeholder='enter your name please' onChange={handleChange}></input>
      <input type='text'  name='email' value={user.email}  placeholder='Enter your email'  onChange={handleChange}></input>
      <input type='password' name='password' value={user.password} placeholder='enter your password'  onChange={handleChange}></input>
      <input type='password' name='reEnterPassword' value={user.reEnterPassword} placeholder='re-enter your password'  onChange={handleChange}></input>
      <div className='button' onClick={register}>Register</div>
      <div>Or</div>
      <div className='button' onClick={()=> history.push('/login')}>Login</div>

    </div>
    </div>
  )
}

export default Register
