import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_COURSE:
      return [...state, //returns a spread out new version of the state object we passed in
      Object.assign({},action.course)];

    default:
        return state;
  }
}
