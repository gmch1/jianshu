import React, { Component } from 'react';
import { Globalstyle } from './style'
import Header from './common/header';
import { Iconfont } from './statics/iconfont/iconfont';


class App extends Component {
    render() {
        return (
            < div >
                <  Header />
                <  Globalstyle />
                < Iconfont />
            </div>
        );
    }
}

export default App;