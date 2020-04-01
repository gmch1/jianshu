import { actionTypes } from './index'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    list: []
})

export default (state = defaultState, action) => {
    if (action.type === actionTypes.CHANGE_FOCUS) {
        return state.set('focused', !state.get('focused'))
    }
    if (action.type === actionTypes.CHANGE_LIST) {
        return state.set('list', action.data)
    }
    return state
}