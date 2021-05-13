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

   componentWillUnmount() {
       this.props.removeErrors();
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
                        Welcome to SplitDice
                        <br/>
                        Please {this.props.formType} or {this.props.navLink}
                        {this.loginErrors()}
                        <br/>
                        <label>Username:
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                        </label>
                        <br/>
                        {(this.props.formType === "signup") ?
                            
                            <label>Email:
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                />
                            </label> : <></>
                        }

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