import * as actionTypes from "./actionTypes"
import axios from "axios"
import { fromJS } from 'immutable'

const changeDetail = (data) => ({
    type: actionTypes.CHANGE_DETAIL,
    title: fromJS(data.title),
    content: fromJS(data.content)
})

export const getDetail = (id) => {
    return async (dispatch) => {
        try {
            const data = await (await axios.get('/api/detail.json?id='+id)).data.data
            dispatch(changeDetail(data))
        } catch (err) {
            console.log(err)
        }
    }
}

