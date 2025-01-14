
import Querybox from 'elements/querybox';
import Button from 'elements/button'


function Signup_form(){
    return(
        <div>
         <form>
         <Querybox type="text" placeholder="Username" name="username" className="form-group"/>
         <Querybox type="email" placeholder="Email" name="email" className="form-group" />
         <Querybox type="password" placeholder="Password" name="password" className="form-group" />
         <Button type="submit" className="btn" text="Register" />
       </form>
       </div>
  
    );
}

export default Signup_form;