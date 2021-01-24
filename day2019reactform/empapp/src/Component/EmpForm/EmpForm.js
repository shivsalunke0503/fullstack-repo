import React,{Component} from 'react';
import './EmpForm.css';

export default class EmpForm extends Component{
       
handleSubmit(event){
    event.preventDefault();
        var formData    =   {
                            firstName : this.refs.firstName.value,
                            middleName : this.refs.middleName.value,
                            lastName : this.refs.lastName.value,     
                            }
                console.log("formdata=",formData);
                        }





render(){
                return(
            
                <form>
                    <div className="formRow col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-lg-4">
                            <label htmlFor="firstName">First Name</label>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-user"></i>
                                </span>
                                <input type="text" name="firstName" ref="firstName" maxLength="15" className="form-control" placeholder="Max 15 Chars"/>
                                
                                    {/* <span class="errorMsg text-danger">First Name Some Error</span>  */}
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <label htmlFor="">Middle Name</label>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-user"></i>
                                </span>
                                <input type="text" name="middleName" ref="middleName" maxLength="15" className="form-control" placeholder="Max 15 Chars"/>
                                
                                    {/* <span class="errorMsg text-danger">First Name Some Error</span>  */}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <label>Last Name</label>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-user"></i>
                                </span>
                                <input type="text" name="lastName" ref="lastName" maxLength="15" className="form-control" placeholder="Max 15 Chars"/>
                                
                                    {/* <span class="errorMsg text-danger">First Name Some Error</span>  */}
                            </div>
                        </div>
                    </div>
                    <div className="formRow col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-lg-4">
                            <label htmlFor="dob">Date of Birth</label>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-calendar"></i>
                                </span>
                                <input type="date" name="dob" ref="dob" maxLength="15" className="form-control" placeholder="Max 15 Chars"/>
                                
                                    {/* <span class="errorMsg text-danger">First Name Some Error</span>  */}
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <label htmlFor="place">place</label>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-city"></i>
                                </span>
                                <input type="text" name="place" ref="place" maxLength="15" className="form-control" placeholder="Max 15 Chars"/>
                                
                                    {/* <span class="errorMsg text-danger">First Name Some Error</span>  */}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <label>Time Of Birth</label>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-user"></i>
                                </span>
                                <input type="time" name="lastName" ref="lastName" maxLength="15" className="form-control" placeholder="Max 15 Chars"/>
                                
                                    {/* <span class="errorMsg text-danger">First Name Some Error</span>  */}
                            </div>
                        </div>
                    </div>







                    <div className="formRow col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <button className="btn btn-primary formbtn pull-right col-lg-3" onClick={this.handleSubmit.bind(this)}>Submit</button>
                    </div>
                    







            


                </form>
             );
            }
}



