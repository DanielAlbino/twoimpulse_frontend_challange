import React from 'react';
import {
    Link
  } from "react-router-dom";

  import '../../css/Header/navigation.css'
class Navigation extends React.Component{
    
    render(){
        return(
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li className="nav-link mr-4">
                        <Link className="color" to="/">Home</Link>
                    </li>
                    <li className="nav-link mx-3">
                        <Link className="color"  to="/absences">Absences</Link>
                    </li>
                    <li className="nav-link ml-4">
                        <Link className="color" to="/employee">Employee</Link>
                    </li>
                    {/* <li className="nav-link ml-4">
                        <Link className="color" to="/employee">New Employee</Link>
                    </li> */}
                </ul>
            </div>
        )
    }
}

export default Navigation;
