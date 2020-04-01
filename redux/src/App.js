import React from 'react';
// import store from './store'
import { connect } from 'react-redux'
import { changInputValueAction, handleClickAction, delItemAction } from './store/actionCreator';


function App(props) {
    const { list, handleDel, handleClick, changeInput, inputValue } = props
    return (
        <div>
            {/* {this.state} */}
            <input type="text" onChange={changeInput} value={inputValue} />
            <button onClick={handleClick}>add</button>
            <ul>
                {
                    list.map((item, index) => {
                        return (<li onClick={() => handleDel(index)} key={index + item}>{item}</li>)
                    })
                }
            </ul>
        </div>
    );
}

const mapStateProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeInput(e) {
            const action = changInputValueAction(e.target.value)
            dispatch(action)
        },
        handleClick() {
            const action = handleClickAction()
            dispatch(action)

        },
        handleDel(index) {
            const action = delItemAction(index)
            dispatch(action)

        }
    }
}

export default connect(mapStateProps, mapDispatchToProps)(App);
