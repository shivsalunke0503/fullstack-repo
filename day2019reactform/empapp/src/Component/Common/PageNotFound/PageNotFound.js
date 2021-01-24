import React from 'react';

import Header       from '../Header/Header.js';
import Footer       from '../Footer/Footer.js';
import SideBar      from '../SideBar/SideBar.js';
import './PageNotFound.css'

function PageNotFound(){
    return(
    <section className="container-fluid">
        <div className="row">
            <Header/>
        
                    <div className="col-lg-2 col-md-2 col-sm-2 xs-hidden">
                      <div className="row">
                        <SideBar className="col-lg-2 col-md-2 col-sm-2 xs-hidden"/>
                      </div>
                          
                    </div>
              
                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                      <div className="row">
                        <img src="pagenotfound.jpg" class="image"></img>
                      </div>
                    </div>
              
            <Footer/>
        
              
        </div>
    </section>
        
        
           
    );
}
export default PageNotFound;