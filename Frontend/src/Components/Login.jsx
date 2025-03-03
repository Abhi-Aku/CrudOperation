import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login= () => {
  const Navigation= useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/SignUp/api/login', formData);
      console.log(response);
      alert("Login Succes");
      setFormData({
        email: '',
        password: '',
       
      })
      Navigation('/dashboard');
      
      // token save localstorage
       console.log(response.data.token)

      const token=response.data.token;
      localStorage.setItem('token',token);
      localStorage.setItem('loginTimestamp', Date.now());
       
    } catch (error) {
      console.log("Data not send",error);
     
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;


