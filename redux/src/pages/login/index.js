import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HomeWrapper, LoginBox, Input, Button } from './style'
import { actionCreator } from './store'
import { Redirect } from "react-router-dom"


class Login extends Component {
    render() {
        const { loginState } = this.props
        if (!loginState) {
            return (<HomeWrapper>
                <LoginBox>

                    <Input placeholder='账号' ref={(account) => this.account = account} />
                    <Input placeholder='密码' type='password' ref={(password) => this.password = password} />
                    <Button onClick={() => this.props.login(this.account, this.password)}>提交</Button>
                </LoginBox>
            </HomeWrapper>)
        } else {
            return (
                <Redirect to='/' />
            )
        }

    }
}

const mapProps = (state) => ({
    loginState: state.getIn(['login', 'login'])
})
const mapDispatch = (dispatch) => ({
    login(account, password) {
        dispatch(actionCreator.login(account.value, password.value))
    }
})

export default connect(mapProps, mapDispatch)(Login)