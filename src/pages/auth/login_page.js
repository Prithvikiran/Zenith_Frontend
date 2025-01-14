
import 'elements/button'
import Login_form from 'components/loginform';


function Log()
{
    return(
        
    <div className="login-page">
    <div className="brand-section">
    <img src='logo.png' alt="Zenith Logo" className="brand-logo" />
    <h1 className="brand-name">Zenith</h1>
    <p>Zenith helps you connect and share with the people in your life.</p>
    <Login_form></Login_form>
     
    </div>
    </div>
    );
}

export default Log ;