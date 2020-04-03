import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreator } from './store'

class Home extends Component {
    handleScrollTop() {
        //函数如果不绑定this,就会导致函数内部this丢失,如果绑定this,函数中的this指向的就是本组件
        console.log(this)
        window.scrollTo(0, 0)
    }

    render() {
        const { showScroll } = this.props
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-image' src="https://upload-images.jianshu.io/upload_images/11864358-a0a516a8e7bbaa45?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp" alt="" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                    {
                        showScroll ? <BackTop onClick={this.handleScrollTop}>^</BackTop> : null
                    }
                </HomeRight>

            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.getHomeData()
        this.bindEvent()
    }
    bindEvent() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

}
const mapProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})
const mapState = (dispatch) => ({
    getHomeData() {
        dispatch(actionCreator.getHomeInfo())
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 400) {
            dispatch(actionCreator.toggleTopShow(true))

        } else {
            dispatch(actionCreator.toggleTopShow(false))

        }
    }
})

export default connect(mapProps, mapState)(Home)