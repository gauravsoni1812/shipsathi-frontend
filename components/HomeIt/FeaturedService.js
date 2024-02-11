import React, { Component } from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

class FeaturedService extends Component {
    render() {
        return (
            <div className="features-card-section pt-100 pb-70 bg-f8fbfa">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                <div className="single-features-card tx-center">
                                    <i className='bx bx-conversation'></i>
                                    <h3>
                                       
                                            <a>Affordable rates</a>
                                     
                                    </h3>
                                    <p>Find the best rates for all your shipments whether you need into B2B or Cargo shipping services.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                <div className="single-features-card tx-center">
                                    <i className='bx bx-laptop'></i>
                                    <h3>
                                       
                                            <a>Multiple courier</a>
                                       
                                    </h3>
                                    <p>Enhance logistics with our carrier network. Track orders, keep customers updated in real-time.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={150} animateOnce={true}>
                                <div className="single-features-card tx-center">
                                    <i className='bx bxs-badge-check'></i>
                                    <h3>
                                            <a>No Platform Fees</a>
                                    </h3>
                                    <p>You only get easy to understand pricing with us. No hidden fees of any kind and no surprises.</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce={true}>
                                <div className="single-features-card tx-center">
                                    <i className='bx bxs-megaphone'></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Dedicated Support</a>
                                        </Link>
                                    </h3>
                                    <p>ShipSathi team is ready to assist with pickups, tracking, and carrier disputes.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeaturedService;