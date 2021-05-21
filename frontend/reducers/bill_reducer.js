import { RECEIVE_BILLS, } from '../actions/bill_actions';


const initialState = {
  billList: {"you_owe":{}, "you_are_owed":{}},
  errors: {},

};

const billReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BILLS:
      newState.billList = action.bills;
      return newState;
    default:
      return newState;
  }
};

export default billReducer;
