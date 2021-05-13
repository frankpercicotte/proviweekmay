import {Switch, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import {useUser} from '../Providers/User';


const Routes = () => {
  const {user} = useUser();
  return(
    <Switch>
      <Route path="/home">
        {user && <Home />}
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route exact path="/">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;