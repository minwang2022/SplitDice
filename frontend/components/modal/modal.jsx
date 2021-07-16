import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import Friendship_container from '../friendship/friendship_container';
import Bill_form_container from'../bill/bill_form_container';
import Settle_form_container from'../settle/settle_form_container';


function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'addFriend':
      component = <Friendship_container />;
      break;
    case 'addBill':
      component = <Bill_form_container />;
      break;
    case 'settle':
      component = <Settle_form_container />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
