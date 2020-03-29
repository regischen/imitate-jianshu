import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'

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
    const {list, handleInputFocus, handlerSwitch } = this.props;
    // console.log(list);
    return (
      <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>登录</NavItem>
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
        <Button className='write'>
          <span className="iconfont">&#xe6e5;</span>
          写文章
        </Button>
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
    }
}

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
      }
    }
}

// export default Header;
export default connect(mapStateToProps,mapDispatchToProps)(Header);