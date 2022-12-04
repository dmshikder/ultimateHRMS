import React from "react";

const PersonalInfo = ({ formData, setFormData }) => {
  return (
    <>
      <div className="flex flex-col gap-16">
        <input
          className="border-b w-72"
          type="text"
          name=""
          id=""
          placeholder="Write First Name"
          onChange={(e)=>setFormData({...formData, first_name:e.target.value})}
          value={formData.first_name}
          
         required/>
        <input
          className="border-b w-72"
          type="text"
          name=""
          id=""
          placeholder="Write Last Name"
          onChange={(e)=>setFormData({...formData, last_Name:e.target.value})}
          value={formData.last_Name}
         required/>
      </div>
        
    </>
  );
};

export default PersonalInfo;
