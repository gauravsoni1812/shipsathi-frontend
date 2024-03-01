import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class FeaturesContent extends Component {
    render() {
        return (
            <section className="features-area pt-100 pb-70 bg-f4f6fc">
                <div className="container">
                    <div className="section-title">
                        <h2>how it works?</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>
                                <div className="features-box-one">
                                    <i className='bx bx-conversation bg-13c4a1'></i>
                                    <h3>Create Shipment</h3>
                                    <p>Upload your orders in bulk, connect your online store, integrate our API, or just manually create new shipment</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-3 col-md-3">
                            <ScrollAnimation animateIn="fadeInLeft" delay={100} animateOnce={true}>
                                <div className="features-box-one">
                                    <i className='bx bxs-badge-check bg-6610f2'></i>
                                    <h3>Choose partner</h3>
                                    <p>Shipsathi suggests carriers based on your order, weight, and budget. You can follow our recommendation </p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-3 col-md-3">
                            <ScrollAnimation animateIn="fadeInLeft" delay={150} animateOnce={true}>
                                <div className="features-box-one">
                                    <i className='bx bxs-dashboard bg-ffb700'></i>
                                    <h3>Prepare Shipment</h3>
                                    <p>Download and print out the shipment label and wait for the pickup. You can also manage invoices, Proof of Delivery (POD)</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-3 col-md-3">
                            <ScrollAnimation animateIn="fadeInLeft" delay={200} animateOnce={true}>
                                <div className="features-box-one">
                                    <i className='bx bxs-bell-ring bg-fc3549'></i>
                                    <h3>Analyse</h3>
                                    <p>Track orders, notify customers, and analyze your shipping data in the most effective way possible.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                     
                    </div>
                </div>
            </section>
        );
    }
}

export default FeaturesContent;