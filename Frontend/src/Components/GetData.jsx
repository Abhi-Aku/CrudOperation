import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const GetData = () => {
  const [GetData, setGetData] = useState([]);


  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/SignUp/api');
      console.log(response.data.response);
      setGetData(response.data.response);
    } catch (err) {
      console.log("Data not retrieved", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);


const DataDelete = (id) => {
  axios.delete(`http://localhost:4000/SignUp/api/${id}`)
    .then(response => {
      setGetData(prevData => prevData.filter(item => item._id !== id));
      alert("Data Deleted",response); 
    })
    .catch(error => {
      console.log(error);
    });
};
  

  return (
    <div className="overflow-x-auto p-4">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Last Name</th>
            <th className="border p-2">Gender</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Password</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {GetData.map((item) => (
            <tr key={item._id} className="even:bg-gray-50 hover:bg-gray-200 transition">
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.
lastname}</td>
              <td className="border p-2">{item.gender}</td>
              <td className="border p-2">{item.phone}</td>
              <td className="border p-2">{item.email}</td>
              <td className="border p-2">{item.password}</td>
              <td className="border p-2">{item.address}</td>
              <td className="border p-2 gap-5 flex items-center justify-center ">
                <button className='hover:underline'> Edit</button>
                <button 
                onClick={()=>DataDelete(item._id)}
               
                
                className='hover:underline'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
