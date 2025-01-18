
import { useState } from 'react';
import './form.css'
import Querybox from 'elements/querybox';
import Link from 'elements/link';
import Button from 'elements/button';
import Hr from 'elements/hr';

function Form({ className, children, fields }) {

  
  const initialFormValues = fields.reduce((acc, field) => {
   
    if (field.name) {
      acc[field.name] = ""; 
    }
    return acc;
  }, {});

  const [formValues, setFormValues] = useState(initialFormValues);

  
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    };
  
   
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Values:", formValues); 
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
