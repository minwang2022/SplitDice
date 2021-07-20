import React from 'react';

class SettleForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      settleFrom:"",
      settleTo:"",
      amount: "",
      whichSearch:""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.chooseSettleFrom = this.chooseSettleFrom.bind(this);
    this.chooseSettleTo = this.chooseSettleTo.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  update(field) {
    return (
      event => {
        this.setState( {[field]: event.target.value });
        this.setState({whichSearch:""});
      }
    );
  }

  clearState() {
    this.setState({
        settleFrom:"", 
        settleTo: "", 
        amount:"", 
        whichSearch:""
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let settleUpData = {
      settleFrom: this.findId(this.state.settleFrom), 
      settleTo: this.findId(this.state.settleTo), 
      amount: this.state.amount
    };

    debugger 

    this.props.settleBill(settleUpData);
      
      
    // Put like a friend added box or something?
    this.props.clearSearch();
    this.clearState();
    this.props.closeModal();
    
    
    debugger 
  }

  // Settle from Click

  handleClick(arg) {
    event.preventDefault();
    debugger
    if (arg === "settleFrom") {
      debugger
      this.setState({whichSearch: "settleFrom"});

    } else if(arg === "settleTo") {
      debugger
      this.setState({whichSearch:"settleTo"});
    } else {
      debugger
      this.setState({whichSearch: ""});
    }

  }

  // return the id of the user
  findId(username) {
    debugger
    if(username ==="You") {
      return this.props.currentUserId
    } else {
      const friends = this.props.friends;
      debugger
      for(let user_key in friends) {
        debugger
        let user = friends[user_key];
        if(user.username === username) {
          debugger
          return user.friendId;
        }
      }
    }
  }


  chooseSettleFrom(e) {
    const currentUserName = this.props.currentUser[this.props.currentUserId].username;

    e.preventDefault();
    const username = e.currentTarget.textContent.replace(/\s/g, '');
    // debugger
    if(username === currentUserName) {
      this.setState({settleFrom: 'You'});
    } else {

      this.setState({settleFrom: username});
    }

    this.setState({whichSearch:""});

  }

  chooseSettleTo(e) {
    debugger 
    const currentUserName = this.props.currentUser[this.props.currentUserId].username;

    e.preventDefault();
    const username = e.currentTarget.textContent.replace(/\s/g, '');

    if(username === currentUserName) {
      this.setState({settleTo: 'You'});
    } else {

      this.setState({settleTo: username});
    }
    debugger
    this.setState({whichSearch:""});

  }

  render() {
    const {currentUserId, friends} = this.props;
    // console.log(`currentUserId is ${currentUserId}`);
    // console.log(this.props.currentUser[currentUserId]);
    // console.log(this.props.currentUser[currentUserId].username);
    const currentUserName = this.props.currentUser[currentUserId].username;
    const settleFromList = friends.map((user, idx) => {
      debugger 
      return <li key={idx} onClick={this.chooseSettleFrom}>{user.username}</li>;
    });

    settleFromList.unshift(
      <li key={Object.keys(friends).length} onClick={this.chooseSettleFrom}>{currentUserName}</li>
    )

    const settleToList = friends.map((user, idx) => {
      debugger
      return <li key={idx} onClick={this.chooseSettleTo}>{user.username}</li>;
    });

    settleToList.unshift(
      <li key={Object.keys(friends).length} onClick={this.chooseSettleTo}>{currentUserName}</li>
    )

    let formContent;
    formContent = (
      <div className="add-bill-modal">
              <form className="add-bill-block" onSubmit={this.handleSubmit}>

                <div className="add-form">

                  <div className= "modal-bill">
                    <input
                      type="text"
                      defaultValue={this.state.settleFrom}
                      placeholder="Enter Payer"
                      onClick ={() => this.handleClick("settleFrom")}
                      className= "input-box"

                    />

                    <div>Paid</div>


                    <input
                      type="text"
                      defaultValue={this.state.settleTo}
                      placeholder="Enter Recipient"
                      onClick = {() => this.handleClick("settleTo")}
                      className= "input-box"

                    />
                </div>

                  <input
                    type="number"
                    value={this.state.amount}
                    placeholder="$0.00"
                    onChange = {this.update('amount')}
                    className= "input-box"

                  />
                </div>

              <br/>
                  <div className="add-friend-button">
                    <input className="signup-button" type="submit" value="Save"></input>
                  </div>
              </form>
          <br/>


          {this.state.whichSearch === 'settleFrom' ? (
            <div className="side-modal">
              <h1>Choose a Payer</h1>
              <ul className="settle-user-list">
                {settleFromList}
              </ul>
            </div>

          ) : (
            <div></div>
          )}

          {this.state.whichSearch === 'settleTo' ? (
            <div className="side-modal">
              <h1>Choose a Recipient</h1>
              <ul className="settle-user-list">
                {settleToList}
              </ul>
            </div>
          ) : (
            <div></div>
          )}





      </div>
    );

    return (
      <div>
        {formContent}
      </div>
    );
  }


}

export default SettleForm;
