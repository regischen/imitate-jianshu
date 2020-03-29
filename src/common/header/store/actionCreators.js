import { constants } from '.'
import axios from 'axios';

const changeList = (data) => ({
  type : constants.CHANGE_LIST,
  data,
  totalPage : Math.ceil(data.length / 10),
})

export const searchFocus = () => ({
  type : constants.SEARCH_FOCUS,
})

export const searchBlur = () => ({
  type : constants.SERACH_BLUR,
})

export const switchContent = () => ({
  type : constants.SWITCH_CONTENT,
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      console.log('success')
      const data = res.data;
      dispatch(changeList(data.data));
    }).catch(() => {
      console.log('axio error')
    })
  }
}