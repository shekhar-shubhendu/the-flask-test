import { connect } from 'react-redux';
import { toggleModal, updateModal} from '../../redux/actions/ModalActions'
import StudentModal from '../../components/StudentModal';

export default connect(
  (state) => {
    return state.modal;
  },
  dispatch => ({
    toggleModal: () => {
        dispatch(toggleModal())
    },
    updateModal: (payload) => {
        dispatch(updateModal(payload))
    }
  })
)(StudentModal)