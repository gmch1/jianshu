import { ADD_ITEM, CHANEG_INPUT, DET_ITEM } from './actionTypes'

export const changeInputAction = (value) => ({
    type: CHANEG_INPUT,
    value
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const delItemAction = (value) => ({
    type: DET_ITEM,
    value
})