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

    ///////// form inserts /////////
        const InsertForm = () => {
            if (this.state.username !== "") {
                return (
                    <div>
                        <label className= "input-text">Here's my &nbsp;<strong> email address</strong> : </label>
                        <br/>
                            <input 
                                type="email"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className= "input-boxx"
                            />
                        <br/>
                        <label className= "input-text">And here's my &nbsp;<strong> password</strong>:</label>
                        <br/>
                            <input 
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className= "input-boxx"
                            />

                    </div>
                )    
            }
            return null;
        }

        /////////////// RENDER ELEMENTS ////////////////
        if (this.props.formType === "login") {    
            return (
                <div className="form-container">
                    <form className="content-block" onSubmit={this.handleSubmit}>
                        Log in
                        <br/>
                        
                        {this.loginErrors()}
                        <br/>
                        <label > Username: </label>
                        <br/>
                            <input 
                                type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className= "input-box"
                            />
                       
                        <br/>
                        <label>Password: </label>
                        <br/>
                            <input 
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className= "input-box"
                        />
                       
                        <br/>
                        <input className="login-button" type="submit" value={this.props.formType} />
                    </form>
                    <img className="img-background" src={window.background} alt="background" />

                </div>
        )} else {
            return (
                <div className="form-container">
                    <form className="content-block" onSubmit={this.handleSubmit}>
                        <h2 className= "input-text">INTRODUCE YOURSELF</h2>
                        <br/>
                        {this.loginErrors()}
                        <br/>
                        <div className= "input-text">
                            Hi threre! My name is
                        </div>
                        <br/>
                        <input 
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className= "input-boxx"
                        />
                        {InsertForm()}
                        <br/>
                        <div>
                            <button className= "signup-button">Sign me up!</button>
                        </div>
                    </form>

                </div>    
                
            
            )
        }
    } 
}

export default SessionForm