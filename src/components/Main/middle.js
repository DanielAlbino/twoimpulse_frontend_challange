import '../../css/Main/middle.css'
import React from 'react';
class Middle extends React.Component{
    render(){
        return (
            <div>
              <div className="container">
                  <div className="d-flex justify-content-center mt-5 pt-5 mb-3">
                      <div className="small">
                          <hr/>
                      </div>
                  </div>
                  <div className="row d-flex justify-content-center">
                      <div className=" mx-5 px-5 medium">
                          <p>Lorem ipsum dolor sit amet, consctetur adipisicing elit, sed do eiusmod 
                          tempor incididunt ut labore invetore veritadipisci velit, snumquam eius</p>
                      </div> 
                  </div>
              </div>
              <div className="container bg-line ">
                  <div className="row">
                      <div className="col-12 col-lg-7 landing change-margin">
                      </div>
                      <div className="col-12 col-lg-5 d-flex align-items-center mt-5 pt-5 ml-5">
                          <div className="ml-5 mt-5 pt-5">
                              <h1>Augmented reality</h1>
                              <div className="row">
                                  <hr className="small-hr"/><hr className="medium-hr"/>
                              </div>
                              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                              sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                              <button className="btn btn-primary btn-changes">Learn more</button>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          
        );
    }

}

export default Middle;