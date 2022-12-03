import React from 'react'

const OtherInfo = ({ formData, setFormData }) => {
  return (
    <div className='flex flex-col gap-16'>
      <div className='flex flex-row gap-8'>
      <input className='border-b w-16' type="number" name="" id="" placeholder='+880' 

      />
      <input className='border-b w-271' type="number" name="" id="" placeholder='1xxxxxxxxxx' 
        onChange={(e)=>setFormData({...formData, phone_number:e.target.value})}
          value={formData.phone_number}
      />
      </div>
      <input className='border-b w-368' type="email" name="" id="" placeholder='Write Email Address' 
        onChange={(e)=>setFormData({...formData, email:e.target.value})}
          value={formData.email}
      />
    </div>
  )
}

export default OtherInfo