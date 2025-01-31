import endpoints from 'config';
import { useNavigate } from 'react-router-dom';


export const setSession = (response,navigate) => {

    try {
      const token = response.data.token;
      localStorage.setItem("authToken", token);
      const isloggedin=localStorage.setItem("isloggedin","true");
      
      console.log("Session set successfully");
      navigate('/post'); 

    } catch (error) {
      console.error("Error setting session:", error.message);
    }
  };
  
