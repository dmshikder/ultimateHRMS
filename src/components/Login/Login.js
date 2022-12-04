import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import image from '../../assets/image.png';
import Logo from '../../assets/svg/Logo';
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault();
    const userinfo={email,password}

    fetch('https://test.nexisLtd.com/login',{
      method:'POST',
      headers:{
        'content-type':'application/json'},
        body:JSON.stringify(userinfo)

    })
    .then(res=>res.json())
      .then(data=>{
        console.log('tt',data)
        localStorage.setItem('accessToken', data.access_token)
        navigate('/attendance')
        
        
      })
      
    }
    




  return (
    <div className="card lg:card-side bg-base-100 mt-10">
    <div>
      <Logo/>
      <img src={image} alt="" />
    </div>
    <div>

    <form onSubmit={(e)=>handleSubmit(e)}>
    <div className="form-container w-516 h-630 border-2 flex flex-col items-center">
    <p className='mt-16 mb-10'>Log in Form</p>
       <div className='flex flex-col gap-10'>
       <input onChange={(e)=>setEmail(e.target.value)}
          className="border-b w-368"
          type="text"
          name=""
          id=""
          placeholder="Write Email Address"
         
          
        />
        <input onChange={(e)=>setPassword(e.target.value)}
          className="border-b w-368"
          type="text"
          name=""
          id=""
          placeholder="Write Password"
       
        />
       </div>
      <p className='-ml-28'>Your password must be 8 character</p>
        <button className="w-36 h-12 mt-16 bg-blueEyes rounded-2xl text-white text-base flex flex-row items-center justify-center">Login</button>
      <p className="mt-10"> Don't have an account? <span className='underline font-semibold text-blueEyes'><Link to='/'>SIGNUP HERE</Link></span></p>
      </div>


    </form>
    </div> 
  </div>
  )
}

export default Login