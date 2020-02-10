import { TOGGLE_MODAL, UPDATE_MODAL } from './ActionTypes'


export const toggleModal = (payload) => {
    return {
      type: TOGGLE_MODAL,
      payload
    }
}

export const updateModal = (payload) => {
    return {
      type: UPDATE_MODAL,
      payload
    }
}