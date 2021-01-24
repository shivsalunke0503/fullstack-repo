import React from 'react';
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';
// import logo from './logo.svg';

import $ from 'jquery';
// import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

import EmpForm        from './Component/EmpForm/EmpForm.js';
import Layout         from './Component/Common/Layout/Layout.js';
import PageNotFound   from './Component/Common/PageNotFound/PageNotFound.js';
import Home           from './Component/Home/Home.js'

import './App.css';

function App() {
          return (

          <section className="container-fluid App">
          <div className="row">
            <Router>
              <Switch>
                <Route exact path="/" component = {Home}/>
                <Route exact path="/employeeform" component = {Layout}/>
                {/* <Route exact path="" Component = {Home}/> */}
                <Route component = {PageNotFound}/>
              </Switch>
            </Router>
            
            
            
            
            
            {/* <div className="row">
                <Header/>

                    <div className="col-lg-2 col-md-2 col-sm-2 xs-hidden">
                      <div className="row">
                        <SideBar className="col-lg-2 col-md-2 col-sm-2 xs-hidden"/>
                      </div>
                          
                    </div>
              
                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                      <div className="row">
                        <EmpForm/>
                      </div>
                    </div>
              
              <Footer/>

              
            </div> */}
            </div>
          </section>
        );
}

export default App;
