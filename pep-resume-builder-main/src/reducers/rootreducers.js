// import initialState from './initialState.json'
// import * as actionTypeCd from '../actions/actionTypes'

// export default function rootreducers(state = initialState, action){
//     switch (action.type) {
//         case actionTypeCd.setSkinCd:
//             let tmp = {...state, document:{skinCd: action.payload}};
//             return tmp;
//         case actionTypeCd.addContact:
//             let tcs ={...state, contactSection: action.payload};    
//             return tcs;
//         case actionTypeCd.addEducation:
//             let tes ={...state, educationSection: action.payload};
//             return tes;
//         default:
//             return state;
//     }
// }
// import initialState from './initialState.json';
// import * as actionTypeCd from '../actions/actionTypes';

// function rootReducer(state = initialState, action) {
//     switch (action.type) {
//       case actionTypeCd.ADD_DOCUMENT:
//         return {...state,document:{skinCd: action.payload }};

//       case actionTypeCd.ADD_DOCUMENT_ERROR:
//         return {...state,document:{skinCd: action.payload }};

//       case actionTypeCd.UPDATE_SKIN_CODE:
//         return {...state,document:{skinCd: action.payload }};

//       case actionTypeCd.UPDATED_SKIN_CODE_ERROR:
//         return {...state,document:{skinCd: action.payload }};

//       case actionTypeCd.ADD_CONTACT:
//          return {...state,contactSection:action.payload} 

//       case actionTypeCd.ADD_EDUCATION:
//           return {...state,educationSection:action.payload} 
//       default:
//         return state
//     }
//   }
  

//   export default rootReducer;

  
import initialState from './initialState.json';
import * as actionTypes from '../actions/actionTypes';
import contactReducer from './contactReducer';
import educationReducer from './educationReducer';   
import documentReducer from './documentReducer';  
import {combineReducers} from  'redux';

const rootReducer = combineReducers({
  contactSection: contactReducer,
  educationSection: educationReducer,
  document: documentReducer
})

export default rootReducer;
