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
        store.dispatch(signUp(user)).then(() => this.props.router.push('/dashboard'));
    }
    

    render() {
        return (
            <div className="homepage-container">
                <section className="main-content group">
                <div className="headline">
                    <div className="top-line-headline">
                    <div className="money-icon"></div>
                    <h1>Less stress when sharing expenses <strong>on trips</strong></h1>
                    <br/>
                    <Link to="signup" className="signup-button">Sign up</Link>
                    <p><strong>Totally free</strong> for web, iPhone, and Android.</p>
                    </div>
                </div>
                </section>
                <div className="img-background"></div>
                <div className="image-form group">
                    <div className="splitwise-img"></div>
                </div>
            </div>
        )
    }
}

export default Homepage;