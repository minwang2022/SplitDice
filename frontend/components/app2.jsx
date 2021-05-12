import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Homepage from './home/home2';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  
  <div>
    <header>
      <Link to="/">
        <h1>Split Dice</h1>
      </Link>
    </header>

    <Route exact path="/" component={Homepage} />
    <AuthRoute path="/login" component={LogInFormContainer}  />
    <AuthRoute path="/signUp" component={SignUpFormContainer}/>
    <ProtectedRoute path="/dashboard" component={DashboardContainer}/>
    
  </div>
  );

export default App;