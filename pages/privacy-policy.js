import React, { Component } from 'react';
import NavbarThree from '../components/Layouts/NavbarThree';
import PageTitleArea from '../components/Common/PageTitleArea';
import FreeTrialArea from '../components/Common/FreeTrialArea';
import Footer from '../components/Layouts/Footer';
import NavbarTwo from '../components/Layouts/NavbarThree';

class PrivacyPolicy extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageTitleArea
                    pageTitle="Privacy Policy"
                />

                <div className="text-container ptb-100">
                    <div className="content-wrapper" style={{
                        padding:100
                    }}>
                        <p>
                            Your privacy is important to us. This privacy statement provides information
                            about the personal information that Shipsathi collects, and the ways in which
                            Shipsathi uses that personal information. We collect, the personal basic
                            Information about you including your name, email address, Contact details
                            etc.
                        </p>
                        <ul className="list-style-3">
                            <li>Information about transactions carried out over this website.</li>
                            <li>
                                Shipsathi may use your personal information to for following purposes.
                            </li>
                            <li>Enable your access to and use of the website services</li>
                            <li>Publish information about you on the website</li>
                            <li>Supply to you services that you purchase</li>
                            <li>Send to you statements and invoices</li>
                            <li>Collect payments from you, and</li>
                            <li>Send you marketing communications.</li>
                        </ul>
                        <p>
                            Where we disclose your personal information to our agents or sub-contractors
                            for these purposes, the agent or sub-contractor in question will be
                            obligated to use that personal information in accordance with the terms of
                            this privacy statement.
                        </p>
                        <h4>Penalty for disputed shipments/cases</h4>
                        <p>
                            Shipsathi, in its sole discretion, shall have the right to levy penalty on the
                            Merchant in relation to shipments /cases which have been disputed by the
                            courier company, Merchant’s customer or by any third party (including any
                            governmental authority/department).The said penalty amount shall be decided
                            by Shipsathi in its sole discretion and may vary from case to case.{" "}
                        </p>
                        <h4>Securing your data</h4>
                        <p>
                            Securing your data is our responsibility. We will take reasonable technical
                            and organizational precautions to prevent the loss, misuse or alteration of
                            your personal information. Shipsathi will store all the personal information
                            you provide on its secure servers. Information relating to electronic
                            transactions entered into via this website will be protected by encryption
                            technology.{" "}
                        </p>
                    </div>
                </div>

                <FreeTrialArea />

                <Footer />
            </>
        );
    }
}

export default PrivacyPolicy;