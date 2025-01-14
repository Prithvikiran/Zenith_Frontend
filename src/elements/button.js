import './button.css'

function press ({type,text,className}){
    return(

        <button type={type} className={className}>
        {text}
      </button>
    );

}
export default press;
