import React, { Component, Fragment } from 'react';
import { Button, Input, List } from 'antd';
import store from './store/index'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()

    }
    render() {
        const { list, inputValue } = this.state
        return (
            <Fragment>

                <Input style={{ width: 300, marginRight: 10 }} onChange={this.changeinput} value={inputValue} />
                <Button type='primary' >add</Button>
                <List
                    style={{ marginTop: 10, width: 300 }}
                    bordered
                    dataSource={list}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />

            </Fragment>
        );
    }
}

export default App;
