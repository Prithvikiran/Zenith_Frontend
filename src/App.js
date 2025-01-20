import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, data } from "react-router-dom";
import Header from "./elements/header";
import "./App.css";
import Login from "./pages/auth/login_page";
import Signup from "./pages/auth/signup_page";

const fields = [
  { type: "text", placeholder: "Username", name: "username" },
  { type: "email", placeholder: "Email", name: "email" },
  { type: "password", placeholder: "Password", name: "password" },
];

const Retrieve = () => {
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    fetch("http://localhost:5000/api/check")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text() ;
      })
      .then((data) => {
        setMessage(data)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Zenith Frontend</h1>
      <p>{message || "Loading..."}</p>
      
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/signup"
          element={
            <>
              <Header />
              <Signup />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login />
            </>
          }
        />
        <Route
          path="/retrieve"
          element={
            <>
              <Header />
              <Retrieve />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <h2>Welcome to Zenith Frontend!</h2>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
