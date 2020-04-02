import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  DetailWrapper,
  Header,
  Content,
 } from './style';
import { actionCreators } from './store';

class Detail extends Component {
  render () {
    let { title, content }  = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html: content}} />
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.getDetailData(this.props.match.params.id);
  }
}

const mapState = (state) => {
  return {
    title : state.detail.title,
    content : state.detail.content,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getDetailData(id) {
      dispatch(actionCreators.getDetial(id));
    }
  }
}

export default connect(mapState,mapDispatch)(Detail);