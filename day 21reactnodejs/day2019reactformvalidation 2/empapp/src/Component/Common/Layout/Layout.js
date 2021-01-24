import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// import 
import './Layout.css';
import Header         from '../Header/Header.js';
import Footer         from '../Footer/Footer.js';
import SideBar        from '../SideBar/SideBar.js';
import Home           from '../../Home/Home.js';
import PageNotFound   from '../PageNotFound/PageNotFound.js';
import EmpForm        from '../../EmpForm/EmpForm.js';
import EmpProfile     from '../../EmpProfile/EmpProfile.js';

export default class Layout extends Component{
render(){
    return(
    <Router>

    <div className="row">
        <Header/>

              <div className="col-lg-2 col-md-2 col-sm-2 xs-hidden">
                <div className="row">
                  <SideBar className="col-lg-2 col-md-2 col-sm-2 xs-hidden"/>
                </div>
                    
              </div>
        
              <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 page">
                <div className="row">
                  <Switch>
                  <Route exact path = "/"                   component={Home}/>
                  <Route exact path = "/employeeform"       component={EmpForm}/>
                  {/* <Route exact path="/empprofile"           component={EmpProfile}/> */}
                  <Route exact path="/empprofile/:fname"     component={EmpProfile}/>
                  <Route component = {PageNotFound}/>
                </Switch>
              
              
                </div>
              </div>
        
        <Footer/>
            </div>
</Router>
);
}
} 