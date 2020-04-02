import * as actionTypes from "./actionTypes"
import axios from "axios"
import { fromJS } from 'immutable'

const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: fromJS(Math.ceil(data.length / 10))
})

export const changeFocus = () => {
    return ({
        type: actionTypes.CHANGE_FOCUS
    })
}
export const mouseEnter = () => {
    return ({
        type: actionTypes.MOUSE_INTER
    })
}
export const mouseLeave = () => {
    return ({
        type: actionTypes.MOUSE_LEAVE
    })
}
export const chanegPage = (data) => {
    return ({
        type: actionTypes.CHANGE_PAGE,
        data: fromJS(data)
    })
}
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