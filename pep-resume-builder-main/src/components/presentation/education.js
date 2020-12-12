import React from "react";
import {NavLink} from 'react-router-dom';
import {fieldcodes} from '../../constants/typeCodes';
import ResumePreview from './resumePreview';


class Education extends React.Component{

  constructor(props, context){
    super(props, context);
    this.state = {
      educationSection: this.props.educationSection,
      contactSection: this.props.contactSection,
      document: this.props.document
    }
  }

  onChange = (event) => {
    this.setState({...this.state, educationSection: {...this.state.educationSection,  [event.target.name]: event.target.value  } })
  }
  onSubmit =() =>{
      this.props.actions.addEducation(this.state.educationSection)
  }
 
render() {
        return (    
            <div className="container med education">
            <div className="section funnel-section">
              <div className="form-card">        
                <h2 className="form-heading center">Educational Details</h2>
                <div className="form-section">
                  <div className="input-group"><label>College Name</label>
                    <div className="effect"><input  type="text" name={fieldcodes.SchoolName} onChange={this.onChange} value={this.state.educationSection[fieldcodes.SchoolName]}/><span></span>
                    </div>
                    <div className="error"></div>
                  </div>

                  <div className="input-group"><label>Degree</label>
                    <div className="effect"><input  type="text" name={fieldcodes.Degree} onChange={this.onChange} value={this.state.educationSection[fieldcodes.Degree]}/><span></span>
                    </div>
                    <div className="error"></div>
                  </div>

                  <div className="input-group"><label>CGPA</label>
                    <div className="effect"><input  type="text" name={fieldcodes.GraduationCGPA} onChange={this.onChange} value={this.state.educationSection[fieldcodes.GraduationCGPA]}/><span></span>
                    </div>
                    <div className="error"></div>
                  </div>
        
                  <div className="input-group"><label>City/State</label>
                    <div className="effect"><input type="text" name={fieldcodes.SchoolCity} onChange={this.onChange} value={this.state.educationSection[fieldcodes.SchoolCity]}/><span></span>
                    </div>
                    <div className="error"></div>
                  </div>
                
                  <div className="input-group"><label>Graduation Month</label>
                    <div className="effect"><input  type="text" name={fieldcodes.GraduationDate} onChange={this.onChange} value={this.state.educationSection[fieldcodes.GraduationDate]}/><span></span>
                    </div>
                    <div className="error"></div>
                  </div>

                  <div className="input-group"><label>Graduation Year</label>
                    <div className="effect"><input  type="text" name={fieldcodes.GraduationYear} onChange={this.onChange} value={this.state.educationSection[fieldcodes.GraduationYear]}/><span></span>
                    </div>
                    <div className="error"></div>
                  </div>      

                  <div className="form-buttons">
                    {/* <button className="btn hvr-float-shadow" type='button'>Next</button> */}
                    <NavLink to='/finalize' onClick={this.onSubmit} className="btn hvr-float-shadow center" type='button'>Next</NavLink>
                    <NavLink to='/contact' className="center">Back</NavLink>
                </div>
                </div>            
              </div>
              <div className="preview-card">      
              <ResumePreview educationSection={this.state.educationSection} contactSection={this.state.contactSection} document={this.state.document}></ResumePreview>       
              </div>      
            </div>
          </div>
            );
}
}
export default Education

