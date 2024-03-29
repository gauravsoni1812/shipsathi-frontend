import React, { Component } from 'react';
import NavbarThree from '../components/Layouts/NavbarThree';
import PageTitleArea from '../components/Common/PageTitleArea';
import PricingStyleOne from '../components/Pricing/PricingStyleOne';
import FaqContent from '../components/Faq/FaqContent';
import OurLovingClients from '../components/Common/OurLovingClients';
import FreeTrialAreaTwo from '../components/Common/FreeTrialAreaTwo';
import Footer from '../components/Layouts/Footer';
import ServiceLeftImageStyle from '../components/HomeIt/ServiceLeftImageStyle';

class Pricing extends Component {
    render() {
        return (
            <>
                <NavbarThree />

                <ServiceLeftImageStyle />
                
                <Footer />
            </>
        );
    }
}

export default Pricing;