import React, { Component } from 'react';
import NavbarThree from '../components/Layouts/NavbarThree';
import PageTitleArea from '../components/Common/PageTitleArea';
import PricingStyleOne from '../components/Pricing/PricingStyleOne';
import FaqContent from '../components/Faq/FaqContent';
import OurLovingClients from '../components/Common/OurLovingClients';
import FreeTrialAreaTwo from '../components/Common/FreeTrialAreaTwo';
import Footer from '../components/Layouts/Footer';
import CourierPartner from '../components/Common/CourierPartner';
import NavbarTwo from '../components/Layouts/NavbarThree';
import ServiceLeftImageStyle from '../components/HomeIt/ServiceLeftImageStyle';
import Serviceablity from '../components/Common/Serviceablity';

class Pricing extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageTitleArea 
                    pageTitle="Courier Partners"  
                />

      

                {/* <OurLovingClients /> */}
                <CourierPartner />

          
                

                <Serviceablity />
                <Footer />
            </>
        );
    }
}

export default Pricing;