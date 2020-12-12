import * as actionTypeCd from './actionTypes';
export const addContact=(contactSection)=>{
    return async(dispatch)=>{
        try{
            // db call 
            

            // on db call success
            await dispatch({ type: actionTypeCd.ADD_CONTACT, payload:contactSection })
        }
      
        catch(err){
            await dispatch({ type: actionTypeCd.ADD_CONTACT_ERROR, payload:err })
        }
    }
}


export const updateContact=(documentId , contactSection)=>{
    return async(dispatch)=>{
        try{
            // db call 
            

            // on db call success
            await dispatch({ type: actionTypeCd.UPDATE_CONTACT, payload:contactSection })
        }
      
        catch(err){
            await dispatch({ type: actionTypeCd.UPDATE_CONTACT_ERROR, payload:err })
        }
    }
}



export const IncrementIfOdd=()=>{
    return (dispatch, getState) =>{
        const {document} = getState();
        console.log(document)
        dispatch({type: actionTypeCd.ADD_CONTACT, payload:''})
    };
}