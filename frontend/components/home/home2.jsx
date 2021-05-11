import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session_form/signup_form_container.jsx';
import { signUp } from '../../actions/session_actions.js';

class Homepage extends React.Component {
    constructor(props) {
        super(props)
        
        this.handleGuestLogin = this.handleGuestLogin.bind(this);
    }
 
    handleGuestLogin(e) {
        e.preventDefault();
        const user = {username:"Guest", email: "guest@guest.com", password: "password"};
        // store.dispatch(signUp(user)).then(() => this.props.router.push('/dashboard'));
        signUp(user).then(() => this.props.router.push('/dashboard'));
    }

    render() {
        return (
            <div>
                <h1>Welcome to the SplitDice</h1>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signUp">Signup</Link></li>
                    <li onClick={this.handleGuestLogin}>DEMO</li>
                </ul>
                <h3>a simple app to keep track of your shared expense and balance with housemate, trips, groups, friends, and family. Our algorithm provides best solution to split the expenses fairly by the least transactions.</h3>
                <div>
                    <SessionFormContainer {...this.props}/>
                </div>
                

            </div>
        )
    }
}

export default Homepage;