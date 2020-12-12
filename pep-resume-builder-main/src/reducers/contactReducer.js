import initialState from './initialState.json';
import * as actionTypeCd from '../actions/actionTypes';

export default function contactReducer(state = initialState.contactSection, action) {
    switch (action.type) {
      case actionTypeCd.ADD_CONTACT:
         return {...state,contactSection:action.payload} 

      case actionTypeCd.ADD_CONTACT_ERROR:
          return {...state,educationSection:action.payload} 
      default:
        return state
    }
  }