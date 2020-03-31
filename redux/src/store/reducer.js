import { ADD_ITEM, CHANEG_INPUT, DET_ITEM } from './actionTypes'

const defaultState = {
    inputValue: '2',
    list: [
        '1Racing car sprays burning fuel into crowd.',
        '2Japanese princess to wed commoner.',
        '3Australian walks 100km after outback crash.',
        '4Man charged over missing wedding girl.',
        '5Los Angeles battles huge wildfires.',
    ]
}
export default (state = defaultState, action) => {
    if (action.type === CHANEG_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = [...newState.list, newState.inputValue]
        newState.inputValue = ''
        return newState
    }
    if (action.type === DET_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value, 1)
        return newState
    }
    return state
}