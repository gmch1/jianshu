import React, { Component } from 'react'
import { ListItem, ListInfo, LOadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreator } from '../store'
import { Link } from 'react-router-dom'


class List extends Component {
    render() {
        const { list, getMoreList, page } = this.props
        return (
            <div>
                {
                    list.map((item, index) => (
                        <Link  key={index} to={'/detail?id='+item.get('id')}>
                            <ListItem>
                                <img className='pic' src={item.get('imgUrl')} alt="" />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }

                <LOadMore onClick={() => getMoreList(page)}>加载更多</LOadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])

})
const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreator.getMoreList(page))
    }
})
export default connect(mapState, mapDispatch)(List)