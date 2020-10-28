import React from 'react';
import Brand from '../Header/logo'
import Navigation from '../Header/navigation'

import '../../css/Header/navbar.css'

class Navbar extends React.Component{
    
    render(){
        return (
            <div className="container">
                    <nav className="navbar navbar-expand-lg pt-3">
                        <Brand/>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                        
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <Navigation/>
                            </div>
                    </nav>
            </div>
           
        );
    }
}

export default Navbar;
