import './button.css'

function press ({type,text,className,onclick}){
    return(

        <button type={type} className={className} onClick={onclick}>
        {text}

      </button>
    );

}
export default press;
