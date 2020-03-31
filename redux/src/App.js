import React, { Component } from 'react';
import store from './store/index'
import { getInitListAction, changeInputAction, addItemAction, delItemAction, initListAction } from './store/actionCreator'
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
        // axios.get('https://www.fastmock.site/mock/53f5c04c3ae44cfb6d0ea6855cce85d5/react/api/findall')
        //     .then((res) => {
        //         const { data } = res.data
        //         const action = initListAction(data)
        //         store.dispatch(action)
        //         // console.log(data)
        //     })
        const action = getInitListAction()
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
