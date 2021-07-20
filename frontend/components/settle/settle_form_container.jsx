import React from 'react';
import SettleForm from './settle_form.jsx';
import { searchFriends, clearSearch } from '../../actions/friendship_actions.js';
import { settleBill } from '../../actions/bill_actions.js';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';


const mSTP = state => {
  return {
    currentUser: state.entities.users,
    currentUserId: state.session.id,
    friends: Object.values(state.entities.friends),
    formType: 'settle'
  };
};

const mDTP = dispatch => {
  return {
    settleBill: (bill) => dispatch(settleBill(bill)),
    searchFriends: (query) => dispatch(searchFriends(query)),
    closeModal: () => dispatch(closeModal()),
    clearSearch: () => dispatch(clearSearch())
  };
};

export default connect(mSTP, mDTP)(SettleForm);
