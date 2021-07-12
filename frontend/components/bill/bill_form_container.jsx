import React from 'react';
import BillForm from './bill_form.jsx';
// import { searchFriends,clearSearch } from '../../actions/friendship_actions';
import { createBill, fetchBills } from '../../actions/bill_actions';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';


// make sure bills container is listening to the right pieces of state
// the bills reducer will now have friend actions and bill actions.

const mSTP = state => {
  return {
    friends: Object.values(state.entities.friends),
    currentUserId: state.session.id,
    formType: "addBill"
  };
};

const mDTP = dispatch => {
  return {
    processBillForm: (bill) => dispatch(createBill(bill)),
    fetchBills: () => dispatch(fetchBills()),
    // searchFriends: (query) => dispatch(searchFriends(query)),
    // clearSearch: () => dispatch(clearSearch()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(BillForm);
