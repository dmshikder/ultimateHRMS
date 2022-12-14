import React from "react";

const Password = ({ formData, setFormData }) => {


  return (
    <div className="flex flex-col items-start">
      <input
        className="border-b w-60 md:w-96 md:placeholder:text-2xl bg-white"
        type="password"
        name=""
        id=""
        placeholder="Write Password"
        onChange={(e)=>setFormData({...formData, password:e.target.value})}
          value={
            formData.password}
       required/>
      
      <p>Your password must be 8 character</p>
    </div>
  );
};

export default Password;
