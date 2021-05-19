import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import friendship_container from '../friendship/friendship_container';


function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component = <friendship_container />;
  // switch (modal) {
  //   case 'login':
  //     component = <friendship_container />;
  //     break;
  //   case 'signup':
  //     component = <SignupFormContainer />;
  //     break;
  //   default:
  //     return null;
  // }
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
    modal: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
