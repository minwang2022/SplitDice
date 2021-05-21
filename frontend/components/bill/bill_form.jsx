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
    };
   
    // componentDidMount() {
    //     this.props.
    // };
   
    update(field) {
        debugger 
      return (
        event => {
          this.setState({ [field]: event.target.value });
        }
      );
    }
  
    clearState() {
        this.setState({
            amount: '',
            category: '',
            bill_date: '',
            recipients: '',
            description: '',
            
        });
    }
    
    // convertNamesToIds(recipients) {
       
    //     let array = recipients.split(",");
    //     let friends = this.props.friends;
    //     let recipientIdsArray = [];
    //     debugger 
    //     let i = 0;
    //     while (i < array.length) {
    //         debugger 
    //         let recipient = array[i];
    //         let j = 0;
    //         while(j < friends.length) {
    //             debugger 
    //             let friend = friends[j];
    //             if (friend.username = recipient) {
    //                 recipientIds.push(friend.id);
    //             }
    //             j++
    //         }
    //         i++
    //     }
    //     return recipientIdsArray;
    // };
    // Adding a bill
    handleSubmit(e) {
      e.preventDefault();
    //   debugger 
    //   let recipientIds = convertNamesToIds(this.state.recipients)
        let array = this.state.recipients.split(",");
        let friends = this.props.friends;
        let recipientIdsArray = [];
        debugger 
        let i = 0;
        while (i < array.length) {
            debugger 
            let recipient = array[i];
            let j = 0;
            while(j < friends.length) {
                debugger 
                let friend = friends[j];
                if (friend.username === recipient) {
                    recipientIdsArray.push(friend.id);
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
        this.props.processBillForm(bill).then(() => 
            this.clearState() 
        )
       
    };

    

  

    render(){
        const InsertTags = () => {
            if (this.state.recipients !== "") {
                return (
                    <div>
                        <br/>
                        <input 
                            type="text"
                            placeholder="Enter a description"
                            onChange={this.update('description')}
                            className= "input-box"
                        />
                        <br/>
                        <input 
                            type="number"
                            placeholder="$ 0.00"
                            onChange={this.update('amount')}
                            className= "input-box"
                        />
                        <br/>
                        <input 
                            type="date"
                            onChange={this.update('bill_date')}
                            className= "input-box"
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
            
            <div className="form-container" >
                
                <form className="content-block" onSubmit={this.handleSubmit}  >
                  Add an expense
                    {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}
                        <div className="add-form">
                        <br/>
                        <label className= "input-text">With you and:
                            <input 
                                type="text"
                                placeholder="  Enter names"
                                onChange={this.update('recipients')}
                                className= "box"
                            />
                            </label>
                        <br/>
                        {InsertTags()}
                        <br/>

                        <button className="signup-button" onClick={this.props.closeModal}>Cancel</button>
                        &nbsp;&nbsp;
                        <input className="signup-button" type="submit" value="save" onClick={this.handleSubmit}/>
                    </div>
                  
                </form>
            </div>
        )
    }
}




export default BillForm;
