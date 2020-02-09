import { connect } from 'react-redux';
import { toggleModal } from '../../redux/actions/ModalActions'
import StudentDetails from '../../components/StudentDetails';

export default connect(
  (state) => {
    return { showModal: state.modal.show };
  },
  dispatch => ({
    toggleModal: () => {
      dispatch(toggleModal())
  },
  })
)(StudentDetails)