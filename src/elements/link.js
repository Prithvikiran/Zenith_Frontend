import './link.css'


function Link({ href, className, text }) {
    return (
      <a href={href} className={className}>
        {text}
      </a>
    );
  }
  
  export default Link;
  