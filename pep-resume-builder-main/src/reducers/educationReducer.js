import initialState from './initialState.json';
import * as actionTypeCd from '../actions/actionTypes';

export default function educationReducer(state = initialState.educationSection, action) {
    switch (action.type) {
      case actionTypeCd.ADD_EDUCATION:
          return {...state,educationSection:action.payload};
      case actionTypeCd.ADD_EDUCATION_ERROR:
          return {...state,educationSection:action.payload};
      default:
        return state
    }
  }