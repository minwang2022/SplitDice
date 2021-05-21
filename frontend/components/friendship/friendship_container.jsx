import React from 'react';
import Friends from './friendship';
import { getFriendships, addFriendship,  } from '../../actions/friendship_actions';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = (state)=> {
  // debugger 
  return {
    friends: Object.values(state.entities.friendships),
    currentUserId: state.session.id,
    formType: 'addFriend'
    // search: Object.value(state.friends.userResult),
    // errors: state.friends.errors
  };
};

const mDTP = dispatch => {
  // debugger 
  return {
    processFriendForm: (userId, friendId) => dispatch(addFriendship(userId, friendId)),
    getFriendships: (userId) => dispatch(getFriendships(userId)),
    // searchFriends: (query) => dispatch(searchFriends(query)),
    // clearSearch: () => dispatch(clearSearch()),
    // searchUsers: (query) => dispatch(searchUsers(query))
    // openModal: modal => dispatch(openModal(modal)),
    // openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mSTP, mDTP)(Friends);
