import React from "react";
import { NavLink } from 'react-router-dom';
import { skinCodes, fieldcodes } from '../../constants/typeCodes';
import ResumePreview from './resumePreview';

class Finalize extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      educationSection: this.props.educationSection,
      contactSection: this.props.contactSection,
      document: this.props.document
    }
  }
  onChange = (skinCd) => {
    this.props.documentActions.updateSkinCd(this.state.document.id, skinCd);
  }



  render() {
    return (
      //   <div className="container med finalize-page">
      //   <div className="section funnel-section">
      //     <div className="form-card">        
      //       <h2 className="form-heading center">Final preview</h2>
      //       <div className="preview-card">      
      //           <ResumePreview contactSection={this.contactSection} educationSection={this.educationSection}></ResumePreview>       
      //        </div> 
      //       <div className="form-section">   

      //         <div className="form-buttons">
      //           <button className="btn hvr-float-shadow" type='button'>Next</button>
      //           <NavLink to='/education' className="center">Back</NavLink>
      //       </div>
      //       </div>            
      //     </div>

      //   </div>
      // </div>
      <div className="container med finalize-page" >
        <div className="funnel-section ">
          <div className="finalize-preview-card ">
            <ResumePreview contactSection={this.state.contactSection} educationSection={this.state.educationSection} document={this.state.document}></ResumePreview>
          </div>
          <div className="finalize-settings">
            <div className="section">
              <h3 className="center">Download resume as pdf</h3>
              <div className="center">
                <button type="button" className='btn hvr-float'>Download Resume</button>
              </div>
              
              <div className="divider"></div>
              <h3 className="center">Change Font Family</h3>
              <div className="divider"></div>
              <h3 className="center">Change Font Size</h3>
              <div className="options center">
                <button type="button" className="btn hvr-float">small</button>
                <button type="button" className="btn hvr-float">medium</button>
                <button type="button" className="btn hvr-float">large</button>
              </div>
              <div className="divider"></div>
              <h3 className="center">Change Color</h3>
              <div className="divider"></div>
              <h3 className="center">Change Template</h3>
              <div className="center">
                <button type="button" className='btn hvr-float-shadow center'>Change Template</button>
              </div>
              {/* <div className="styleTemplate ">
            
              {
              skinCodes.map((value, index) => {
              return( <div className="template-card rounded-border">

                <i className={this.state.document.skinCd==value?'fa fa-check-circle selected':'hide'} aria-hidden="true"></i>
                <img className={this.state.document.skinCd==value?'active':''} src={'/images/' + value + '.svg' } />
                <button className="btn-select-theme" onClick={()=>this.onChange(value)} type='button'>USE TEMPLATE</button>
              </div>);
              })
        }
      </div> */}

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Finalize

