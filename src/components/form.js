import { useState ,useRef} from 'react';
import './form.css';
import { useNavigate } from 'react-router-dom';
import Querybox from 'elements/querybox';
import Link from 'elements/link';
import Button from 'elements/button';
import Hr from 'elements/hr';
import connect  from 'services/api';
import endpoints from 'config';
import posts from 'pages/posts/create_post_page';


function Form({ className, children, fields = [] }) {
  
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({});
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  
  const endpoint = fields.find(field => field.endpoint)?.endpoint || "/"
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    setError(null);
    setData(null);

    try {
      const response = await connect({
        formValues,
        apiEndpoint:endpoint,
        method: "POST", 
        headers: {
          "Content-Type": "application/json" 
        },
        body: formValues,
      });
      setData(response);
      navigate('/post') // hardcoded the route - to be improvised 
      
    } catch (err) {
      setError(err.message || 'An error occurred while submitting the form.');
    } finally {
      setLoader(false);
    }
    // formRef.current.reset(); 
  };

  const renderField = (field) => {
    switch (field.type) {
      case 'input':
        return (
          <Querybox
            key={field.name}
            name={field.name}
            type={field.inputType || 'text'}
            placeholder={field.placeholder}
            className="form-group"
            onChange={handleChange}
          />
        );
      case 'button':
        
        return (
          <Button
            key={field.name}
            name={field.name}
            type={field.buttonType || 'submit'}
            text={field.text}
            className={field.className}
            onClick={field.onClick} 
          />
          
        );
      case 'link':
        return (
          <Link
            key={field.name}
            name={field.name}
            href={field.href || '#'}
            className={field.className}
            text={field.text}
          />
        );
      case 'hr':
        return <Hr key={field.name} className={field.className} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ color: "red",textAlign:"center" }}>

    <form className={className} onSubmit={handleSubmit}>
     
      {fields.map((field) => renderField(field))}
      {children}
      {data && <div className="success-message">{data.message}</div>}
    </form>

     {loader && <div>Loading...</div>}
     {error && <div>{error}</div>} </div>
   
  );
}

export default Form;
