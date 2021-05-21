import Dashboard from './dashboard.jsx';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions.js';
import { fetchBills } from '../../util/bill_form_api_util.js';

const mSTP = ({ session, entities: { users }}) => {
  // debugger 
    return {
      currentUser: users[session.id]
    };
  };
  
  const mDTP = dispatch => {
    // debugger 
    return {
      logout: () => dispatch(logout()),
      fetchBills: ()=> dispatch(fetchBills())
    };
  
  };
  
  export default connect(mSTP,mDTP)(Dashboard);
  