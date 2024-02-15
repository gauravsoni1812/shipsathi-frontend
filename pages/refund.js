import React, { Component } from 'react';
import NavbarThree from '../components/Layouts/NavbarThree';
import PageTitleArea from '../components/Common/PageTitleArea';
import FreeTrialArea from '../components/Common/FreeTrialArea';
import Footer from '../components/Layouts/Footer';

class Refund extends Component {
    render() {
        return (
            <>
                <NavbarThree />

                <PageTitleArea
                    pageTitle="Refund & Cancellation Policy"
                />

                <div className="text-container ptb-100">
                    <div className="content-wrapper" style={{
                        padding:100
                    }}>
                        <ul className="list-style-3">
                            <li>
                                You may cancel your account at anytime by emailing{" "}
                                <a href="mailto:finance@shipsathi.in">finance@shipsathi.in</a>
                            </li>
                            <li>
                                If you cancel the Service in the middle of the month, you will receive one
                                final invoice via email. Once that invoice has been paid you will not be
                                charged again.
                            </li>
                            <li>
                                We reserve the right to modify or terminate the Bigship.in service for any
                                reason, without notice at any time.
                            </li>
                            <li>
                                Fraud: Without limiting any other remedies, Bigship.in may suspend or
                                terminate your account if we suspect that you (by conviction, settlement,
                                insurance or escrow investigation, or otherwise) have engaged in
                                fraudulent activity in connection with the Site.
                            </li>
                        </ul>
                        <p>
                            <strong>Note:</strong> No refunds are offered, even if a plan is cancelled
                            mid-month.
                        </p>
                    </div>

                </div>

                <FreeTrialArea />

                <Footer />
            </>
        );
    }
}

export default Refund;