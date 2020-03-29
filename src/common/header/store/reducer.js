import { constants } from '.'
import { SEARCH_FOCUS } from './actionTypes';

const defaultState = {
  list : [],
  page : 0,
  totalPage : 1,
}

export default (state = defaultState , action) => {
  switch(action.type) {
    case constants.SEARCH_FOCUS : {
      return state;
    }
    case constants.CHANGE_LIST : {
      const ns = JSON.parse(JSON.stringify(state));
      ns.list = action.data;
      ns.totalPage = action.totalPage;
      return ns;
    }

    case constants.SWITCH_CONTENT : {
      const ns = JSON.parse(JSON.stringify(state));
      ns.page = (ns.page + 1) % ns.totalPage;
      return ns;
    }
    default : return state;
  }
}