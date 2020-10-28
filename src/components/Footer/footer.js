import React from 'react';
import '../../css/Footer/footer.css'
import brand from '../../img/png/logo.png'
class Footer extends React.Component{
    
    render(){
        return(
            <div className="footer d-flex justify-content-center">
                <div className="waves">
                    <div className="circles">
                        <div className="container  align-self-center pt-5">
                            <div className="row mt-5 pt-3">
                                <div className="col-12 col-lg-5 mt-5 pt-5">
                                    <img src={brand} alt="brand"/>
                                    <div className="col-9 mt-4">
                                        <p>Me old mucker Harry don't get shirty with me he nicked
                                        it up the kyver gutted mate spend a penny, bloke my good sir in my flat bleeding quaint!</p>
                                    </div>
                                     <div className="row">
                                     <i class="fab fa-facebook-f fa-2x mx-4"></i>
                                     <i class="fab fa-twitter fa-2x mx-4"></i>
                                     <i class="fab fa-dribbble fa-2x mx-4"></i>
                                     <i class="fab fa-linkedin-in fa-2x mx-4"></i>
                                     </div>
                                </div>
                                <div className="col-12 col-lg-2 mt-5 pt-5 mr-5">
                                    <h2 className="mb-5">Company</h2>
                                    <ul>
                                        <li className="my-2">Home</li>
                                        <li className="my-2">Features</li>
                                        <li className="my-2">Screenshots</li>
                                        <li className="my-2">Pricing</li>
                                        <li className="my-2">Team</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-lg-2 ml-4 mr-3 mt-5 pt-5">
                                    <h2 className="mb-5">Help</h2>
                                    <ul>
                                        <li className="my-2">Help Center</li>
                                        <li className="my-2">FAQ's</li>
                                        <li className="my-2">Terms & Conditions</li>
                                        <li className="my-2">Privacy</li>
                                        <li className="my-2">Contacts</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-lg-2 mt-5 pt-5">
                                     <h2 className="mb-5">Solutions</h2>
                                     <ul>
                                        <li className="my-2">Consumer</li>
                                        <li className="my-2">Saas</li>
                                        <li className="my-2">Education</li>
                                        <li className="my-2">Gaming</li>
                                        <li className="my-2">Financial Services</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <hr/>
                            </div>
                            <div className="d-flex justify-content-center my-5">
                                <p><i class="far fa-copyright"></i> indianpix | All rights reserved 2019</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        )
    }
}

export default Footer;
