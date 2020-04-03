import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HomeWrapper } from './style'


class Login extends Component {
    render() {
        return (
            <HomeWrapper>
                login
            </HomeWrapper>
        )
    }
}

const mapProps = (state) => ({

})
const mapDispatch = (dispatch) => ({

})

export default connect(mapProps, mapDispatch)(Login)