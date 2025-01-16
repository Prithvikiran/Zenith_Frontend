import Button from 'elements/button';
import Form from 'components/form';
import Link from 'elements/link';
import Querybox from 'elements/querybox';
import Pic from 'elements/image';
import './login_page.css';

const fields = [
  { type: "text", placeholder: "Enter Username", name: "username" },
  { type: "password", placeholder: "Enter Password", name: "password" },
];

function Log() {
  return (
    <div className="login-page">
      <div className="brand-section">
        <h1 className="brand-name">Zenith</h1>
        <Pic src="logo.png" alt="zenith-logo" className="lg" />
        <p>Zenith helps you connect and shaljllre with the people in your life.</p>
        <Form className="frm">

        {fields.map((field, index) => (
            <Querybox key={index} {...field} className="form-group" />
          ))} 
          <Button type="submit" className="btn" text="Log in" />
          <Link href="#" className="forgot-password" text="Forgotten Password" />
          <hr />
          <Button type="submit" className="btn" text="Create new account" />

       
      
        </Form>
      
         
      </div>
    </div>
  );
}

export default Log;

