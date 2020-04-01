import { actionTypes } from './index'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false
})

export default (state = defaultState, action) => {
    if (action.type === actionTypes.CHANGE_FOCUS) {
        return state.set('focused', !state.get('focused'))
    }
    return state
}