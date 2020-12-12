import * as actionTypeCd from './actionTypes';
export const setSkin=(skinCd)=>{
    return async(dispatch)=>{
        try{
            // db call 
            

            // on db call success
            await dispatch({ type: actionTypeCd.SET_SKIN_CD, payload:skinCd })
        }
      
        catch(err){
            await dispatch({ type: actionTypeCd.SET_SKIN_CD_ERROR, payload:skinCd })
        }
    }
}


export const updateSkinCd=(documentId , skinCd)=>{
    return async(dispatch)=>{
        try{
            // db call 
            

            // on db call success
            await dispatch({ type: actionTypeCd.UPDATE_SKIN_CODE, payload:skinCd })
        }
      
        catch(err){
            await dispatch({ type: actionTypeCd.UPDATED_SKIN_CODE_ERROR, payload:skinCd })
        }
    }
}



export const IncrementIfOdd=()=>{
    return (dispatch, getState) =>{
        const {document} = getState();
        console.log(document)
        dispatch({type: actionTypeCd.ADD_DOCUMENT, payload:'skin1'})
    };
}