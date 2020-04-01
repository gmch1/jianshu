import { CHANGE_INPUT_VALUE, ADD_ITEM, DEL_ITEM } from "./actionTypes";

export const changInputValueAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const handleClickAction = () => ({
    type: ADD_ITEM
})
export const delItemAction = (index) => ({
    type: DEL_ITEM,
    index
})