import React from 'react';
import FriendsContainer from '../friendship/friendship_container';
import BillsContainer from '../bill/bill_form_container';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
       
        this.handleClick = this.handleClick.bind(this);
    }

    // componentWillMount() {
    //     this.props.fetchBills();
    // };
    
    handleClick(e) {
        // debugger 
        e.preventDefault();
        return this.props.logout().then(() => this.props.router.push('/login'));
    }


    render() {
        
        return(
            <div>
                <header >
                    <h1>Dashboard</h1>
                    <br/>
                    <div></div>
                </header>
                <div className="dashboard-left">
                <FriendsContainer/>
                </div>
                <BillsContainer/>
            </div>
        )};
}

export default Dashboard;