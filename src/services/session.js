import endpoints from 'config';
import { useNavigate } from 'react-router-dom';


export const setSession = (response) => {

    try {
      const token = response.data.token;
      localStorage.setItem("authToken", token);
      console.log("Session set successfully");

    } catch (error) {
      console.error("Error setting session:", error.message);
    }
  };
  
  export const handleUnauthorizedError = (err, navigate) => {
    console.error("Unauthorized access - logging out user");
    localStorage.removeItem("authToken"); 
    navigate(endpoints.login); 
  };
  