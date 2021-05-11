import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            email: "",
            password:""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginErrors = this.loginErrors.bind(this);
   }

   update(field){
       return e => this.setState({ [field]: e.target.value})
   };

   handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
    };

    loginErrors() {
        return(
            <ul>
                {
                  this.props.errors.map((el, idx) => (
                    <li key={`${idx}`}>{el}</li>
                 ))
                }

            </ul>
        )
    };

   render() {
       return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Welcome to SplitDice, Ready for initial Heroku push
                    <br/>
                    Please {this.props.formType} or {this.props.navLink}
                    {this.loginErrors()}
                    <label>Username:
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </label>
                    <br/>
                        <label>Password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <br/>
                    <input type="submit" value={this.props.formType} />
                </form>
            </div>

        )
    }
}

export default SessionForm