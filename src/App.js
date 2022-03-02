import React,{useEffect} from 'react';
import { HashRouter,Redirect, Switch, Route } from 'react-router-dom';
import './App.scss';

import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';

import { useDispatch,useSelector } from 'react-redux';
import { setUser } from './redux/actions/userActions';
import { setMXN } from './redux/actions/mxnActions';

import requestMXN from './utils/request/requestMXN';

function App() {
  const dispatch = useDispatch(); 
  const store = useSelector(state => state);  

  const verifyUser = () => {
    if (localStorage.getItem("userData") !== null) {
      dispatch(setUser(JSON.parse(localStorage.getItem("userData"))));      
    }    
  }
  
  const getMXN = async () => {
    const response = await requestMXN();
    dispatch(setMXN(response));
  }

 useEffect(() =>{   
  verifyUser();
  getMXN();
  // eslint-disable-next-line react-hooks/exhaustive-deps  
},[])

  return (
    <React.Fragment>
      <HashRouter>
        <div className="container">
          <Header />

          <div className="main">
            <Switch>
                <Route exact path="/" name="Dashboard" render={props => (
                  (store.session.user)? <Dashboard /> : <Redirect to="/welcome" />                      
                )}/>      
                <Route exact path="/welcome" name="Welcome" render={() => (
                 (store.session.user)? <Redirect to="/" /> :<Welcome />    
                )}/>
            </Switch>
          </div>
        </div>  
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
