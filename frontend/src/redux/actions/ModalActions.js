import { TOGGLE_MODAL, UPDATE_MODAL } from './ActionTypes'


export const toggleModal = () => {
    return {
      type: TOGGLE_MODAL
    }
}

export const updateModal = (payload) => {
    return {
      type: UPDATE_MODAL,
      payload
    }
}