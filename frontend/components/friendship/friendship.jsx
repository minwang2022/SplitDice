
import React from 'react';


class Friends extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = {
      username: "",
      searchList: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.chooseUser = this.chooseUser.bind(this);
    this.clearState = this.clearState.bind(this);

  }

  componentDidMount() {
    this.props.getFriendships(this.props.currentUserId);
  };
 
  update(field) {
    return (
      event => {
          this.setState({ [field]: event.target.value });
          this.props.searchUsers(event.currentTarget.value).then(users => 
            this.setState({
              searchList:  Object.values(users.users)
              
              // console.log(this.state.searchList)
            })
            
        );

      }
    );
  }


  clearState() {
    this.setState({username: ""});
  }

  chooseUser(e) {
    e.preventDefault();
    const username = e.currentTarget.textContent.replace(/\s/g, '');
    this.setState({username: username });
    this.props.clearSearch();

  }
  // Adding a friend submit
  handleSubmit(e) {
    e.preventDefault();
    const user = {username: this.state.username};
    this.props.processFriendForm(user);
    this.clearState();
    this.props.closeModal();
    //   .then(

    //  ()=> this.clearState()
    // )
  }


  render() {

    
    let searchData;
    
      if(!this.state.searchList){
        searchData = null;
      } else { 
        searchData = this.state.searchList.map((el, idx) => {
            return (<li key={idx} onClick={this.chooseUser}> {el.username} </li>);
          })
      }
    
    const listContent = this.props.friends.map((friend, idx) => {
      return <li key={idx}><div className="person-icon"></div>{friend.username}</li>;
    });
    
    let addFriendForm = (
      <div className="add-bill-modal">
          
          <form className="add-bill-block" onSubmit={this.handleSubmit} >
            {/* <h2>Add a Friend!</h2> */}
              <div className="add-form">
                <br/>
                <label className= "modal-bill">Username:</label>
                <br/>
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className= "input-box"
                  />
                <br/>
                <ul className="add-friend-search">
                  {searchData}
                </ul>
                <div className="add-friend-button-group">
                  <div className="add-friend-button">
                    <input className="signup-button" type="submit" value="Add Friend"></input>
                  </div>
                </div>
              </div>
            
          </form>
      </div>
    )
//// saperate the from and list content later for modal.////
    return (
      <div className="friend-box">
        {/* <h1>Friends<strong>+Add</strong> </h1> */}
        {/* <ul>
          {listContent}
        </ul> */}
        {addFriendForm}
      </div>
    );
  }
}

export default Friends;
