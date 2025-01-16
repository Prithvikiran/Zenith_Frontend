import React,{useEffect,useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './elements/header';
import './App.css';
import Login from './pages/auth/login_page'
import Signup  from "pages/auth/signup_page";




const fields = [
  { type: "text", placeholder: "Username", name: "username" },
  { type: "email", placeholder: "Email", name: "email" },
  { type: "password", placeholder: "Password", name: "password" },
];

function App() {
  return (
    <Router>
      <Routes>
        
      <Route path="/signup" element={
             <>
             <Header />
             <Signup />
             
           </>
        } />
        <Route path="/login" element={
          <>
          <Header />
          <Login />
          </>
        }/>


        <Route path="/" element={
             <>
             <Header />
    
           </>
        } />

      </Routes>
    </Router>
  );
}

export default App;
