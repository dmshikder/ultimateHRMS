import React from 'react';
import image from '../../assets/image.png';
import Logo from '../../assets/svg/Logo';

const Home = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
  <div>
    <Logo/>
    <img src={image} alt="" />
  </div>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
  )
}

export default Home