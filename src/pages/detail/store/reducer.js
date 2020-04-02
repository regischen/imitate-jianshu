import { constants } from '.'

const defaultState = {
  title : '',
  content : '',
}

export default (state = defaultState , action) => {
  switch(action.type) {
    case constants.INITIAL_DETAIL : {
      let ns = JSON.parse(JSON.stringify(state));
      ns.title = action.title;
      ns.content = action.content;
      return ns;
    }
    default : return state;
  }
}

