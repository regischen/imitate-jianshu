import { constants } from '.'

const defaultState = {
  login : false,
}

export default (state = defaultState , action) => {
  switch(action.type) {
    case constants.CHANGE_LOGIN : {
      let ns = JSON.parse(JSON.stringify(state));
      ns.login = action.value;
      return ns;
    }
    case constants.LOGOUT : {
      let ns = JSON.parse(JSON.stringify(state));
      ns.login = action.value;
      return ns;
    }
    default : return state;
  }
}

