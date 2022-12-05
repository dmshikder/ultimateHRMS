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
    <div className=" bg-white mt-10 flex flex-col justify-center items-center lg:flex-row ">
    <div className='flex flex-col items-center justify-center'>
      <Logo/>
      <img src={image} alt="" />
    </div>
    <div>

    <form onSubmit={(e)=>handleSubmit(e)}>
    <div className=" w-80  h-448 border-2 flex flex-col items-center shadow-bShadow md:w-640 md:mb-10 lg:w-480 lg:mr-5 xl:w-640 ">
    <p className='mt-16 mb-10 text-xl font-semibold md:text-3xl'>Log in Form</p>
       <div className='flex flex-col gap-10'>
       <input onChange={(e)=>setEmail(e.target.value)}
          className="border-b w-72 md:w-96 md:placeholder:text-2xl bg-white"
          type="text"
          name=""
          id=""
          placeholder="Write Email Address"
         
          
        />
        <input onChange={(e)=>setPassword(e.target.value)}
          className="border-b w-72 md:w-96 md:placeholder:text-2xl bg-white"
          type="password"
          name=""
          id=""
          placeholder="Write Password"
       
        />
       </div>
      <p className='-ml-10 md:-ml-32'>Your password must be 8 character</p>
        <button className="w-36 h-12 mt-16 bg-white hover:bg-blueEyes border-2 border-blueEyes text-blueEyes rounded-2xl hover:text-white text-base flex flex-row items-center justify-center">Login</button>
      <p className="mt-10"> Don't have an account? <span className='underline font-semibold text-blueEyes'><Link to='/'>SIGNUP HERE</Link></span></p>
      </div>


    </form>
    </div> 
  </div>
  )
}

export default Login