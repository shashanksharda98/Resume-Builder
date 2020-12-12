import Education from "../presentation/education";
import { connect } from 'react-redux';
import * as  documentActions from '../../actions/documentActions'
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) =>{
    return {
      contactSection: state.contactSection,
      educationSection: state.educationSection,
      document: state.document
    }
  }
  const mapDispatchToProps=(dispatch)=>{
    return{
      // addEducation:(edusection)=>dispatch({type:actionTypeCd.addEducation, payload:edusection})
      actions:bindActionCreators(documentActions, dispatch)
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Education)

