import React, { Component } from 'react'
import { DetailWrapper, Header, Content } from './style'
import { connect } from 'react-redux'
import { actionCreator } from './store'


class Detail extends Component {

    render() {
        const { title, content, location } = this.props
        return (
            <DetailWrapper>
                <Header>
                    {title}
                </Header>
                <Content
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </DetailWrapper>

        )
    }
    cl(str) {
        return str.replace(/[?id=]/g, '')
    }

    componentDidMount() {
        this.props.getDetail(this.cl(this.props.location.search))
    }
}
const mapProps = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})
const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreator.getDetail(id))
    }
})

export default connect(mapProps, mapDispatch)(Detail)