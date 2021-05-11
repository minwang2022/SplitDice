import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Homepage from './home/home2';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';


const App = () => (
  <div>
    <header>
      <Link to="/">
        <h1>Split Dice</h1>
      </Link>
    </header>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/login" component={LogInFormContainer} />
      <Route exact path="/signUp" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;