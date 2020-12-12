import * as actionTypeCd from './actionTypes';
export const addEducation=(educationSection)=>{
    return async(dispatch)=>{
        try{
            // db call 
            

            // on db call success
            await dispatch({ type: actionTypeCd.ADD_EDUCATION, payload:educationSection })
        }
      
        catch(err){
            await dispatch({ type: actionTypeCd.ADD_EDUCATION_ERROR, payload:err })
        }
    }
}


export const updateEducation=(documentId , educationSection)=>{
    return async(dispatch)=>{
        try{
            // db call 
            

            // on db call success
            await dispatch({ type: actionTypeCd.UPDATE_EDUCATION, payload:educationSection })
        }
      
        catch(err){
            await dispatch({ type: actionTypeCd.UPDATED_EDUCATION_ERROR, payload:err })
        }
    }
}



export const IncrementIfOdd=()=>{
    return (dispatch, getState) =>{
        const {document} = getState();
        console.log(document)
        dispatch({type: actionTypeCd.ADD_EDUCATION, payload:''})
    };
}