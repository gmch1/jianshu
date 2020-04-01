import * as actionTypes from "./actionTypes"
import axios from "axios"
import { fromJS } from 'immutable'

export const changeFocus = () => {
    return ({
        type: actionTypes.CHANGE_FOCUS
    })
}
export const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data)
})
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const { data } = res
            dispatch(changeList(data.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}