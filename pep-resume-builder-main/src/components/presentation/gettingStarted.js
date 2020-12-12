import React from 'react';
import {skinCodes} from '../../constants/typeCodes';
import {NavLink} from 'react-router-dom';
import { connect } from "react-redux";
import * as actionTypeCd from "../../actions/actionTypes";
import { bindActionCreators } from 'redux';
import * as  documentActions from '../../actions/documentActions'


class GettingStarted extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            document: this.props.document
        }
    }
    // componentWillReceiveProps(nextProp){
    //     this.setState({skinCd: nextProp.document.skinCd})
    // }
    onChange = (skinCd) => {
        if(this.state.document.skinCd)this.props.actions.updateSkinCd(skinCd);
        else this.props.actions.setSkin(skinCd);
       // console.log(this.props);
        //this.props.history.push('/contact');
    }
    render(){
        return (    
            <div className="container med gettingStarted">
                <div className="section">
                    <h1 className=" center">
                    Select a resume template to get started</h1>
                    <p className=" center">
                    You’ll be able to edit and change this template later!
                    </p>
                    <div className="styleTemplate ">
                    {
                        skinCodes.map((value) => {
                            return( <div className={(value== this.state.skinCd? "selected ":"" )+ "template-card rounded-border"} >
                                  <i className="hide" ></i>
                                <img  className='' src={'/images/' + value + '.svg'}/>                                
                                {/* <button type="button" onClick={()=>this.onChange(value)} className="btn-select-theme">Use template</button> */}
                                <NavLink to="./contact" type="button" onClick={()=>this.onChange(value)} className="btn-select-theme">Use template
                                </NavLink>
                            </div>);
    
                        })
                    }
                    </div>
                
                </div>
            </div>
            );

    }
}

export default GettingStarted;

