import React from 'react';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
       
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        // debugger 
        e.preventDefault();
        return this.props.logout().then(() => this.props.router.push('/login'));
    }


    render() {
        
        return(
            <div>
                <header>
                    <h1>Dashboard</h1>
                </header>
                <p>this is working</p>
            </div>
        )};
}

export default Dashboard;