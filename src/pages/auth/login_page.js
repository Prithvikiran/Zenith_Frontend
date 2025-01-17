
import Form from 'components/form';
import Pic from 'elements/image';
import './login_page.css';

const fields = [
  { type: "input", placeholder: "Enter Username", name: "username" ,inputType:"text"},
  { type: "input", placeholder: "Enter Password", name: "password",inputType:"password" },
  { type: "button", text: "Log in", className: "btn" },
  { type: "link", text: "Forgotten Password", href: "#", className: "forgot-password" },
  {type:"hr",className:"hr"},
  { type: "button", text: "Create new account", className: "btn" },
];

function Log() {
  return (
    <div className="login-page">
      <div className="brand-section">
        <h1 className="brand-name">Zenith</h1>
        <Pic src="logo.png" alt="zenith-logo" className="lg" /> 
        <p>Zenith helps you connect and share with the people in your life.</p>
        <Form className="frm" fields={fields} />
      </div>
    </div>
  );
}

export default Log;

