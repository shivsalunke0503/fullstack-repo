import React,{Component} from 'react';
// import 
import './Layout.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SideBar from '../SideBar/SideBar.js';
import EmpForm from '../../EmpForm/EmpForm.js';

export default class Layout extends Component{
render(){
    return(
<section className="container-fluid">
<div className="row">
        <Header/>

            <div className="col-lg-2 col-md-2 col-sm-2 xs-hidden">
              <div className="row">
                <SideBar className="col-lg-2 col-md-2 col-sm-2 xs-hidden"/>
              </div>
                  
            </div>
      
            <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 page">
              <div className="row">
                <EmpForm/>
              </div>
            </div>
      
      <Footer/>

      
    </div>
</section>




    );
}
} 