import Button from 'elements/button';
import Signup_form from 'components/signupform';

function Signup() {
    return (
        <div>
     <div className="signup-form-container">
      <h1 style={{ color: "red" }}>Zenith</h1>
      <h2>Create a new account</h2>
      <p>It's quick and easy.</p>
      <Signup_form></Signup_form>
    </div>
            
        </div>
    );
}

export default Signup;
