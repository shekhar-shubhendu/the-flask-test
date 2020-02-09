import { SAVE_STUDENT_DATA } from '../actions/ActionTypes'

const initialState = {
    data: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_STUDENT_DATA:
            return Object.assign({}, state, { data: action.payload })
        default:
            return state //return default state
    }
}

export default reducer