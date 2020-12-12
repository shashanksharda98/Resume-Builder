import Finalize from "../presentation/finalize";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
      contactSection: state.contactSection,
      educationSection: state.educationSection,
      document: state.document
    }
  }
  export default connect(mapStateToProps, null)(Finalize)