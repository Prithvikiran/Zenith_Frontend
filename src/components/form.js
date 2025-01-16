

import './form.css'
function Form({className,children}) {

    return (
    

        <form className={className}> 
          {children}
       </form>
   
      
    );
  }
  

export default Form;

