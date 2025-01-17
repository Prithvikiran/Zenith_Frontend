import './querybox.css'
function querybox({type,className,placeholder,name,onChange}){
    return(
        <div className={className}>
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
          />
        </div>
       

    );
}
export default querybox;