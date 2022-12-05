import React, { useEffect, useState } from "react";
import Logo from "../../assets/svg/Logo";

const Attendance = () => {
  const [users, setUser] = useState({});

  useEffect(() => {
    fetch("https://test.nexisltd.com/test", {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);
  return (
    <div>
      <div className="flex flex-col items-center gap-4 justify-center mt-10 md:flex-row md:gap-6 md:-ml-36">
       <div className="md:-mt-28"> <Logo /></div>
        <h3 className="text-3xl font-semibold w-96 h-72 bg-blueEyes text-white rounded pt-4 md:mt-10 md:h-16 md:pt-3">
          Attendance information
        </h3>
      </div>

      <table class=" flex flex-col items-center gap-6 ">
        <thead>
          <tr className="text-black flex flex-row gap-10 mt-6 bg-red-300 px-6 rounded md:w-640 md:items-center md:justify-evenly md:py-4">
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(users).map((key,i)=>{
              return(
                <tr className="flex flex-row gap-10 items-center bg-green-300 text-black px-6 py-4 md:w-640 md:items-center md:justify-evenly md:rounded border-2 " key={i}>
                  <td>{users[key].id}</td>
                  <td className="w-16 md:w-28 text-left">{users[key].name}</td>
                  <td className="w-16 md:w-24">{users[key].position}</td>
                  <td>{users[key].attendance["2022-11-02"].status}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      {/* {Object.keys(users).map((key, i) => {
        return (
          <div className="flex flex-row items-center justify-evenly" key={i}>
            <h3> {users[key].id}</h3>
            <h3> {users[key].username}</h3>
            <h3>{users[key].position}</h3>
            <h3>{users[key].attendance["2022-11-02"].status}</h3>
          </div>
        );
      })} */}
    </div>
  );
};

export default Attendance;
