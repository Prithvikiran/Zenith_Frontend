import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./elements/header";
import "./App.css";
import Login from "./pages/auth/login_page";
import Signup from "./pages/auth/signup_page";
import Posts from "pages/posts/create_post_page";
import Check from "middlewares/protected"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route element={<Check/>}>

         <Route

         path="/post"
          element={<Posts />}/>
    
        </Route>
       


        
        <Route
          path="/"
          element={<h2>Welcome to Zenith Frontend!</h2>}
        />
      </Routes>
    </Router>
  );
}

export default App;
