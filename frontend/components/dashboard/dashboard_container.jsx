import Dashboard from './dashboard.jsx';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions.js';
import { fetchBills } from '../../actions/bill_actions.js';
import { getFriends} from '../../actions/friendship_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => {
  // debugger 
    return {
      currentUser: state.session.id,
      bills: state.bills.billList,
      friends: Object.values(state.entities.friends)
    };
};
  
const mDTP = dispatch => {
  // debugger 
  return {
    logout: () => dispatch(logout()),
    fetchBills: ()=> dispatch(fetchBills()),
    openModal: modal => dispatch(openModal(modal)),
    getFriendships: (userId) => dispatch(getFriends(userId))
  };

};

export default connect(mSTP,mDTP)(Dashboard);
  