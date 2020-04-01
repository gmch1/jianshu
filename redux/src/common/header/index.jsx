import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, Addition, Button, NavSearch } from './style';
import { CSSTransition } from 'react-transition-group'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            focused: false
        }
    }
    render() {
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
                            in={this.state.focused}
                            classNames='slide'
                        >
                            <NavSearch
                                className={this.state.focused ? 'focused' : ''}
                                onFocus={this.handleInputFocus}
                                onBlur={this.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={this.state.focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
                            &#xe614;
						</i>
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
    handleInputFocus = () => {
        this.setState({
            focused: true
        })
    }
    handleInputBlur = () => {
        this.setState({
            focused: false
        })
    }
}

export default Header;
