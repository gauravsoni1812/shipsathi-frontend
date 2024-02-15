import React, { Component } from 'react';
import NavbarThree from '../components/Layouts/NavbarThree';
import PageTitleArea from '../components/Common/PageTitleArea';
import FreeTrialArea from '../components/Common/FreeTrialArea';
import Footer from '../components/Layouts/Footer';

class PrivacyPolicy extends Component {
    render() {
        return (
            <>
                <NavbarThree />

                <PageTitleArea
                    pageTitle="Disclaimer"
                />

                <div className="text-container ptb-100">
                    <div className="content-wrapper" style={{
                        padding: 100
                    }}>
                        <p>
                            Shipsathi have taken all reasonable steps to ensure the accuracy of the information on this website. Notwithstanding we can give no warranty regarding the accuracy or completeness of the content of this site. Subsequently, we accept no liability for any losses or damages (whether direct, indirect, special, consequential or otherwise) arising out of errors or omissions contained on this website.

                            This website contains links to other sites which are hosted and maintained by third parties. Shipsathi make no representation as to the accuracy, completeness or relevance of the information contained on such third-party sites. You follow links to such sites at your own risk, and we will not be liable for any loss or damage arising from your reliance upon or use of third-party websites. In spite of the fact that our preferred local suppliers have privacy policies by the new privacy laws, you accept that some third parties may not have in place equivalent privacy policies. When you click on links to other websites, we encourage you to read their privacy policies. Their standards may differ from ours.

                            The information you receive online from this site is protected by the copyright laws of india. The copyright laws prohibit any copying, redistributing, retransmitting, or repurposing of any copyright-protected material.
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