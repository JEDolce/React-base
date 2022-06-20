import React, { useState, useEffect } from 'react';
import './app.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Post from './pages/Post';
import Login from './pages/Login';
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      fetch("http://localhost:8000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }).then(response => {
        if (response.status === 200) return response.json();
        throw new Error("authentication has failed!")
      }).then(resObject => {
        setUser(resObject.user)
      }).catch(err => {
        console.log(err);
      })
    };
    getUser();
  }, []);

  return (
    <div className="wrapper">
      <Navbar user={user} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/login' element={user ? <Navigate to={"/"} /> : <Login />} />
      </Routes>
    </div>
  )
}

export default App;
