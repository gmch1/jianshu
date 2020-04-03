import { actionTypes } from './index'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    login: false
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LOGIN:
            return state.set('login', true)
        case actionTypes.CHANGE_LOGOUT:
            return state.set('login', false)
        default:
            return state
    }
}