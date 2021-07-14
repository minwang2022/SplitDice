import React from 'react';

class BillForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            amount: '',
            category: '',
            bill_date: '',
            recipients: '',
            description: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.chooseUser = this.chooseUser.bind(this);
        this.clearState = this.clearState.bind(this);
    };
   
    // componentDidMount() {
    //     this.props.fetchBills();
    // };
   
    update(field) {
        // debugger 
      return (
        event => {
            this.setState({ [field]: event.target.value });
            
        }
      );
    }

    // updateAndQuery(field) {
    //     return (
    //       event => {
    //         this.setState({ [field]: event.target.value });
    //         this.props.searchFriends(event.target.value).then(users => { console.log("success");});
    //       }
    //     );
    
    // }

    clearState() {
        this.setState({
            amount: '',
            category: '',
            bill_date: '',
            recipients: '',
            description: '',
        });
    }
    
    // chooseUser(e) {

    //     const newRecipients = this.state.recipients.slice();
    //     e.preventDefault();
    //     const username = e.currentTarget.textContent.replace(/\s/g, '');
    //     newRecipients.push(username);
    //     this.setState({recipients: newRecipients });
    //     this.setState({username:""});
    
    //     this.props.clearSearch();
    
    // }

    // removeRecipient(e) {
    //     e.preventDefault();
    
    //     const recipients = this.state.recipients.slice();
    
    //     const user = e.currentTarget.textContent.replace(/\s/g, '');
    
    //     const index = recipients.indexOf(user);
    
    //     recipients.splice(index, 1);
    
    //     this.setState({recipients: recipients});
    
    // }
    // Adding a bill
    handleSubmit(e) {
      e.preventDefault();
    //   debugger 
    //   let recipientIds = convertNamesToIds(this.state.recipients)
        let array = this.state.recipients.split(",");
        let friends = this.props.friends;
        let recipientIdsArray = [];
        // debugger 
        let i = 0;
        while (i < array.length) {
            // debugger 
            let recipient = array[i];
            let j = 0;
            while(j < friends.length) {
                // debugger 
                let friend = friends[j];
                if (friend.username === recipient) {
                    // debugger
                    recipientIdsArray.push(friend.friendId);
                    break;
                }
                j++
            }
            i++
        }
        let recipientIds = recipientIdsArray;
  
        let bill = {
            amount: this.state.amount,
            category: this.state.category,
            bill_date: this.state.bill_date,
            recipients: recipientIds,
            description: this.state.description
        };
        this.props.processBillForm(bill);
        this.clearState(); 
        this.props.closeModal();
    };

    
    render(){
        
        // const searchList = this.props.friends.map((el, idx) => {
        //     if (!this.state.recipients.includes(el.username)) {
        //         return <li key={idx} onClick={this.chooseUser}> {el.username} </li>;
        //       }
        //     });
      
        // const selectedUsers = this.state.recipients.map((el, idx) => {
        //     return <li key={idx} className="selected" onClick={this.removeRecipient}>{el}<div id="close">x</div></li>;
        // });


        const InsertTags = () => {
            if (this.state.recipients !== '') {
                return (
                    <div className="insert-block">
                        <br/>
                        <input 
                            type="text"
                            placeholder="Enter a description"
                            onChange={this.update('description')}
                            className= "modal-input"
                        />
                        <br/>
                        <input 
                            type="number"
                            placeholder="$ 0.00"
                            onChange={this.update('amount')}
                            className= "modal-input"
                        />
                        <br/>
                        <input 
                            type="date"
                            onChange={this.update('bill_date')}
                            className= "modal-input"
                        />
                        <br/>

                        <label form="Category" >Category:</label>

                        <select name="Category" id="Category">
                        <option value="Uncategorized">Uncategorized</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Food">Food and drink</option>
                        <option value="Home">Home</option>
                        <option value="Life">Life</option>
                        <option value="Transportation">Mercedes</option>
                        </select>
                    </div>
                )    
            }
            return null;
        }
        return (
            
            <div className="add-bill-modal" >
                
                <form className="add-bill-block" onSubmit={this.handleSubmit}  >
                  <h2>Add an expense</h2>
                    {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}
                        <div className="add-form">
                        <br/>
                        {/* <ul className="bill-user-input"> */}
                        <label className= "modal-bill">With you and:
                            <input 
                                type="text"
                                placeholder="Enter names separate by colon"
                                onChange={this.update('recipients')}
                                className= "box"
                            />
                        </label>
                                {/* <input 
                                    type="text"
                                    placeholder="Enter names separate by colon"
                                    onChange={this.update('recipients')}
                                    className= "box"
                                /> */}
                        {/* </ul>
                        <div className="bill-friend-search">
                            <ul>
                                {searchList}
                            </ul>
                        </div> */}
                            
                        <br/>
                        {InsertTags()}
                        <br/>

                       
                        <input className="signup-button" type="submit" value="Create Bill"/>
                    </div>
                  
                </form>
            </div>
        )
    }
}




export default BillForm;
