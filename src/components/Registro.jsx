import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';
import Header from './Header';
import {useState} from "react";


const Registro = () => {

const [alert, setAlert] = useState ({
  error:"", msg:"", color:""
});

  return (
    <>
      <Header title="Crea una cuenta" /> 

      <SocialButton 
        facebook="fa-brands fa-facebook"
        github="fa-brands fa-github"
        linkedin="fa-brands fa-linkedin" />
        <p>O usa tu email para registrarte</p>

      <Formulario setAlert={setAlert}/>
      {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
    </>
  );
};

export default Registro;

