import Form from 'components/form';
import './signup_page.css'
import endpoints from '../../config';


const fields = [
    { inputType: "text", placeholder: "Username", name: "username" , type:"input"},
    { inputType: "email", placeholder: "Email", name: "email" ,type:"input"},
    { inputType: "password", placeholder: "Password", name: "password",type:"input"},
    {type:"button",className:"btn",text:"Register",endpoint:endpoints.register}
  ];

function Signup() {
    return (
     <div className='signup'>
       
       <div className="signup-form-container">
      <h1 style={{ color: "red" }}>Zenith</h1>
      <h2>Create a new account</h2>
      <p>It's quick and easy.</p>
      <Form className="frm" fields={fields} />
    </div>

     </div>
    
            
    
    );
}

export default Signup;
