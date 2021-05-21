
import React from 'react';


class Friends extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = {
      username: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getFriendships(this.props.currentUserId);
   }
 
  update(field) {
    return (
      event => {
        this.setState({ [field]: event.target.value });
      }
    );
  }

  clearState() {
    this.setState({username: ""});
  }


  // Adding a friend submit
  handleSubmit(e) {
    e.preventDefault();
    const user = {username: this.state.username};
    this.props.processFriendForm()
    // this.clearState();
  }


  render() {

    const listContent = this.props.friends.map((friend, idx) => {
      return <li key={idx}><div className="person-icon"></div>{friend.username}</li>;
    });
    
    let addFriendForm = (
      <div className="modal-child">
          
          <form onSubmit={this.handleSubmit} className="modal-form">
            Add a Friend!
            <div onClick={this.props.closeModal} className="close-x">X</div>
              <div className="add-form">
                <br/>
                <label className= "input-text">Username:</label>
                <br/>
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className= "input-box"
                  />
                <br/>
                <div className="add-friend-button-group">
                  <div className="add-friend-button">
                    <input className="signup-button" type="submit" value="Add Friend" onClick={this.props.closeModal}></input>
                  </div>
                </div>
              </div>
            
          </form>
      </div>
    )
//// saperate the from and list content later for modal.////
    return (
      <div>
        <h1>Friends<strong>+Add</strong> </h1>
        <ul>
          {listContent}
        </ul>
        {addFriendForm}
      </div>
    );
  }
}

export default Friends;
