import React    from 'react';
import {Link}   from 'react-router-dom';
import './SideBar.css';
function SideBar(){
    return(
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 sidebar">
            <div className="row">
                <ul className="leftmenu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/employeeform">Employee Form</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default SideBar;