import React from "react";
import { NavLink } from "react-router-dom";
import {fieldcodes} from '../../constants/typeCodes';
import ResumePreview from './resumePreview';


 class Contact extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state ={
      contactSection: this.props.contactSection,
      educationSection: this.props.educationSection,
      document: this.props.document
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // onSubmit(event){
  //   console.log(this.state);
  // }
  componentWillReceiveProps(nextProp){
    this.setState({contactSection: nextProp.contactSection});
  }
  onSubmit(){
    this.props.actions.addContact(this.state.contactSection);
  }


  onChange(event){

    //this.setState({[event.target.name]: event.target.value});
    this.setState({...this.state, contactSection: {...this.state.contactSection,  [event.target.name]: event.target.value  } })
    //console.log(this.state);
    //this.props.addContact(this.state.contactSection);
  }


render()  {
        return (    
            <div className="container med contact">
            <div className="section funnel-section">
              <div className="form-card">        
                <h2 className="form-heading center">Personal Details</h2>
                <div className="form-section">
                  <div className="input-group"><label>First Name</label>
                    <div className="effect"><input  type="text" name={fieldcodes.FirstName} onChange={this.onChange}  value={this.state.contactSection[fieldcodes.FirstName]}/><span></span>
                    </div>
                    <div className="error"></div>
                  </div>
        
                  <div className="input-group"><label>Last Name</label>
                    <div className="effect"><input type="text" name={fieldcodes.LastName}  onChange={this.onChange} value={this.state.contactSection[fieldcodes.LastName]}/><span></span>
                    </div>
                    <div className="error"></div>
                  </div>

                  <div className="input-group full"><label>Professional Summary</label>
                    <div className="effect"><input type="text" name={fieldcodes.ProfSummary}  onChange={this.onChange} value={this.state.contactSection[fieldcodes.ProfSummary]}/><span></span>
                    </div>
                    <div className="error"></div>
                  </div>
                
                  <div className="input-group"><label>Email</label>
                    <div className="effect"><input  type="text" name={fieldcodes.Email} onChange={this.onChange} value={this.state.contactSection[fieldcodes.Email]}/><span></span>
                    </div>
                    <div className="error"></div>
                  </div>

                  <div className="input-group"><label>Phone</label>
                    <div className="effect"><input  type="text" name={fieldcodes.Phone} onChange={this.onChange} value={this.state.contactSection[fieldcodes.Phone]}/><span></span>
                    </div>
                    <div className="error"></div>
                  </div>
        
                  <div className="input-group"><label>Profession</label>
                    <div className="effect"><input type="text" name={fieldcodes.Profession} onChange={this.onChange} value={this.state.contactSection[fieldcodes.Profession]}/><span></span>
                    </div>
                    <div className="error"></div>
                  </div>
                  <div className="input-group"><label>Street</label>
                    <div className="effect"><input  type="text" name={fieldcodes.Street} onChange={this.onChange} value={this.state.contactSection[fieldcodes.Street]}/><span></span>
                    </div>
                    <div className="error"></div>
                  </div>

                  <div className="input-group"><label>City</label>
                    <div className="effect"><input  type="text" name={fieldcodes.City} onChange={this.onChange} value={this.state.contactSection[fieldcodes.City]}/><span></span>
                    </div>
                    <div className="error"></div>
                  </div>
        
                  <div className="input-group"><label>State</label>
                    <div className="effect"><input type="text" name={fieldcodes.State}  onChange={this.onChange} value={this.state.contactSection[fieldcodes.State]}/><span></span>
                    </div>
                    <div className="error"></div>
                  </div>

                
                  <div className="input-group"><label>Country</label>
                    <div className="effect"><input type="text" name={fieldcodes.Country}  onChange={this.onChange} value={this.state.contactSection[fieldcodes.Country]}/><span></span>
                    </div>
                    <div className="error"></div>
                  </div>
                  <div className="input-group"><label>Pin Code</label>
                    <div className="effect"><input type="text" name={fieldcodes.ZipCode}  onChange={this.onChange} value={this.state.contactSection[fieldcodes.ZipCode]}/><span></span>
                    </div>
                    <div className="error"></div>
                  </div>


                  <div className="form-buttons">
                  {/* <button className="btn hvr-float-shadow"  type='button' onClick={this.onSubmit}>Next</button> */}
                    <NavLink to='/education' onClick={this.onSubmit} className="btn hvr-float-shadow center" type='button'>Next</NavLink>
                    <NavLink to='/getting-started' className="center">Back</NavLink>
                </div>

                </div>
            
              </div>
        
              <div className="preview-card">   
              <ResumePreview contactSection={this.state.contactSection} educationSection={this.state.educationSection} document={this.state.document}></ResumePreview>     
              </div>         
             
            </div>
          </div>
            );
        }
}
export default Contact;
