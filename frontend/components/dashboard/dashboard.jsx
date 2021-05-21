import React from 'react';
import FriendsContainer from '../friendship/friendship_container';
import BillsContainer from '../bill/bill_form_container';


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
        // this.delayed = this.delayed.bind(this);
    }
   
    // componentDidMount() {
    //     this.props.fetchBills();
    // }

    handleClick(e) {
        // debugger 
        e.preventDefault();
        return this.props.logout().then(() => this.props.router.push('/login'));
    }

    netPayments() {
        let totalOwe = 0;
        let totalOwed = 0; 
        let totalBalance = 0;
        debugger 
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

    // delayed(){
    //     setTimeout(this.netPayments(),1000)
    // }
    
   
    render() {
        
        // const oweList = setTimeout(Object.keys(this.props.bills.owe).map((user, index) => {
        //     debugger
        //     return (
        //         <li key={index}>
        //             <p>{user}</p>
        //             <p>you owe <strong>{this.props.bills.owe[user]}</strong></p>
        //         </li>
        //     )
        // }), 1000)
        // const owedList = Object.keys(this.props.bills.owed).map((user, i) => {
        //     return (
        //         <li key={i}>
        //             <div>
        //                 <p>{user}</p>
        //                 <br/>
        //                 <p>you owed <strong>{this.props.bills.owed[user]}</strong></p>
        //             </div>
        //         </li>
        //     )
        // })
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
                 
                <section >
                    <h2>Total Balance</h2>
                    {/* {setTimeout(this.netPayments(),1000)} */}
                    <div>${this.state.balance.toFixed(2)}</div>
                    <div>
                        <h2>You Owe</h2>
                        <div>${this.state.owe.toFixed(2)}</div>
                    </div> 
                    <h2>You Are Owed</h2>
                    <div>${this.state.owed.toFixed(2)}</div>
                </section>
                <ul>
                    {/* {oweList} */}
                </ul>
                
            </div>
        )};
}

export default Dashboard;