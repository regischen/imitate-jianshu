import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { actionCreators } from '../store'
import { ListItem, LoadMore } from '../style';

class List extends Component {
  render () {
    const { list, getMoreHomeList } = this.props;
    return (
      <Fragment>
      {
        list.map((item,index) => {
          let to = '/detail/' + item.id;
          return (
            <ListItem key={index}>
              <div className='left'>
                <h2><Link className='headingLink' to={to}>{item.heading}</Link></h2>
                <p>{item.paragraph}</p>
              </div>
              <div className='right'>
                <Link to={to}>
                  <img src={item.imgUrl} alt=''></img>
                </Link>
              </div>
            </ListItem>
          )
        })
      }
        <LoadMore onClick={getMoreHomeList}>阅读更多</LoadMore>
      </Fragment>
    )
  }
}

const mapState = (state) => {
  return {
    list : state.home.list,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getMoreHomeList() {
      dispatch(actionCreators.getMoreList());
    }
  }
}

export default connect(mapState,mapDispatch)(List);