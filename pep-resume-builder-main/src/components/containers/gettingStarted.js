import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as  documentActions from '../../actions/documentActions';
import GettingStarted from '../presentation/gettingStarted';


const mapStateToProps=(state)=>{
    return{
        document: state.document
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        //setSkinCd: (skinCd) => dispatch({type: actionTypeCd.setSkinCd, payload: skinCd})
        actions:bindActionCreators(documentActions, dispatch)
    }
    
    
    
}

export default connect(mapStateToProps, mapDispatchToProps)(GettingStarted);