import React from 'react';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
       
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        e.preventDefault();
        return this.props.logout().then(() => this.props.router.push('/login'));
    }


    render() {
        
        return(
            <div>
                <header>
                    <h1>Split Dice</h1>
                    <ul>
                        <li onClick={this.handleClick}> Log Out</li>
                        <li>{this.props.currentUser.username}</li>
                    </ul>
                </header>
                <h1>Dashboard</h1>
                <p>this is working</p>
            </div>
        )};
}

export default Dashboard;