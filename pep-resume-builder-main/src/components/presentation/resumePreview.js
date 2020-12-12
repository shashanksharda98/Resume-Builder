import React from 'react';
import {fieldCodes} from '../../constants/typeCodes';
import { connect } from "react-redux";
import education from './education';


class ResumePreview extends React.PureComponent{
    constructor(props, context){
        super(props, context);
        this.state ={
          contactSection:this.props.contactSection,
          educationSection:this.props.educationSection,
          document: this.props.document
        };
     
        //this.onSubmit = this.onSubmit.bind(this);
      }
    
    
    render() {     
        
        return (
            // <div className="resume-preview">
            //     <p> Resume Preview</p>
            //     <p> {this.props.contactSection.FNAM} </p>
            //     <p> {this.props.contactSection.LNAM} </p>
            //     <p> {this.props.contactSection.PRSU} </p>
            //     <p> {this.props.contactSection.EMAI} </p>
            //     <p> {this.props.contactSection.PHON} </p>
            //     <p> {this.props.contactSection.PROF} </p>
            //     <p> {this.props.contactSection.STRT} </p>
            //     <p> {this.props.contactSection.CITY} </p>
            //     <p> {this.props.contactSection.STAT} </p>
            //     <p> {this.props.contactSection.CNTY} </p>
            //     <p> {this.props.contactSection.ZIPC} </p> 
            //     {/* <p> {this.props.educationSection.SCHO} </p>
            //     <p> {this.props.educationSection.DGRE}</p>
            //     <p> {this.props.educationSection.GRCG}</p>
            //     <p> {this.props.educationSection.SCIT} </p>
            //     <p> {this.props.educationSection.GRDT} </p> */}

            // </div>
            <div className={this.props.document.skinCd + " resume-preview "}>
                <div className={'name-section'}>
                    <p className={'center contact-name text-upper resume-name' }> {this.props.contactSection.FNAM+ ' '  + this.props.contactSection.LNAM}  </p>
                    <p className={'center address'}>{this.props.contactSection.CITY + ', ' + this.props.contactSection.STAT+', ' + this.props.contactSection.CNTY+', ' + this.props.contactSection.ZIPC+', '}</p>
                    <p className={'center'}>{this.props.contactSection.EMAI  }</p>
                    <p className={'center'}>{this.props.contactSection.PHON } </p>
                </div>

                <div className={'profSummSection text-upper'}>                   
                    <p className="heading bold center sub">PROFESSIONAL SUMMARY</p>
                     <div className={'divider'}></div>
                     <p>{this.props.contactSection.PRSU}</p>
                </div>

                <div className={'educationSection text-upper'}>                   
                    <p className="heading bold center sub">EDUCATION</p>
                     <div className={'divider'}></div>
                     <p>{this.props.educationSection.SCHO}</p>
                     <p>{this.props.educationSection.DGRE}</p>
                     <p>{this.props.educationSection.SCIT}</p>
                     <p>{this.props.educationSection.GRCG}</p>
                     <p>{this.props.educationSection.GRDT}</p>
                     <p>{this.props.educationSection.GRYR}</p>
                </div>
          
            </div>
        )
    }
}
// const mapStateToProps = (state) =>{
//     return {
//         contactSection: state.contactSection,
//         educationSection: state.educationSection,
//         document: state.document
//     }
// }
//export default connect(mapStateToProps, null)(ResumePreview)
export default ResumePreview