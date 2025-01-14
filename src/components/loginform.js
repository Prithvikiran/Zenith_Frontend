import Querybox from 'elements/querybox'
import Button from 'elements/button'
import './loginform.css'


function login_form(){
    return(
        <div className='login-form'>
        <form>
            <Querybox type="text" placeholder="Enter Username" name="username" className="form-group"></Querybox>
            <Querybox type="password" placeholder="Enter Password" name="Password" className="form-group"></Querybox>
        
        <Button type= 'sumbit' className='btn' text='Log in'></Button>
        </form>
        <a href="#" className="forgot-password">
          Forgotten password?
        </a>
        <hr />
        <Button type= 'sumbit' className='btn' text='Create new account'></Button>
            
        </div>
    );
}

export default login_form ;