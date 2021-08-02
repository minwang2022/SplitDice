import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Homepage from './home/home2';
import SignupFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';
import Footer from './footer/footer';

const App = () => (

  <div>
    <Modal/>
    <header className= "Project-Header">
      <Link to="/" className="header-top"><h1 >Splitdice</h1></Link>
      <GreetingContainer />
    </header>
    
    <Switch>
    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer}/>
    <ProtectedRoute exact path="/dashboard" component={DashboardContainer}/>
    <AuthRoute exact path="/" component={Homepage} />
    </Switch>

    <Footer/>
    
  </div>
  );

export default App;