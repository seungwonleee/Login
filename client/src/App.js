import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth';


const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            {/* <Route exact path="/">
              <LandingPage />
            </Route> */}
            {/* 위의 코드와 동일 */}
            <Route exact path="/" component={Auth(LandingPage, null, true)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route exact path="/register" component={Auth(RegisterPage, false)} />
          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default App;

