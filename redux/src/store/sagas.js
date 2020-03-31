import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { INIT_LIST_ACTION } from './actionTypes'
import { initListAction } from './actionCreator'
import axios from 'axios';


function* getList() {
    try {
        const res = yield axios.get('https://www.fastmock.site/mock/53f5c04c3ae44cfb6d0ea6855cce85d5/react/api/findall')
        const action = initListAction(res.data)
        yield put(action)
    } catch (e) {
        alert(e)
    }

    // .then((res) => {
    //     const { data } = res.data
    //     const action = initListAction(data)
    //         // store.dispatch(action)

    //     console.log(action)
    // })
}

function* todoSagas() {
    yield takeLatest(INIT_LIST_ACTION, getList)
}

export default todoSagas