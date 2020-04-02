import axios from 'axios';
import { constants } from '.'


const initialDetail = (title,content) => ({
  type : constants.INITIAL_DETAIL,
  title,
  content,
})

export const getDetial = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      const data = res.data.data;
      dispatch(initialDetail(data.title,data.content));
    }).catch(() => {
      console.log('detial axios error');
    })
  }
}