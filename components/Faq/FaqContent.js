import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

class FaqContent extends Component {
    render() {
        return (
            <section className="faq-area ptb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12">
                            <div className="faq-accordion">
                                <h2>Get To Know About <span>Ship Sathi</span></h2>

                                <Accordion allowZeroExpanded preExpanded={['a']}>
                                    <AccordionItem uuid="a">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            What is Shipsathi, and what does it offer to businesses in the shipping and logistics sector?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            Shipsathi is a comprehensive shipping and logistics platform designed to empower businesses. We offer end-to-end solutions, including order management, real-time tracking, and automated shipping processes, to streamline and enhance the efficiency of shipping operations.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="b">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            How does Shipsathi differ from other shipping solutions available in the market?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            Shipsathi stands out by [insert unique selling point, such as cutting-edge technology, personalized customer support, or a specific industry focus]. Our commitment is to provide a tailored and innovative approach that addresses the diverse needs of businesses in the shipping and logistics sector.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="c">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            How does Shipsathi support small and medium-sized enterprises (SMEs) in managing their shipping logistics?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            Shipsathi recognizes the importance of SMEs and offers scalable and cost-effective solutions. Our platform is designed to empower SMEs by providing them with the tools and resources needed to navigate shipping challenges seamlessly, allowing them to focus on business growth.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="d">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            How long LTL delivery takes?

                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            The time to deliver the parcel completely depends on the distance between the origin and destination. However, LTL transportation is considered as grouped shipping service. But it has fewer stops while shipping the products because the shipment is aligned in the truck for the same route. To know the exact time of delivery, use our panel. Select the origin og your shipment and designation. Our tracking system will automatically calculate the estimated time, and the details will appear on your screen.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="e">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Can I pay via an invoice?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12">
                            <div className="faq-image">
                                <img src="/images/faq-img1.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FaqContent;