import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session_form/signup_form_container.jsx';
import { login } from '../../actions/session_actions.js';

class Homepage extends React.Component {
    constructor(props) {
        super(props)
        
        this.handleDemoLogin = this.handleDemoLogin.bind(this);

    }

    handleDemoLogin(e){
        e.preventDefault(); 
        let user = {username: "guest", password: "password"}
        store.dispatch(login(user));
    };

    render() {
        // debugger
        return (
            <div className="homepage-container">
                <section className="main-content group">
                <div className="headline">
                    <div className="top-line-headline">

                        <div className="headline">
                            <h1>Less stress when sharing <br></br>expenses <strong>on trips</strong></h1>
                        </div>
                        <br></br>
                        <Link to="signup" className="signup-button">Sign up</Link>
                            &nbsp;&nbsp;
                        <button onClick={this.handleDemoLogin} className="signup-button">Demo</button>
                        <p><strong>Totally free</strong> for web, iPhone, and Android.</p>
                    </div>
                </div>
                </section>
                
                <img className="img-background" src={window.background} alt="background" />
              
            </div>
        )
    }
}

export default Homepage;