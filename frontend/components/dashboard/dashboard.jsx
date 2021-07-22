import React from 'react';
import FriendsContainer from '../friendship/friendship_container';
import BillsContainer from '../bill/bill_form_container';
import SettleContainer from '../settle/settle_form_container';
// import Button from "@material-ui/core/Button";


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                    balance: 0,
                    owe: 0,
                    owed: 0
        }
        this.handleClick = this.handleClick.bind(this);

        this.netPayments = this.netPayments.bind(this);
    }
   
    componentDidMount() {
        this.props.fetchBills();
        this.props.getFriendships(this.props.currentUser);
    }
   
    componentDidUpdate(prevProps) {
        if (this.props.bills !== prevProps.bills) {
            this.netPayments();
        };
    }

    handleClick(e) {
        // debugger 
        e.preventDefault();
        return this.props.logout().then(() => this.props.router.push('/login'));
    }

    netPayments() {
        let totalOwe = 0;
        let totalOwed = 0; 
        let totalBalance = 0;
        // debugger 
        Object.keys(this.props.bills.owe).forEach(el =>{
            totalOwe += this.props.bills.owe[el];
        })
        Object.keys(this.props.bills.owed).forEach(el =>{
            totalOwed += this.props.bills.owed[el];
        })
        totalBalance = totalOwed - totalOwe;
        
        this.setState({owe: totalOwe});
        this.setState({owed: totalOwed});
        this.setState({balance: totalBalance});
    }


   
    render() {
        const {bills, currentUser} = this.props; 

        const listContent = this.props.friends.slice()
        .sort(function (a,b) {

            let nameA = a.username
            let nameB = b.username
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
    
            // names must be equal
            return 0;
          })
        .map((friend, idx) => {
            return <li key={idx}><div className="person-icon"></div>{friend.username}</li>;
          });

        const oweList = Object.keys(this.props.bills.owe).map((user, index) => {
            return (
                <li key={index}>
                    <div className="owe-name-block">
                        <p className="name">{user}</p>
                        <p className="negative-one">you owe <strong>${this.props.bills.owe[user]}</strong></p>
                    </div>
                </li>
            );
        });
        
        const owedList = Object.keys(this.props.bills.owed).map((user, i) => {
            return (
                <li key={i}>
                    <div className="owed-name-block">
                        <p className="name">{user}</p>
           
                        <p className="positive-one">you are owed <strong>${this.props.bills.owed[user]}</strong></p>
                    </div>
                </li>
            )
        })
        return(
            <div className="dashboard-whole">


                <div className="dashboard-left">
                    <div className="friend-box">
                        <h2 className="friend-bar">Friends</h2>
                        <ul>
                        {listContent}
                        </ul>
                    
                    </div>

                   
                    <button 
                        className="friend-button" 
                        onClick={() => {this.props.openModal({ modal: "addFriend" });}}
                    >
                        Add Friend
                    </button>
                
                    
                    
                </div>
                            
                <div className="dashboard-center">
                    <div className="dash-top">
                        <header >
                            <h1>Dashboard</h1>
                            <br/>
                            <ul className="dash-button-list">
                            
                                <li>
                                    <button onClick={() => {this.props.openModal({ modal: "addBill" });}}>
                                        Add Bill
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => {this.props.openModal({ modal: "settle" });}}>
                                        Settle Up
                                    </button>
                                </li>
                            </ul>
                            
                            
                            <br/>
                        </header>

                        <section className="dashboard-bottom">
                            <div className="dashboard-block">

                                <div>
                                    <div className="title">Total Balance</div>
                                    <br/>
                                    <p className={"amount " + (this.state.balance > 0 ? "positive" : "negative")}>${this.state.balance.toFixed(2)}</p>
                                </div>
                            </div> 
                            <div className="dashboard-block">
                                <div>
                                    <div className="title">You Owe</div>
                                    <br/>
                                    <p className="negative"> ${this.state.owe.toFixed(2)}  </p>
                                </div>
                            </div> 
                            <div className="dashboard-block">
                                <div>
                                    <div className="title">You Are Owed</div>
                                    <br/>
                                    <p className="positive"> ${this.state.owed.toFixed(2)}</p>
                                </div>
                            </div>
                            
                        </section>
                    </div>
                        <div>

                            <div className="owe-titles">
                                <div>YOU OWE</div>
                                <div>YOU ARE OWED</div>
                            </div>
                            <div className="owe-list">
                                <div className="you-owe-half">

                                    {!(this.state.owe) ? (

                                        <p>You do not owe anything</p>
                                        ) : (
                                        <ul>
                                            {oweList}

                                        </ul>
                                    )}

                                </div>

                                <div className="you-are-owed-half">

                                    {!(this.state.owed) ? (

                                    <div>You are not owed anything</div>
                                    ) : (
                                    <ul>
                                        {owedList}

                                    </ul>
                                    )}

                                </div>

                            </div>
                           
                        </div>
                    {/* <BillsContainer/> */}
                </div> 
             
            </div>
                
               
            
       
        )};
}

export default Dashboard;