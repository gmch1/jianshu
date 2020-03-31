import { ADD_ITEM, CHANEG_INPUT, DET_ITEM, INIT_LIST, INIT_LIST_ACTION } from './actionTypes'

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

export const initListAction = (value) => ({
    type: INIT_LIST,
    value
})

// export const getTodoList = () => {
//     return (dispatch) => {
//         axios.get('https://www.fastmock.site/mock/53f5c04c3ae44cfb6d0ea6855cce85d5/react/api/findall')
//             .then((res) => {
//                 const { data } = res.data
//                 const action = initListAction(data)
//                 dispatch(action)
//                     // console.log(data)
//             })
//     }
// }

export const getInitListAction = () => ({
    type: INIT_LIST_ACTION
})