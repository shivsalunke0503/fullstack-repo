import React,{Component} from 'react';
import './EmpForm.css';

export default class EmpForm extends Component{
      
    constructor(){
            super();
             this.state = {
                        err_firstName        :"",
                        err_middleName       :"",
                        err_lastName         :"",
                        };
       }
handleSubmit(event){
                        event.preventDefault();
                        var fname = this.refs.firstName.value;
                        var lname = this.refs.lastName.value;

                        var formData    =   {
                                            firstName : this.refs.firstName.value,
                                            middleName : this.refs.middleName.value,
                                            lastName : this.refs.lastName.value,     
                                            }
                                // console.log("formdata=",formData.firstName);
                                //sending data to empprofile
                                this.props.history.push("/empprofile/"+fname);
                    }


     required(event){
        // event.preventDefault();
        var value = event.currentTarget.value.trim();
        var name  = event.currentTarget.name;
        console.log("name = ",name);
        if(!value.lenth){
         this.setState({["err_"+name]:"This field is required"});   
        }
        else{
            this.setState({["err_"+name]:""});
        }
            
   }


   onlyAlpha(event){
       
    // var value = event.currentTarget.value.trim();
    // var name  = event.currentTarget.name;
        var keycode = event.which || event.keyCode;
        var value   = event.currentTarget.value;

        console.log("value=",value);
        console.log("keycode=",keycode);

        if((keycode >= 65 && keycode <= 90) ||
            (keycode === 8 || keycode === 9 || keycode === 37 || keycode === 39 || keycode === 46))
            {
                return true;
            }
            else{
                event.preventDefault();
                return false;
            }
   }


render(){
                return(
            
                <form>
                    <div className = "formRow col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        
                        <div className ="col-lg-4">
                            <label htmlFor ="firstName">First Name<span className = "asterik">*</span></label>
                            <div className ="input-group">
                                <span className ="input-group-addon">
                                    <i className ="fa fa-user"></i>
                                </span>
                                <input type="text" name="firstName" ref="firstName" 
                                        maxLength="15" 
                                    className = "form-control" 
                                        placeholder="Max 15 Chars"
                                        onBlur  =   {this.required.bind(this)}
                                        onKeyUp =   {this.onlyAlpha.bind(this)}>
                                </input>        
                            </div>
                            {
                                this.state.err_firstName
                                ?
                                <span className = "errorMsg text-danger">{this.state.err_firstName}</span>
                                :
                                null
                            }
                        </div>

                        <div className = "col-lg-4">
                            <label htmlFor = "">Middle Name<span className = "asterik">*</span></label>
                            <div className = "input-group">
                                <span className = "input-group-addon">
                                    <i className = "fa fa-user"></i>
                                </span>
                                <input type="text" name="middleName" ref="middleName" 
                                        maxLength   =   "15" 
                                        className   =   "form-control" 
                                        placeholder =   "Max 15 Chars"
                                        onBlur      =   {this.required.bind(this)}
                                        onKeyUp     =   {this.onlyAlpha.bind(this)}>
                                </input>
                            </div>
                            <span className = "errorMsg text-danger">Middle Name Some Error</span>
                        </div>
                        
                        <div className = "col-lg-4">
                            <label>Last Name<span className = "asterik">*</span></label>
                            <div className = "input-group">
                                <span className = "input-group-addon">
                                    <i className = "fa fa-user"></i>
                                </span>
                                <input type="text" name="lastName" ref="lastName" 
                                        maxLength   =   "15" 
                                        className   =   "form-control" 
                                        placeholder =   "Max 15 Chars"
                                        onBlur      =   {this.required.bind(this)}
                                        onKeyUp     =   {this.onlyAlpha.bind(this)}>
                                </input>
                            </div>
                            <span className = "errorMsg text-danger">First Name Some Error</span>
                        </div>
                    </div>
                    
                    
                    <div className = "formRow col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className = "col-lg-4">
                            <label htmlFor = "dob">Date of Birth</label>
                            <div className = "input-group">
                                <span className = "input-group-addon">
                                    <i className = "fa fa-calendar"></i>
                                </span>
                                <input type="date" name="dob" ref="dob" maxLength="15" className = "form-control" placeholder="Max 15 Chars"/>
                                
                                    {/* <span className = "errorMsg text-danger">First Name Some Error</span>  */}
                            </div>
                        </div>

                        <div className = "col-lg-4">
                            <label htmlFor = "place">place</label>
                            <div className = "input-group">
                                <span className = "input-group-addon">
                                    <i className = "fa fa-city"></i>
                                </span>
                                <input type="text" name="place" ref="place" maxLength="15" className = "form-control" placeholder="Max 15 Chars"/>
                                
                                    {/* <span className = "errorMsg text-danger">First Name Some Error</span>  */}
                            </div>
                        </div>
                        <div className = "col-lg-4">
                            <label>Time Of Birth</label>
                            <div className = "input-group">
                                <span className = "input-group-addon">
                                    <i className = "fa fa-user"></i>
                                </span>
                                <input type="time" name="lastName" ref="lastName" maxLength="15" className = "form-control" placeholder="Max 15 Chars"/>
                                
                                    {/* <span className = "errorMsg text-danger">First Name Some Error</span>  */}
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className = "formRow col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            
                            <div className = "col-lg-4">
                                        <div className = "radioElem col-lg-4">
                                            <label>Gender</label>
                                        </div>
                                        <div className = "radioElem col-lg-4">
                                                <div><label><small>Male</small></label></div>
                                                <input type="radio" name="gender"></input>
                                        </div>
                                        <div className = "radioElem col-lg-4">
                                            <div><label><small>Female</small></label></div>
                                            <input type="radio" name="gender"></input>	
                                        </div>
                            </div>
                    </div>
				            
                       
                                           
                    







                    <div className = "formRow col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <button className = "btn btn-primary formbtn pull-right col-lg-3" onClick={this.handleSubmit.bind(this)}>Submit</button>
                    </div>
                    







            


                </form>
             );
            }
}



