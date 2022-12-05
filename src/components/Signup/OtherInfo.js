import React from 'react'

const OtherInfo = ({ formData, setFormData }) => {
  return (
    <div className='flex flex-col gap-16'>
      <div className='flex flex-row gap-2'>
      <input className='border-b w-10 md:w-16 md:placeholder:text-2xl bg-white' type="number" name="" id="" placeholder='+880' 

      />
      <input className='border-b w-48 md:w-72 md:placeholder:text-2xl bg-white' type="number" name="" id="" placeholder='1xxxxxxxxxx' 
        onChange={(e)=>setFormData({...formData, phone_number:e.target.value})}
          value={formData.phone_number}
       required/>
      </div>
      <input className='border-b w-60 md:w-96 md:placeholder:text-2xl bg-white' type="email" name="" id="" placeholder='Write Email Address' 
        onChange={(e)=>setFormData({...formData, email:e.target.value})}
          value={formData.email}
       required/>
    </div>
  )
}

export default OtherInfo