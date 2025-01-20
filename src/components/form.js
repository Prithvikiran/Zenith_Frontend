
import { useState } from 'react';
import './form.css'
import Querybox from 'elements/querybox';
import Link from 'elements/link';
import Button from 'elements/button';
import Hr from 'elements/hr';
import submitform from 'services/login';


async function Form({ className, children, fields }) {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [data,setData]=useState(null);
  const [error,setError]=useState(null);
  const [loader,setLoader]=useState(null);

  
  const initialFormValues = fields.reduce((acc, field) => {
   
    if (field.name) {
      acc[field.name] = ""; 
    }
    return acc;
  });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    };
  
   
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoader(true);  
      setError(null);  
      setData(null);    
      
      try {
        const response = submitform(formValues);  
        setData(response);  
      } catch (err) {
        setError(err.message || "An error occurred while submitting the form.");
      } finally {
        setLoader(false); 
      }
    };
  
  
  const renderField = (field) => {
    switch (field.type) {
      case "input": 
        return (
          <Querybox
            key={field.name}
            name={field.name}
            type={field.inputType || "text"}
            placeholder={field.placeholder}
            className= "form-group"
            onChange={handleChange}
          />
        );
      case "button":
        return (
          <Button   
          
          key={field.name}
          name={field.name}
          type={field.buttonType || "submit"}
          text={field.text}
          className={field.className}
       />
           
          
        );
      case "link": 
        return (
          <Link
            key={field.name}
            name={field.name}
            href={field.href || "#"}
            className={field.className}
            text={field.text}
            
          />
         
        );
        case'hr':
        {
            return(
              <Hr 
              className={field.className}/>

            )
        }
      default: 
        return null;
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      {fields.map((field) => renderField(field))}
      {children}
    </form>
  );
}


export default Form;
