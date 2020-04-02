import axios from 'axios';
import { constants } from '.'

const getHomeData = (res) => {
  return {
    type : constants.GET_HOME_DATA,
    list : res.list,
  }
}

const addHomeData = (res) => {
  return {
    type : constants.ADD_HOME_DATA,
    list : res.list,
  }
}

export const loadData = () => {
  return (dispatch) => {
    axios.get('api/home.json').then((res) => {
      dispatch(getHomeData(res.data.data))
    }).catch(() => {
      console.log('home axios error');
    })
  }
}

export const getMoreList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res) => {
      dispatch(addHomeData(res.data.data));
    }).catch(() => {
      console.log('home add axios error');
    })
  }
}

export const changeScroll = () => {
  return {
    type : constants.CHANGE_SCROLL_SHOW,
  }
}