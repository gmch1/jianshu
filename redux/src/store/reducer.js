import { CHANGE_INPUT_VALUE, ADD_ITEM, DEL_ITEM } from "./actionTypes";

const defaultState = {
    inputValue: '233',
    list: []
}

export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === DEL_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}