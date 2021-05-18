import React from 'react';
import FriendsContainer from '../friends/friends_container';


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

    openFriendModal() {
        this.setState({friendModalOpen: true});
    }
    
    closeFriendModal() {
        this.setState({friendModalOpen: false});
    }


    render() {
        
        return(
            <div>
                <header>
                    <h1>Dashboard</h1>
                </header>
                <div className="dashboard-left">
                    {/* <FriendsContainer 
                        /> */}
                </div>
            </div>
        )};
}

export default Dashboard;