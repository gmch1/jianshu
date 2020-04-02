import { actionTypes } from './index'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage: 1,
    mouseIn: false
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_FOCUS:
            return state.set('focused', !state.get('focused'))
        case actionTypes.CHANGE_LIST:
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            })
            // return state.set('list', action.data).set('totalPage', action.totalPage)
        case actionTypes.MOUSE_INTER:
            return state.set('mouseIn', true)
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case actionTypes.CHANGE_PAGE:
            return state.set('page', action.data)
        default:
            return state

    }
}