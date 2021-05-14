import {useUser} from '../../Providers/User';

const Main = () =>{
  const {user} = useUser();
  return(
    <div>
      <h1>bem vindo</h1>
      <p>{user.name}</p>      
    </div>
  )
}

export default Main;