import Dashboard from './dashboard.jsx';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions.js';
import { fetchBills } from '../../actions/bill_actions.js';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => {
  // debugger 
    return {
      currentUser: state.session.id,
      bills: state.bills.billList
    };
};
  
const mDTP = dispatch => {
  // debugger 
  return {
    logout: () => dispatch(logout()),
    fetchBills: ()=> dispatch(fetchBills()),
    openModal: modal => dispatch(openModal(modal))

  };

};

export default connect(mSTP,mDTP)(Dashboard);
  