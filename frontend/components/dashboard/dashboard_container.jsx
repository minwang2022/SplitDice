import Dashboard from './dashboard.jsx';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions.js';

const mSTP = (state) => {
    return {
      currentUser: state.entities.users.id,
    };
  };
  
  const mDTP = dispatch => {
    return {
      logout: () => dispatch(logout()),
    };
  
  };
  
  export default connect(mSTP,mDTP)(Dashboard);
  