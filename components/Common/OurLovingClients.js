import React, { Component } from 'react';
import Link from 'next/link';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "/images/clients/abiba.jpg" },
    { url: "/images/clients/deevaz.jpg" },
    { url: "/images/clients/pride.jpg" },
    { url: "/images/clients/puneet.svg" },
];

const imagecontent = [
    { url: "/images/courier-partners/delhivery.png" },
    { url: "/images/courier-partners/ekart.png" },
    { url: "/images/courier-partners/parcel.jpg" },
    { url: "/images/courier-partners/movin.png" },
];

class OurLovingClients extends Component {
 
    constructor(props) {
        super(props);

        this.state = {
            mobile: false,
        };
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            // Your window-dependent code here, if needed
            // For example: console.log(window.innerWidth);

            const mobile = window.matchMedia("(max-width:400px)").matches;
            console.log(mobile);
            this.setState({ mobile });
        }
    }

    render() {
        const { mobile } = this.state;

        return (
            <>
                <section className="our-
            -clients ptb-100 bg-f4f5fe">
                {!mobile ? <div className="container">
                        <div className="section-title">
                            <h2>Our Loving Clients</h2>
                        </div>

                        <div className="clients-logo-list align-items-center">
                            <div className="single-clients-logo">
                                <a href="#" target="_blank">
                                    <img src="/images/clients/abiba.jpg" alt="image" style={{
                                        height: 100
                                    }} />
                                </a>
                            </div>

                            <div className="single-clients-logo">
                                <a href="#" target="_blank">
                                    <img src="/images/clients/deevaz.jpg" alt="image" style={{
                                        height: 100
                                    }} />
                                </a>
                            </div>

                            <div className="single-clients-logo">
                                <a href="#" target="_blank">
                                    <img src="/images/clients/puneet.svg" alt="image" style={{
                                        height: 100
                                    }} />
                                </a>
                            </div>

                            <div className="single-clients-logo">
                                <a href="#" target="_blank">
                                    <img src="/images/clients/pride.jpg" alt="image" style={{
                                        height: 100
                                    }} />
                                </a>
                            </div>

                            <div className="single-clients-logo">
                                <a href="#" target="_blank">
                                    <img src="/images/clients/puneet.svg" alt="image" style={{
                                        height: 100
                                    }} />
                                </a>
                            </div>

                        </div>
                    </div>:  <div className='containterm' style={{
                        marginTop:"5vw",
                        width:"100vw",
                        display:"flex",
                        justifyContent:"center",
                    }}>
                        
                        <SimpleImageSlider
                            autoPlay={true}
                            width={350}
                            height={175}
                            images={images}
                            showBullets={true}
                            showNavs={true}
                            navSize={0}
                            slideDuration={1}
                        />
                    </div> }
                  
                  

                </section>

                <section className="our-loving-clients ptb-100 bg-f4f5fe">

                {!mobile ?<div className="container">
                        <div className="section-title">
                            <h2> Partners</h2>
                        </div>

                        <div className="clients-logo-list align-items-center">
                            <div className="single-clients-logo">
                                <a href="#" target="_blank">
                                    <img src="/images/courier-partners/delhivery.png" alt="image" style={{
                                        height: 100
                                    }} />
                                </a>
                            </div>

                            <div className="single-clients-logo">
                                <a href="#" target="_blank">
                                    <img src="/images/courier-partners/ekart.png" alt="image" style={{
                                        height: 100
                                    }} />
                                </a>
                            </div>

                            <div className="single-clients-logo">
                                <a href="#" target="_blank">
                                    <img src="/images/courier-partners/gati.png" alt="image" style={{
                                        height: 100
                                    }} />
                                </a>
                            </div>

                            <div className="single-clients-logo">
                                <a href="#" target="_blank">
                                    <img src="/images/courier-partners/parcel.jpg" alt="image" style={{
                                        height: 100
                                    }} />
                                </a>
                            </div>

                            <div className="single-clients-logo">
                                <a href="#" target="_blank">
                                    <img src="/images/courier-partners/movin.png" alt="image" style={{
                                        height: 100
                                    }} />
                                </a>
                            </div>
                        </div>
                    </div>:    <div className='containterm' style={{
                        marginTop:"5vw",
                        width:"100vw",
                        display:"flex",
                        justifyContent:"center",
                    }}>
                        
                        <SimpleImageSlider
                            autoPlay={true}
                            width={350}
                            height={175}
                            images={imagecontent}
                            showBullets={true}
                            showNavs={true}
                            slideDuration={1}
                            navSize={0}
                        />
                    </div> }
                    
        
                


                </section>

 
            </>
        );
    }
}

export default OurLovingClients;