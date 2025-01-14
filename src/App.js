import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'; 
import Header from './elements/header';
import Login from './pages/auth/login_page'
import Signup  from "pages/auth/signup_page";



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
