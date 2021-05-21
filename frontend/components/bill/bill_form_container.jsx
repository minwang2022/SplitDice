import React from 'react';
import BillForm from './bill_form.jsx';
import { createBill, fetchBills } from '../../actions/bill_actions.js';
import { connect } from 'react-redux';


// make sure bills container is listening to the right pieces of state
// the bills reducer will now have friend actions and bill actions.

const mSTP = state => {
  return {
    friends: Object.values(state.entities.friendships),
    currentUserId: state.session.id,
    formType: "addBill"
  };
};

const mDTP = dispatch => {
  return {
    processBillForm: (bill) => dispatch(createBill(bill)),
    fetchBills: () => dispatch(fetchBills())
  };
};

export default connect(mSTP, mDTP)(BillForm);
