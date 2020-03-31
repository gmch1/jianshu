import React, { Component } from 'react';
import store from './store/index'
import { changeInputAction, addItemAction, delItemAction, initListAction, getTodoList } from './store/actionCreator'
import AppUI from './AppUI';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }

        store.subscribe(this.updata)
    }
    componentDidMount() {
        this.updata()
        const action = getTodoList()
        // console.log(action)
        store.dispatch(action)
    }
    render() {
        const { list, inputValue } = this.state
        return (
            <AppUI
                list={list}
                inputValue={inputValue}
                changeinput={this.changeinput}
                handleClick={this.handleClick}
                del={this.del}
            />
        );
    }
    changeinput = (e) => {
        let action = changeInputAction(e.target.value)

        store.dispatch(action)
    }
    updata = () => {
        const { list, inputValue } = store.getState()
        this.setState({
            list,
            inputValue
        })
    }
    handleClick = () => {
        let action = addItemAction()
        store.dispatch(action)
    }
    del = (e) => {

        let action = delItemAction(e)
        store.dispatch(action)

    }
}

export default App;
