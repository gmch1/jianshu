import React, { Component, Fragment } from 'react';
import { Button, Input, List } from 'antd';

export default function AppUI(props) {

    const { list, inputValue, changeinput, handleClick, del } = props
    return (
        <Fragment>
            <Input style={{ width: 300, marginRight: 10 }} onChange={changeinput} value={inputValue} />
            <Button onClick={handleClick} type='primary' >add</Button>
            <List
                style={{ marginTop: 10, width: 300 }}
                bordered
                dataSource={list}
                renderItem={(item, index) => (
                    <List.Item onClick={() => del(index)}>
                        {item}
                    </List.Item>
                )}
            />

        </Fragment>
    )

}