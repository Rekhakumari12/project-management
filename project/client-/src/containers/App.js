import './App.css';
import Login from '../components/Login'
import Registration from '../components/Registration'
import {Redirect, Route,Switch} from 'react-router-dom'
import Admin from '../components/Admin';
function App() {
  return (
    <Switch>
      <Route exact path='/register' component={Registration} />
      <Route exact path='/login' component={Login} />
      <Route exact path="/admin" component={Admin}/>
      <Redirect from='/' to ='/register' />
    </Switch>
  );
}

export default App;
