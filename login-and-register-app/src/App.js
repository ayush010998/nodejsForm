import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {useHistory} from "react-router-dom";
import { useState } from 'react';

function App() {

  const [user,setLoginUser]=useState({
    name:'',
    email:'',
    password:''

  })
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            {user && user._id
             ?
             <Homepage/>
             :
             <Login/>
             }
             <Homepage/>
          </Route>
          <Route path='/login'><Login/></Route>
          <Route path='/register'><Register/></Route>
        </Switch>
      </Router>
      
      
      
    </div>
  );
}

export default App;
