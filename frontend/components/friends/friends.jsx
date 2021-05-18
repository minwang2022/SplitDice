
import React from 'react';


class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      email:""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.chooseUser = this.chooseUser.bind(this);
  }

  update(field) {
    return (
      event => {
        this.setState({ [field]: event.target.value });
        this.props.searchUsers(event.target.value).then(users => { console.log("success");});
      }
    );

  }

  clearState() {
    this.setState({username:"", email:""});
  }


  // Adding a friend submit
  handleSubmit(e) {
    e.preventDefault();
    const user = {username: this.state.username, email: this.state.email};
    this.props.processFriendForm(user).then(
      err => {
 
        this.clearState();
      }
    );
  }

  chooseUser(e) {
    e.preventDefault();
    const username = e.currentTarget.value;
    this.setState({username: username });
    this.props.clearSearch();

  }


  render() {

    const searchList = this.props.search.map((el, idx) => {
          return <li key={idx} onClick={this.chooseUser}> {el.username} </li>;
        });

    const listContent = this.props.friends.map((user, idx) => {
      return <li key={idx}><div className="person-icon"></div>{user.username}</li>;
    });

    return (
      <div>
            <h1>Friends</h1>

  
          <ul>
            {listContent}
          </ul>

      </div>
    );
  }
}

export default Friends;
