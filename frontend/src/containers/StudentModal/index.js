import { connect } from 'react-redux';
import { toggleModal, updateModal} from '../../redux/actions/ModalActions'
import { saveStudent } from '../../redux/actions/APIActions'
import StudentModal from '../../components/StudentModal';

export default connect(
  (state) => {
    const student = state.modal.data || {}
    return {...state.modal, student};
  },
  dispatch => ({
    toggleModal: (payload) => {
        dispatch(toggleModal(payload))
    },
    updateModal: (payload) => {
        dispatch(updateModal(payload))
    },
    handleCreate: (mode, info) => {
        dispatch(saveStudent(mode, info))
        dispatch(toggleModal())
    }
  })
)(StudentModal)