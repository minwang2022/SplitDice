import React from 'react';
import Friends from './friendship';
import { getFriends, addFriend, searchFriends, searchUsers, clearSearch } from '../../actions/friendship_actions';
import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';

const mSTP = (state)=> {
  // debugger 
  return {
    friends: Object.values(state.entities.friends)
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
    }),
    
    currentUserId: state.session.id,
    formType: 'addFriend'
  };
};

const mDTP = dispatch => {
  // debugger 
  return {
    processFriendForm: (user) => dispatch(addFriend(user)),
    getFriendships: (userId) => dispatch(getFriends(userId)),
    // searchFriends: (query) => dispatch(searchFriends(query)),
    clearSearch: () => dispatch(clearSearch()),
    searchUsers: (query) => dispatch(searchUsers(query)),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal))
   
  };
};

export default connect(mSTP, mDTP)(Friends);
