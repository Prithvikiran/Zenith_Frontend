
import { Navigate  , Outlet} from "react-router-dom"
function check_for_token(){
    localStorage.getItem('authtoken')
   const isloggedin=localStorage.getItem('isloggedin')
   console.log(isloggedin)
   return isloggedin==="true"?<Outlet/>:<Navigate to ="login"/> 
}

export default check_for_token;