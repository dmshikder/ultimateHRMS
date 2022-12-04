import React from 'react';
import image from '../../assets/image.png';
import Logo from '../../assets/svg/Logo';
import Signup from '../Signup/Signup';

const Home = () => {
  return (
    <div className=" bg-base-100 mt-10 flex flex-col justify-center items-center lg:flex-row ">
  <div className='flex flex-col items-center justify-center'>
    <Logo/>
    <img src={image} alt="" />
  </div>
  <div>
  <Signup/>
  
  </div>
</div>
  )
}

export default Home