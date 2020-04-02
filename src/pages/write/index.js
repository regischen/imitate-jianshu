import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Write extends Component {
  render(){
    const { loginState }  = this.props;
    {
      if(loginState) {
        return  <div>write</div>
      } else {
        return <Redirect to='/login' />
      }
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
    
  }
}

export default connect(mapState,mapDispatch)(Write);