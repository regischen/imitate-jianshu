import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'

import { 
    HeaderWrapper, 
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    NavSearch,
    Addition,
    Button,
    } from './style'

class Header extends Component {
  constructor(props){
    super(props);
  }

  getSearchItem = () => {
    const { page, list } = this.props;
    if(list.length){
      let buf = [];
      for(let i = page * 10; i< (page+1) * 10 ;i++){
        buf.push(<SearchInfoItem key={list[i]}>{list[i]}</SearchInfoItem>)
      }
      return buf;
    }
    return null;
  }

  render() {
    const { loginState, list, handleInputFocus, handlerSwitch ,logout} = this.props;
    return (
      <HeaderWrapper>
      <Link to='/'>
        <Logo />
      </Link>
      <Nav>
        <Link to='/'>
          <NavItem className='left active'>首页</NavItem>
        </Link>
        <NavItem className='left'>下载App</NavItem>
        {
          loginState ? <Link to='/'><NavItem onClick={logout} className='right'>退出</NavItem></Link>
          : <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
        }
        
        <NavItem className='right'>
          <span className="iconfont">&#xe636;</span>
        </NavItem>
        <SearchWrapper>
          <NavSearch onFocus={() => {handleInputFocus(list)}}></NavSearch>
          <i className="iconfont">&#xe62b;</i>
          <SearchInfo>
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch onClick={handlerSwitch}>换一批</SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
              {
                this.getSearchItem()
              }
            </SearchInfoList>
          </SearchInfo>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Link to='/write'>
          <Button className='write'>
            <span className="iconfont">&#xe6e5;</span>
            写文章
          </Button>
        </Link>
        <Button className='res'>注册</Button>
      </Addition>
    </HeaderWrapper>
    )
  }
}


const mapStateToProps = (state) => {
    return {
      list : state.header.list,
      page : state.header.page,
      totalPage : state.header.totalPage,
      loginState : state.login.login,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
      handleInputFocus(list) {
        (list.length === 0) && dispatch(actionCreators.getList())
        dispatch(actionCreators.searchFocus())
      },
      handleInputBlur() {
        dispatch(actionCreators.searchBlur())
      },
      handlerSwitch() {
        dispatch(actionCreators.switchContent())
      },
      logout() {
        dispatch(loginActionCreators.logout())
      }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);