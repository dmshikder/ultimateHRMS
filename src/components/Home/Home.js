import React from 'react';
import image from '../../assets/image.png';
import Logo from '../../assets/svg/Logo';
import Signup from '../Signup/Signup';

const Home = () => {
  return (
    <div className="card lg:card-side bg-base-100 mt-10">
  <div>
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