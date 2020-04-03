import * as actionTypes from "./actionTypes"
import axios from "axios"
import { fromJS } from 'immutable'

export const chanegLogin = (data) => ({
    type: actionTypes.CHANGE_LOGIN
})

export const logout = () => ({
    type: actionTypes.CHANGE_LOGOUT
})


export const login = (account, password) => {
    return async (dispatch) => {
        try {
            const data = await (await axios.get('/api/login.json?username=' + account + '?password=' + password)).data.data
            if (data) {
                dispatch(chanegLogin(data))

            } else {
                console.log('登陆失败')
            }

        } catch (err) {
            console.log(err)
        }
    }
}
