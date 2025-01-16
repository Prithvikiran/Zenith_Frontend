import Button from 'elements/button';
import Form from 'components/form';
import Querybox from 'elements/querybox';
import './signup.css'

const fields = [
    { type: "text", placeholder: "Username", name: "username" },
    { type: "email", placeholder: "Email", name: "email" },
    { type: "password", placeholder: "Password", name: "password" },
  ];

function Signup() {
    return (
     <div className='signup'>
       
       <div className="signup-form-container">
      <h1 style={{ color: "red" }}>Zenith</h1>
      <h2>Create a new account</h2>
      <p>It's quick and easy.</p>
      <Form className="frm">
      {fields.map((field, index) => (
          <Querybox key={index} {...field} className="form-group" />
        ))}
        <Button type="submit" className="btn" text="Register" />
      </Form>
    </div>

     </div>
    
            
    
    );
}

export default Signup;
