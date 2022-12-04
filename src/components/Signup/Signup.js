import React, { useState } from "react";
import { Link } from "react-router-dom";
import OtherInfo from './OtherInfo';
import Password from './Password';
import PersonalInfo from './PersonalInfo';

const Signup = () => {
    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
      first_name:"",
      last_Name:'',
      phone_number:'',
      email:'',
      password:'',

    })

    function handleSubmit(e){
      e.preventDefault();
      const user = formData;
      console.log(user)

     
      fetch('https://test.nexisLtd.com/signup',{
        method:'POST',
        headers:{
          'content-type':'application/json'},
          body:JSON.stringify(user)

      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
      })
    }



    const FormTitles = ['SignUp Form','SignUp Form', 'SignUp Form'];

    const PageDisplay = () => {
      if (page === 0){
        return <PersonalInfo formData={formData} setFormData={setFormData}/>
      }
      else if (page === 1){
        return <OtherInfo formData={formData} setFormData={setFormData}/>
      }
      else {
        return <Password formData={formData} setFormData={setFormData}/>
      }
    }
  return (
    <>
      <form onSubmit={(e)=>handleSubmit(e)}>
      
        <div className=" w-80  h-448 border-2 flex flex-col items-center shadow-bShadow md:w-640 md:mb-10 lg:w-480 lg:mr-5 xl:w-640 ">
          <div className="Title">
            <h1 className="font-semibold text-lg mb-10 mt-16">{FormTitles[page]}</h1>
          </div>
          <div className="form-input">{PageDisplay()}</div>
          <div className="button flex flex-row items-center justify-center gap-10">
            <button
            hidden={page === 0}
             onClick={()=>{
                setPage((currPage)=>currPage - 1)
            }} className="back mt-16">back</button>
            <button 
            
             onClick={()=>{
              if(page=== FormTitles.length -1){
                // console.log(formData)

              }
              else{
                setPage((currPage)=>currPage +1)

              }
                
            }} className="w-36 h-12 mt-16 bg-blueEyes rounded-2xl text-white text-base flex flex-row items-center justify-center gap-4">

              {page === FormTitles.length - 1 ? "Submit" : 'Next Step 🡪' }
             </button>
          
            
            
          </div>
             <p className="mt-10" hidden={page !== 0 }>Already have an account? <span className='underline font-semibold text-blueEyes'><Link to='/login'>LOGIN HERE</Link></span></p>
        </div>
      </form>
    </>
  );
};

export default Signup;
