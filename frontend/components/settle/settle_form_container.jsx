import SettleForm from './settle_form.jsx';
import { searchFriends, clearSearch } from '../../actions/friendship_actions.js';
import { settleBill } from '../../actions/bill_actions.js';
import { connect } from 'react-redux';
import { selectAllFriends } from '../../reducers/selectors.js';

// make sure bills container is listening to the right pieces of state
// the bills reducer will now have friend actions and bill actions.

const mSTP = state => {
  return {
    // search: selectAllFriends(state.friends.userResult),
    currentUser: state.entities.users,
    currentUserId: state.session.id,
    friends: Object.values(state.entities.friends)
  };
};

const mDTP = dispatch => {
  return {
    settleBill: (bill) => dispatch(settleBill(bill)),
    searchFriends: (query) => dispatch(searchFriends(query)),
    clearSearch: () => dispatch(clearSearch())
  };
};

export default connect(mSTP, mDTP)(SettleForm);
