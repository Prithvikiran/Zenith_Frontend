import './button.css'

function press ({type,text,className,onClick}){
    return(

        <button type={type} className={className} onClick={onClick}>
        {text}

      </button>
    );

}
export default press;
