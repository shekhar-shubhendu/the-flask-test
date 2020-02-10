import { TOGGLE_MODAL, UPDATE_MODAL } from '../actions/ActionTypes'

const initialState = {
    show: false,
    mode: 'close', // close | add | edit
    data: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MODAL:
            return Object.assign({}, state, { show: !state.show, mode: action.payload })
        case UPDATE_MODAL:
            return Object.assign({}, state, { data: action.payload })
        default:
            return state //return default state
    }
}

export default reducer