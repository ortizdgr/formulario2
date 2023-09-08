
const Alert = ({children, color}) => {
    return (
      
      <div className={`alert alert.${color} my-2`} role="alert">
        {children}
      </div>
      
    );
  }
  
  export default Alert;