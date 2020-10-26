import React from 'react';
import '../../css/Header/head.css'
class Head extends React.Component{
    
    render(){
        return(
            <div className="bg top">
            <div className="head-text d-flex justify-content-center">
                <h1>Make Your Team <br/> the best it can be</h1>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary">Enter</button>
            </div>
            
            </div>
        )
    }
}

export default Head;
