import * as actionTypes from "./actionTypes"
import axios from "axios"
import { fromJS } from 'immutable'

const changeHomeData = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: fromJS(result.topicList),
    articleList: fromJS(result.articleList),
    recommendList: fromJS(result.recommendList)
})

const addHomeList = (list, page) => ({
    type: actionTypes.ADD_HOME_LIST,
    list: fromJS(list),
    nextPage: page
})

export const toggleTopShow = (show) => ({
    type: actionTypes.TOGGLE_SCROLL_SHOW,
    show
})

export const getHomeInfo = () => {
    return async (dispatch) => {
        try {
            const { data } = await (await axios.get('/api/home.json')).data
            const action = changeHomeData(data)
            dispatch(action)
        } catch (err) {
            console.log(err)
        }
    }
}

export const getMoreList = (page) => {
    return async (dispatch) => {
        try {
            const { data } = await (await axios.get('/api/homeList.json?page=' + page)).data
            const action = addHomeList(data, page + 1)
            dispatch(action)
        } catch (err) {
            console.log(err)
        }
    }
}

