import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as  documentActions from '../../actions/documentActions'
import Contact from "../presentation/contact";

const mapStateToProps = (state) =>{
    return state;
}

const mapDispatchToProps = (dispatch)=>{
  return{
      //addContact:(contsection)=>dispatch({type:actionTypeCd.addContact, payload:contsection})
      actions:bindActionCreators(documentActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Contact);