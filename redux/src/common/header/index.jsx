import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, Addition, Button, NavSearch, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem } from './style';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreator } from './store'


class Header extends Component {

    getListArea() {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
        const newList = list.toJS()
        const pageList = []
        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i] + i}>{newList[i]}</SearchInfoItem>
                )
            }

        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle >
                        热门搜索
                <SearchInfoSwitch
                            onClick={() => handleChangePage(totalPage, page, this.spinIcon)}
                        >
                            <i ref={icon => this.spinIcon = icon} className="iconfont spin">&#xe851;</i>
                            换一换
                </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {pageList}

                    </div>
                </SearchInfo>)
        }
    }
    render() {
        const { handleInputFocus, handleInputBlur, focused, list } = this.props


        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>

                    <NavItem className='right'>登录</NavItem>

                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>

                    <SearchWrapper>
                        <CSSTransition
                            timeout={200}
                            in={focused}
                            classNames='slide'
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
                            &#xe614;
						</i>
                        {/* {focused ? (<SearchInfo>
                            <SearchInfoTitle>
                                热门搜索
                                <SearchInfoSwitch>
                                    换一换
                                </SearchInfoSwitch>
                            </SearchInfoTitle>
                            <div>
                                {
                                    list.map((item, index) => (<SearchInfoItem key={item + index}>{item}</SearchInfoItem>))
                                }

                            </div>
                        </SearchInfo>) : ('')} */
                            this.getListArea()
                        }
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <i className="iconfont">&#xe615;</i>
                        写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }

}
const mapStateToProps = (state) => {
    return ({
        focused: state.get('header').get('focused'),
        list: state.get('header').get('list'),
        page: state.get('header').get('page'),
        totalPage: state.get('header').get('totalPage'),
        mouseIn: state.get('header').get('mouseIn'),
    })
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(actionCreator.getList())
            dispatch(actionCreator.changeFocus())
        },
        handleInputBlur() {
            dispatch(actionCreator.changeFocus())
        },
        handleMouseEnter() {
            dispatch(actionCreator.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreator.mouseLeave())
        },
        handleChangePage(totalPage, page, icon) {
            // icon.style.transform='rotate(360deg)'
            let organAngle = icon.style.transform.replace(/[^0-9]/ig, '')
            if (organAngle) {
                organAngle = parseInt(organAngle, 10)
            } else {
                organAngle = 0
            }

            icon.style.transform = 'rotate(' + (organAngle + 360) + 'deg)'

            if (page < totalPage) {
                return dispatch(actionCreator.chanegPage(page + 1))
            } else {
                return dispatch(actionCreator.chanegPage(1))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
