import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ShowData = () => {
  const navigator = useNavigate();
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/Data/signup");
      setUsers(response.data.users); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  
//  Delete Data 

  const handleDelete = async (id) => {
    try {
     const responce= await axios.delete(`http://localhost:4000/Data/signup/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    confirm('aru you sure delete');
      console.log("Data Deleted successfully", responce);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const GotoUpdate=()=>{
    navigator('/updateData');
  }
  



  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">User Data</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Last Name</th>
              <th className="py-2 px-4 text-left">Gender</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Password</th>
              <th className="py-2 px-4 text-left">Phone</th>
              <th className="py-2 px-4 text-left">Address</th>
              <th className="py-2 px-4 text-left flex justify-center items-center">Acction</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.lastname}</td>
                <td className="py-2 px-4">{user.gender}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.password}</td>
                <td className="py-2 px-4">{user.phone}</td>
                <td className="py-2 px-4">{user.address}</td>
                <th className="py-2 px-4 text-left flex justify-center items-center gap-3">
                <button  
                 onClick={GotoUpdate}
                className="hover:underline">Edit</button> 
                                
                <button  onClick={() => handleDelete(user._id)} className="hover:underline">Delete</button>                
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

 export default ShowData;
