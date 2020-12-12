import initialState from './initialState.json';
import * as actionTypeCd from '../actions/actionTypes';

export default function documnentReducer(state = initialState.document, action) {
    switch (action.type) {
      // case actionTypeCd.ADD_DOCUMENT:
      //   return {...state,document:{skinCd: action.payload }};

      // case actionTypeCd.ADD_DOCUMENT_ERROR:
      //   return {...state,document:{skinCd: action.payload }};

      case actionTypeCd.UPDATE_SKIN_CODE:
        return {...state,document:{skinCd: action.payload }};

      case actionTypeCd.UPDATED_SKIN_CODE_ERROR:
        return {...state,document:{skinCd: action.payload }};

       
      default:
        return state
    }
  }
  

