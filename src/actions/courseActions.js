import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses};
}



export function loadCourses() {
  return function(dispatch){
    // Fetch call or AJAX call would go here if we were not using a mockApi
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}
