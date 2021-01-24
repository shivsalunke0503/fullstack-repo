import React, {Component} from 'react';
import './Empform.css';
export default class Empform extends Component{
constructor(){
            super();
            this.state = {
                formVariables : {
                    firstName   : "shankar",
                    lastName    : "salunke",
                    dob         : "05/03/95",
                    mobile      : "9527938556",
                    email       : "shivsalunke.s@gmail.com",
                    gender      : "Male",
                },
            };
        }
handleSubmit(event){
        event.preventDefault();
        // var firstName = this.refs.firstName.value;
            var formVariables = {
                        firstName   : this.refs.firstName.value,
                        lastName    : this.refs.lastName.value,
                        dob         : this.refs.dob.value,
                        mobile      : this.refs.mobile.value,
                        email       : this.refs.email.value,
                        gender      : this.refs.gender.value,
                    };

                    this.setState({
                        formVariables : formVariables,
                    },function(){console.log("formobject callbackfunction=",formVariables);
                        
                    });
                   
                //    console.log("formobject=",formVariables);
}   

    Add(){
        let a=10;
        let b=20;
        var res=a+b;
        alert(res);
    }
    function2(){

    }
    render(){
    return(
        <div>
            <section>
                    <form className = "myform">
                    <h1>Employee Form</h1> 
                    <hr/> 
                    
                    <div className="field">
                        <label htmlFor="firstName">First Name</label>
                        <div><input type="text" name="firstName" ref="firstName"></input></div> 
                    </div>
                    
                    <div className="field">
                        <label htmlFor="lastName">Last Name</label>
                        <div><input type="text" name="lastName" ref="lastName"></input></div> 
                    </div>
                    
                    <div className="field">
                        <label htmlFor="dob">DOB</label>
                        <div><input type="date" name="dob" ref="dob"></input></div> 
                    </div>

                    <div className="field">
                        <label htmlFor="mobile">Mobile</label>
                        <div><input type="text" name="mobile" ref="mobile"></input></div> 
                    </div>

                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <div><input type="text" name="email" ref="email"></input></div> 
                    </div>
                    
                    <div className="field2">
                        <label>Gender</label>
                        <div>
                            <input type="radio" name="gender" ref="gender" value="Male"></input><span style={{fontSize: 20 + 'px'}}>Male</span>
                            <input type="radio" name="gender" ref="gender" value="Female"></input><span style={{fontSize: 20 + 'px'}}>FeMale</span>
                        </div>
                    </div>
                
                    <div className="field">
                        <button  onClick={this.handleSubmit.bind(this)}>Submit</button>
                    </div>
                    {/* <button  onClick={function() { alert('hi shiv'); }}>Submit</button> */}
                    {/* <button  onClick={this.Add()}>Add</button> */}
                    </form> 
            </section>

            <section className="tablesection">
               
                <div className = "tablediv">
                <h1>Employee List</h1>
               <hr/>
                    <table className = "emptable">

                        <thead>
                            <tr>
                                <th>Employee Name</th>
                                <th>DOB</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Gender</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>{this.state.formVariables.firstName +''+this.state.formVariables.lastName}</td>
                                <td>{this.state.formVariables.dob}</td>
                                <td>{this.state.formVariables.mobile}</td>
                                <td>{this.state.formVariables.email}</td>
                                <td>{this.state.formVariables.gender}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </section>

        </div>  
        );
    }
}