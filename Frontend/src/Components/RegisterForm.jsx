import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    gender: '',
    email: '',
    password: '',
    phone: '',
    address: ''
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    try{
  event.preventDefault();
  const response = await axios.post("http://localhost:4000/Data/signup", formData);
  console.log (response)

}  catch(err){
  console.log("Error Data send");
  
}    


    
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block font-medium">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="w-full p-2 border rounded-lg" 
            onChange={handleChange} 
            value={formData.name}
          />
        </div>

        <div>
          <label htmlFor="lastname" className="block font-medium">Lastname</label>
          <input 
            type="text" 
            name="lastname" 
            id="lastname" 
            className="w-full p-2 border rounded-lg" 
            onChange={handleChange} 
            value={formData.lastname}
          />
        </div>

        <div>
          <label htmlFor="gender" className="block font-medium">Gender</label>
          <select 
            name="gender" 
            id="gender" 
            className="w-full p-2 border rounded-lg" 
            onChange={handleChange} 
            value={formData.gender}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label htmlFor="email" className="block font-medium">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            className="w-full p-2 border rounded-lg" 
            onChange={handleChange} 
            value={formData.email}
          />
        </div>

        <div>
          <label htmlFor="password" className="block font-medium">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            className="w-full p-2 border rounded-lg" 
            onChange={handleChange} 
            value={formData.password}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block font-medium">Phone</label>
          <input 
            type="text" 
            name="phone" 
            id="phone" 
            className="w-full p-2 border rounded-lg" 
            onChange={handleChange} 
            value={formData.phone}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="address" className="block font-medium">Address</label>
          <textarea 
            name="address" 
            id="address" 
            rows="4" 
            className="w-full p-2 border rounded-lg" 
            onChange={handleChange} 
            value={formData.address}
          />
        </div>

        <div className="md:col-span-2">
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
