export default function courseReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_COURSE':
      return [...state, //returns a spread out new version of the state object we passed in
      Object.assign({},action.course)];

    default:
        return state;
  }
}
