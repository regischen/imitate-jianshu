import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  ScrollToTop,
} from './style'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators } from './store'

class Home extends Component {
  render () {
    const { showScroll }  = this.props;

    return (
      <HomeWrapper>
        <HomeLeft>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        { showScroll ? <ScrollToTop onClick={this.ScrollToTop}>回到顶部</ScrollToTop> : null }
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.loadInitialData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll',this.changeScroll);
  }

  ScrollToTop() {
    window.scrollTo(0,0);
  }

  bindEvents = () => {
    window.addEventListener('scroll',this.changeScroll);
  }

  changeScroll = () => {
    this.props.changeScrollTopShow(this.props.showScroll)
  }
}

const mapState = (state) => {
  return {
    showScroll : state.home.showScroll,
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(actionCreators.loadData());
    },
    changeScrollTopShow(showScroll) {
      if(document.documentElement.scrollTop > 400 && !showScroll ){
        dispatch(actionCreators.changeScroll());
      } else if(document.documentElement.scrollTop < 400 && showScroll){
        dispatch(actionCreators.changeScroll());
      } 
    }
  }
}

export default connect(mapState,mapDispatch)(Home);