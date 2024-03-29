import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Features extends Component {
    render() {
        return (
            <section className="features-area pt-100 pb-70 bg-f4f6fc">
                <div className="container">
                    <div className="section-title">
                        <h2>How it works</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn="fadeInRight" delay={50} animateOnce={true}>
                                <div className="single-features-box">
                                    <div className="icon">
                                        <i className='bx bxs-badge-check'></i>
                                    </div>
                                    <h3>Create Shipment</h3>
                                    <p>Upload your orders in bulk, connect your online store, integrate our API, or just manually create a new shipment on ShipSathi.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn="fadeInRight" delay={100} animateOnce={true}>
                                <div className="single-features-box">
                                    <div className="icon">
                                        <i className='bx bx-cog'></i>
                                    </div>
                                    <h3>Flexible Functionality</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn="fadeInRight" delay={150} animateOnce={true}>
                                <div className="single-features-box">
                                    <div className="icon">
                                        <i className='bx bx-conversation'></i>
                                    </div>
                                    <h3>IT Consultancy</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn="fadeInRight" delay={200} animateOnce={true}>
                                <div className="single-features-box">
                                    <div className="icon">
                                        <i className='bx bxs-dashboard'></i>
                                    </div>
                                    <h3>Simple Dashboard</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn="fadeInRight" delay={250} animateOnce={true}>
                                <div className="single-features-box">
                                    <div className="icon">
                                        <i className='bx bxs-info-circle'></i>
                                    </div>
                                    <h3>Information Retrieval</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn="fadeInRight" delay={300} animateOnce={true}>
                                <div className="single-features-box">
                                    <div className="icon">
                                        <i className='bx bxs-bell-ring'></i>
                                    </div>
                                    <h3>Deadline Reminders</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;