import {useUser} from '../../Providers/User';
 

const FormLogin = () =>{

  const {users} = useUser()
  console.log('login', users)
  
  return(
    <h3>login</h3>

  );
};

export default FormLogin;