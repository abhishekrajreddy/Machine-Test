import './App.css';
import Navbar from './Components/Scripts/Navbar';
import Home from './Components/Scripts/Home';
import Task from './Components/Scripts/Task';
import {BrowserRouter as Router,Route, Switch, withRouter} from 'react-router-dom';
import Login from './Components/Scripts/Login';
import User from './Components/Scripts/User';
import {Provider} from 'react-redux'
import store from './store';
import PrivateRoute from "./Components/Reuseable/PrivateRoute";
import PublicRoute from "./Components/Reuseable/PublicRoute";
import {onLoginSuccess} from './Components/Redux/Action'

function App() {
  const data = JSON.parse(localStorage.getItem('user'));
  if(data){
    store.dispatch(onLoginSuccess(data))
  }

  const Main=withRouter(({location})=>{
    return(
      <div>
      { location.pathname !== '/login' && <Navbar/>}
      <Switch>
      <PublicRoute exact path='/login' component={Login} />
      <PrivateRoute exact path='/user' component={User} />
      <PrivateRoute exact path='/' component={Home} />
      <PrivateRoute exact path='/task' component={Task} />
      </Switch>
      </div>
    )
  })


  return (
    <Provider store={store}>
      <Router>
        <Main/>
      </Router>
    </Provider>
  );
}

export default App;
