import Dashboard from './dashboard.jsx';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions.js';

const mSTP = ({ session, entities: { users }}) => {
  debugger 
    return {
      currentUser: users[session.id]
    };
  };
  
  const mDTP = dispatch => {
    debugger 
    return {
      logout: () => dispatch(logout()),
    };
  
  };
  
  export default connect(mSTP,mDTP)(Dashboard);
  