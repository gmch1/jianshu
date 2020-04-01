import React, { Component } from 'react';
import { Globalstyle } from './style'
import Header from './common/header';
import { Iconfont } from './statics/iconfont/iconfont';
import { Provider } from 'react-redux'
import store from './store/store'

class App extends Component {
    render() {
        return (
            < div >
                <Provider store={store}>
                    <  Header />
                </Provider>
                <  Globalstyle />
                < Iconfont />
            </div>
        );
    }
}

export default App;