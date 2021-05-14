import {Switch, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';


const Routes = () => {  
  return(
    <Switch>
      <Route path="/home">
        <Home />
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