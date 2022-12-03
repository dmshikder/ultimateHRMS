import React, { useEffect, useState } from 'react';

const Attendance = () => {
    const [users, setUser] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data => setUser(data));
    },[])
  return (
    <div>
      <ul>
        {
          users.map(user=><li>name:{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default Attendance