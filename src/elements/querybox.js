import './querybox'
function querybox({type,className,placeholder,name}){
    return(
        <div className={className}>
          <input
            type={type}
            placeholder={placeholder}
            name={name}
          />
        </div>
       

    );
}
export default querybox;