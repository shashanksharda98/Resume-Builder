import React from 'react';
import logo from "../../static/images/resume.png";
import { NavLink } from "react-router-dom";
const Login = () => {
    return (    
    
        // <div className="  header-no-padding-no-extra login-page">          
        // <div className="section">
        //  <h1 className="App-title">Login Page</h1>
           
        //  </div>        
        //  </div>
        <div className="container med contact">
            <div className="section funnel-section">
                <div className="form-card">
                    <h2 className="form-heading center">Enter Login details</h2>
                    <div className="form-section">
                        <div className="input-group full"><label>Email</label>
                            <div className="effect"><input type="text" name="email"   /><span></span>
                            </div>
                        </div>

                        <div className="input-group full"><label>Password</label>
                            <div className="effect"><input  type="password" name="password"  /><span></span>
                            </div>
                        </div>

                        <div className="input-group full">
                                <span className="error-message" ></span> 
                        </div>
                        
                        <div className="form-buttons">
                            <button  className="btn hvr-float-shadow" type='button'>Login</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    
        );
}
 
export default Login;