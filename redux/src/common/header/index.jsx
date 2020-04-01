import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, Addition, Button, NavSearch, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem } from './style';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreator } from './store'


class Header extends Component {

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
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
                            &#xe614;
						</i>
                        {focused ? (<SearchInfo>
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
                        </SearchInfo>) : ('')}
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
        list: state.get('header').get('list')
    })
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreator.getList())
            dispatch(actionCreator.changeFocus())
        },
        handleInputBlur() {
            dispatch(actionCreator.changeFocus())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
