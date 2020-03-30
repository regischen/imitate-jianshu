import { constants } from '.'

const defaultState = {
    list : [],
    showScroll : false,
}

export default (state = defaultState , action) => {
  switch(action.type) {
    case constants.GET_HOME_DATA :{
      let ns = JSON.parse(JSON.stringify(state)); 
      ns.list = action.list;
      return ns;
    } 
    case constants.ADD_HOME_DATA : {
      let ns = JSON.parse(JSON.stringify(state));
      ns.list.push(...action.list);
      return ns;
    }
    case constants.CHANGE_SCROLL_SHOW : {
      let ns = JSON.parse(JSON.stringify(state)); 
      ns.showScroll = !ns.showScroll;
      return ns;
    }
    default : return state;
  }
}

