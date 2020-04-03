import React, { Component } from 'react';
import { Globalstyle } from './style'
import Header from './common/header';
import { Iconfont } from './statics/iconfont/iconfont';
import { Provider } from 'react-redux'
import store from './store/store'
import { BrowserRouter, Route } from 'react-router-dom';
import Detail from './pages/detail';
import Home from './pages/home';
import login from './pages/login';

class App extends Component {
    render() {
        return (
            < div >
                <Provider store={store}>
                    <BrowserRouter>
                        <  Header />
                        <div>
                            <Route path='/' exact component={Home}></Route>
                            <Route path='/login' exact component={login}></Route>
                            <Route path='/detail'  exact component={Detail}></Route>
                        </div>
                    </BrowserRouter>
                </Provider>
                <  Globalstyle />
                < Iconfont />
            </div>
        );
    }
}

export default App;