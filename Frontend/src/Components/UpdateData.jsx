import React from 'react'
import { RiCloseLargeFill } from "react-icons/ri";

const UpdateData = ({onClose}) => {
    const handleUpdate = async (id) => {
        try{
          const responce=await axios.put(`http://localhost:4000/Data/signup/${id}`);
          console.log("Data Updated successfully", responce);
    
        }catch(error){
          console.error("Error updateData data:", error);
    
        }
      }

  return (
<>
 <div>
 <RiCloseLargeFill onClick={onClose} />
  <form >
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" required />
    <br />
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" required />
    <br />
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" name="password" required />
    <br />
    <label htmlFor="phone">Phone:</label>
    <input type="tel" id="phone" name="phone" required />
    <br />
    <label htmlFor="address">Address:</label>
    <input type="text" id="address" name="address" required />
    <br />
    <button 
    onClick={() => handleUpdate (user._id)}
    type="submit" >Update</button>
  </form>
 
 </div>
</>  )
}

export default UpdateData