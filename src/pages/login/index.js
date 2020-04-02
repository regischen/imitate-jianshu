import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
  LoginWrapper,
  LoginBox,
  Input,
  Button,
 } from './style'
import { actionCreators } from './store'

class Detail extends Component {
  render () {
    const { loginState } = this.props;
    if( !loginState ) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='account' ref={(input) => {this.account = input}}></Input>
            <Input placeholder='password' type='password' ref={(input) => {this.password = input}}></Input>
            <Button onClick={() => {this.props.login(this.account,this.password)}}>Login</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/'/>
    }
  }
}

const mapState = (state) => {
  return {
    loginState : state.login.login,
  }
}

const mapDispatch = (dispatch) => {
  return {
    login(accountElem,passwordElem) {
      dispatch(actionCreators.login(accountElem.value,passwordElem.value));
    }
  }
}

export default connect(mapState,mapDispatch)(Detail);