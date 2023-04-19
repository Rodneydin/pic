
import React, { useEffect } from 'react'
import Login from './components/Login'
import Home from './container/Home'
import {Routes, Route, useNavigate, BrowserRouter} from 'react-router-dom';




const App = () => {
 

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) <Route path="/login" element={<Login/>}/>
  }, []);
  
  
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login/>}/>
      <Route path="/*" element={<Home/>} /> 
    </Routes>
    </BrowserRouter>
    
    
    </>
    
  )
}

export default App


