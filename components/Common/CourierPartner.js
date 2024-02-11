import React, { Component } from 'react';
import Link from 'next/link';

class CourierPartner extends Component {
    render() {
        return (
            <>
            <section className="our-loving-clients ptb-100 bg-f4f5fe">
                

                <div className="container">
                    <div className="section-title">
                        <h2> Partners</h2>
                    </div>

                    <div className="clients-logo-list align-items-center">
                        <div className="single-clients-logo">
                            <a href="#" target="_blank">
                                <img src="/images/courier-partners/delhivery.png" alt="image" style={{
                                    height:100
                                }}/>
                            </a>
                        </div>

                        <div className="single-clients-logo">
                            <a href="#" target="_blank">
                            <img src="/images/courier-partners/ekart.png" alt="image" style={{
                                    height:100
                                }}/>
                            </a>
                        </div>

                        <div className="single-clients-logo">
                        <a href="#" target="_blank">
                            <img src="/images/courier-partners/gati.png" alt="image" style={{
                                    height:100
                                }}/>
                            </a>
                        </div>

                        <div className="single-clients-logo">
                        <a href="#" target="_blank">
                            <img src="/images/courier-partners/parcel.jpg" alt="image" style={{
                                    height:100
                                }}/>
                            </a>
                        </div>

                        <div className="single-clients-logo">
                        <a href="#" target="_blank">
                            <img src="/images/courier-partners/movin.png" alt="image" style={{
                                    height:100
                                }}/>
                            </a>
                        </div>

                        
                    
                    </div>
                </div>
            </section>
            
            </>
        );
    }
}

export default CourierPartner;