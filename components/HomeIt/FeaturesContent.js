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
                        <div className="col-lg-4 col-md-6">
                            <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>
                                <div className="features-box-one">
                                    <i className='bx bx-conversation bg-13c4a1'></i>
                                    <h3>Create Shipment</h3>
                                    <p>Upload your orders in bulk, connect your online store, integrate our API, or just manually create a new shipment on Rocketbox.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ScrollAnimation animateIn="fadeInLeft" delay={100} animateOnce={true}>
                                <div className="features-box-one">
                                    <i className='bx bxs-badge-check bg-6610f2'></i>
                                    <h3>Choose a carrier partner</h3>
                                    <p>Shipsathi recommends carrier partners based on your order details, shipment weight, and budget. You can either go with our recommendation or choose your preferred logistics partner based on their rates, SLA performance and user ratings.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ScrollAnimation animateIn="fadeInLeft" delay={150} animateOnce={true}>
                                <div className="features-box-one">
                                    <i className='bx bxs-dashboard bg-ffb700'></i>
                                    <h3>Prepare Shipment</h3>
                                    <p>Download and print out the shipment label and wait for the pickup. You can also manage invoices, Proof of Delivery (POD), and Non-delivery report (NDR) with Rocketbox.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ScrollAnimation animateIn="fadeInLeft" delay={200} animateOnce={true}>
                                <div className="features-box-one">
                                    <i className='bx bxs-bell-ring bg-fc3549'></i>
                                    <h3>Analyse</h3>
                                    <p>Track orders, notify customers, and analyze your shipping data in the most effective way possible to optimize your delivery KPIs.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ScrollAnimation animateIn="fadeInLeft" delay={250} animateOnce={true}>
                                <div className="features-box-one">
                                    <i className='bx bxs-info-circle bg-00d280'></i>
                                    <h3>Information Retrieval</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ScrollAnimation animateIn="fadeInLeft" delay={300} animateOnce={true}>
                                <div className="features-box-one">
                                    <i className='bx bx-cog bg-ff612f'></i>
                                    <h3>Flexible Functionality</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna.</p>
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