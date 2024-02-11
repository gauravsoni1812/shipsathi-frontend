import React, { Component } from 'react';
import NavbarThree from '../components/Layouts/NavbarThree';
import PageTitleArea from '../components/Common/PageTitleArea';
import FreeTrialArea from '../components/Common/FreeTrialArea';
import Footer from '../components/Layouts/Footer';

class Community extends Component {
    render() {
        return (
            <>
                <NavbarThree />

                <PageTitleArea
                    pageTitle="Ship Sathi's SOP's"
                />

                <div className="text-container ptb-100">
                    <div className="content-wrapper" style={{
                        padding:"100px"
                    }}>
                        <p>
                            KYC (Know Your Customer) is an important process for all financial
                            transactions, including in logistics and courier aggregation. Logistic
                            companies require their customers to be KYC compliant to verify identity and
                            ensure the safety and legality of products and their seller. There are two
                            types of KYC commonly required by courier aggregator companies- COD KYC and
                            Prepaid KYC.{" "}
                        </p>
                        <p>
                            COD KYC stands for Cash on Delivery KYC; Prepaid KYC stands for KYC for
                            prepaid ord¬ers. Compulsory documents required for COD KYC-
                        </p>
                        <ul className="list-style-3">
                            <li>Aadhaar</li>
                            <li>PAN</li>
                            <li>
                                Cancelled cheque / Passbook photo of the same beneficiary sharing
                                documents. On the other hand, Prepaid KYC requires PAN and any
                                government-authorized identity proof. Uploading GST certificate is
                                optional for Prepaid and COD KYC.{" "}
                            </li>
                        </ul>
                        <p>
                            After Uploading the Documents kindly inform your Sales POC (Point of
                            contact), so further KYC can be approved.
                        </p>
                        <p>
                            The benefits of doing KYC with courier aggregator companies are numerous.
                            First, it ensures the security and authenticity of transactions, which
                            prevents any fraud. KYC also helps in faster and hassle-free transactions,
                            as the verification process is already completed. In logistics it also helps
                            in building trust between the company and its customers, creating long-term
                            business relationships.{" "}
                        </p>
                        <p className="text-danger">
                            <b>NOTE:</b>{" "}
                            <em>
                                COD Remittance will not be processed in case of incomplete or mismatch in
                                KYC details.
                            </em>
                        </p>
                        <p>
                            KYC approval and rejection depends on the uploaded documents. Anytime if a
                            seller wants to change his Business from Prepaid order to COD order, the
                            required documents can be shared beforehand at-{" "}
                            <a href="mailto:finance@bigship.in">finance@bigship.in</a> and the approval
                            process can begin again.{" "}
                        </p>
                        <p>
                            In case of bank details update seller is required to share the KYC Documents
                            of the new beneficiary. COD Remittance will be on hold if the required
                            documents are not shared.
                        </p>
                        <p>
                            Completing the KYC process can sometimes be difficult for customers.
                            However, they can always contact the Sales PoC (Point of Contact) for
                            assistance. The sales POC can guide them through the process and help them
                            complete their KYC successfully. Or seller can mail at-{" "}
                            <a href="mailto:client.service@bigship.in">client.service@bigship.in</a>{" "}
                        </p>
                        <h4>COD Remittance</h4>
                        <ul className="list-style-3">
                            <li>
                                COD Remittance is the payment which is collected as COD from the
                                consignee.
                            </li>
                            <li>The payment is processed directly to the seller’s bank account.</li>
                        </ul>
                        <h4>The COD Payment Cycle is mentioned below: -</h4>
                        <ul className="list-style-3">
                            <li>
                                Payment is processed after 7 Days from the DOD (Date of Delivery) on first
                                Tuesday and Friday.
                            </li>
                            <li>
                                COD Remittance for heavy shipments (LTL) is only processed on first Friday
                                after completion of Delivery + 7 days.
                            </li>
                            <li>
                                COD Remittance processed on Tuesdays is for all the B2C shipments
                                delivered till last Monday.
                            </li>
                            <li>
                                COD Remittance processed on Fridays is for all the B2C &amp; B2B shipments
                                delivered till last Thursday.
                            </li>
                            <li>
                                If seller wants to get his remittance held due to any reason; he should
                                inform the finance department priory by mailing at finance@bigship.in
                            </li>
                            <li>
                                Seller is required to fill correct bank details in the system; Bigship
                                will not be liable for any wrong payments processed due to incorrect bank
                                details mentioned by the sellers.
                            </li>
                            <li>
                                In case payment is bounced by the bank due to any reason the same will
                                processed once the correct bank details are updated.
                            </li>
                        </ul>
                        <h4>COD Remittance hold</h4>
                        <ul className="list-style-3">
                            <li>COD Remittance can be held in case of negative wallet</li>
                            <li>
                                COD Remittance will be held in case of Incomplete KYC or if the uploaded
                                documents are not readable format.
                            </li>
                            <li>
                                COD Remittance can be held if any fraudulent activity is detected against
                                the seller.{" "}
                            </li>
                        </ul>
                        <h4>Sop Early Cod Remittance</h4>
                        <ul className="list-style-3">
                            <li>Sellers need to apply for Early COD plan via panel only.</li>
                            <li>
                                Once we receive the request our executive will call you within 24-48hrs of
                                the application for details.
                            </li>
                            <li>
                                Once the details are filled the application will be reviewed and it may be
                                approved or rejected by our finance team.
                            </li>
                            <li>
                                Sellers will be informed via mail once the plan is Approved or
                                Disapproved.
                            </li>
                            <li>
                                Sellers can also update their plans by applying from panel; it may take
                                24-48hrs to update your new plan till then COD Remittance will be
                                processed as per the previous plan.
                            </li>
                            <li>
                                Seller will start receiving Early COD after 24-48hrs of activation of the
                                plan.
                            </li>
                            <li>
                                Seller can request for deactivation of the Early Cod plan via mail on
                                finance@bigship.in the plan will be deactivated within 24-48hrs of
                                request; mean while the shipments delivered in that duration will be
                                charged in early cod.
                            </li>
                        </ul>
                        <h4>Big Ship’s First Mile SOP’s</h4>
                        <ul className="list-style-3">
                            <li>
                                For pickup we can only raise the escalation to the courier company only
                                after 24 hours if the pickup is not done.
                            </li>
                            <li>
                                Pickup request will be cancelled after 3 days if the shipment is not
                                picked up.
                            </li>
                            <li>
                                Raise any escalation for pickup to CS team after 24 hours if the shipment
                                is not picked up.
                            </li>
                            <li>
                                Please share the complete documents at the time of pickup for (e.g.
                                Ewaybill/ Invoice)
                            </li>
                        </ul>
                        <h4>E-WayBill</h4>
                        <p>
                            E-Way Bill is an Electronic Way bill for movement of goods to be generated
                            on the e-Way Bill Portal. A GST registered person cannot transport goods in
                            a vehicle whose value exceeds Rs. 50,000 (Single Invoice/bill/delivery
                            challan) without an e-way bill that is generated on{" "}
                            <a href="https://ewaybillgst.gov.in/">www.ewaybillgst.gov.in</a>.{" "}
                        </p>
                        <p>
                            E-Way Bill is mandatory for all those shipments whose actual value is more
                            than Rs.50000/- to be transited in a single consignment, irrespective of the
                            value declared by the Seller/Client.
                        </p>
                        <p>
                            GST Officials have the basic per unit price lists according to the HSN CODE
                            which they use for calculating the actual value of shipments. If any
                            discrepancy is encountered related to alteration in tax payment while
                            transiting the shipment, the officials have the authority to impose a
                            penalty of 200% of the actual value of the shipment.
                        </p>
                        <p className="text-danger">
                            <b>NOTE:</b>{" "}
                            <em>
                                If any E-Way Bill is tagged with any shipment once, it cannot be retrieved
                                or untagged to use it further with any other shipment. Fresh E-Way Bill is
                                to be generated every time when an order is manifested with the actual
                                details in the invoice of the shipment.
                            </em>
                        </p>
                        <h4>BigShip’s Packaging SOP’s</h4>
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <h5>Liquid Items</h5>
                                <p>
                                    Packing an item involves leak proofing, cushioning, placing of the item
                                    and filling of the voids in the box. Enough cushioning needs to be
                                    provided to ensure no loads are transferred to the item.
                                </p>
                                <p>
                                    <em>Material - Bubble Wrap &amp; Foam sheets</em>
                                </p>
                                <h5>Liquid Products</h5>
                                <p>
                                    Liquid Products need to be made leak proof before cushioning or packing.
                                    Common leak proofing techniques are mentioned below.
                                </p>
                                <p>
                                    <em>
                                        Material - Heat Shrink Sleeve / Tapping Of Bottle Caps / Zip Lock
                                        Pouches
                                    </em>
                                </p>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div>
                                    <img
                                        src="images/Bigship-Packaging.png"
                                        alt="BigShip Courier SOP's"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                        <h4>Packaging Recommendations:-</h4>
                        <ul className="list-style-3">
                            <li>Check Strength / Load bearing capacity box (from manufacturer).</li>
                            <li>
                                Load bearing box should be greater than total weight of product going
                                inside.
                            </li>
                        </ul>
                        <h4>Recommendation</h4>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered align-middle">
                                <thead className="text-center">
                                    <tr>
                                        <th rowSpan={2} width="30%" className="align-middle">
                                            ReasonReason
                                        </th>
                                        <th colSpan={2}>Packaging Recommendation</th>
                                    </tr>
                                    <tr>
                                        <th width="30%">Box</th>
                                        <th width="40%">Specification</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    <tr>
                                        <td>Up to 4 Kg</td>
                                        <td>3-Ply Corrugated Box</td>
                                        <td rowSpan={4}>
                                            Material specification to be decided as per strength required &amp;
                                            weight inside box
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4-25 kg</td>
                                        <td>5-Ply Corrugated Box</td>
                                    </tr>
                                    <tr>
                                        <td>Above 25 kg</td>
                                        <td>7-Ply Corrugated Box</td>
                                    </tr>
                                    <tr>
                                        <td>Tools &amp; machinery </td>
                                        <td>Corrugated box covered with wooden frame or wooden box</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-danger">
                            <b>NOTE:</b>{" "}
                            <em>
                                If the seller is using Gunny Bags for packaging the shipment, it must be
                                packed properly and its edges to be attached in a way that no extensions
                                should be left. Leaving extensions in the Gunny Bags could result in more
                                volumetric weight and overweight discrepancy afterwards. It is recommended
                                better to “H” pack the bags using the adhesive tape.
                            </em>
                        </p>
                        <div className="text-center">
                            <img
                                src="images/packing-box-metrial.jpg"
                                alt="BigShip Courier SOP's"
                                className="img-fluid"
                            />
                        </div>
                        <h6>
                            <span className="text-danger">Heavy Tools/ Equipment</span>-Packaging
                            Procedure
                        </h6>
                        <h5 className="py-3">Primary Packaging</h5>
                        <p>
                            Pack the product in primary box if available, In case of no primary
                            packaging, wrap the product in 3 layers of bubble wrap &amp; tape it
                        </p>
                        <div className="text-center">
                            <img
                                src="images/sop-images-01-1.jpg"
                                alt="BigShip Courier SOP's"
                                className="img-fluid"
                            />
                        </div>
                        <h5 className="py-3">Secondary Packaging</h5>
                        <ul className="list-style-3">
                            <li>Put them inside appropriate secondary box. </li>
                            <li>
                                Use separators, if required. <br />
                                <span>(Select secondary box depending on load inside)</span>
                            </li>
                        </ul>
                        <div className="text-center">
                            <img
                                src="images/sop-images-02.jpg"
                                alt="BigShip Courier SOP's"
                                className="img-fluid"
                            />
                        </div>
                        <ul className="list-style-3">
                            <li>Wooden pallet box can also be used for very heavy tools/ equipment.</li>
                        </ul>
                        <div className="text-center">
                            <img
                                src="images/sop-images-03.jpg"
                                alt="BigShip Courier SOP's"
                                className="img-fluid"
                            />
                        </div>
                        <ul className="list-style-3">
                            <li>
                                If any space is left inside secondary box, put enough filler so that
                                primary boxes do not move in transit.
                            </li>
                        </ul>
                        <div className="text-center">
                            <img
                                src="images/sop-images-04.jpg"
                                alt="BigShip Courier SOP's"
                                className="img-fluid"
                            />
                        </div>
                        <ul className="list-style-3">
                            <li>
                                Close the box &amp; tape it. ”H-Taping is recommended on both sides.
                            </li>
                        </ul>
                        <div className="text-center">
                            <img
                                src="images/sop-images-05.jpg"
                                alt="BigShip Courier SOP's"
                                className="img-fluid"
                            />
                        </div>
                        <ul className="list-style-3">
                            <li>
                                All necessary handling symbol should be mentioned on the secondary box.
                            </li>
                        </ul>
                        <div className="text-center">
                            <img
                                src="images/sop-images-06.jpg"
                                alt="BigShip Courier SOP's"
                                className="img-fluid"
                            />
                        </div>
                        <ul className="list-style-3">
                            <li>
                                Strap box for easy handling put edge protector on the stress points in
                                box.
                            </li>
                        </ul>
                        <div className="text-center">
                            <img
                                src="images/sop-images-07.jpg"
                                alt="BigShip Courier SOP's"
                                className="img-fluid"
                            />
                        </div>
                        <h4>BigShip’s Internal Packing Material</h4>
                        <div>
                            <img
                                src="images/Packing-Material-chat.png"
                                alt="BigShip Courier SOP's"
                                className="img-fluid"
                            />
                        </div>
                        <h4>Packaging Multiple Products SOP</h4>
                        <p>
                            Taping multiple package products under one shipment type is against the
                            packaging practices. If you have multiple bags/ cartons- ship them under
                            different AWB numbers (as different products) or use our Multi- package
                            shipment facility. All packages must have AWB number label sticked on them
                            properly. No claims for loss or damage will be entertained in such a case.
                        </p>
                        <h4>BigShip’s Special Handling Labels</h4>
                        <p>
                            Special handling labels helps in communicating the necessary information for
                            appropriately handling the Shipment.
                        </p>
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <h6>Common Categories</h6>
                                <ul className="list-style-3">
                                    <li>Fragile</li>
                                    <li>Perishables</li>
                                    <li>Dangerous Goods</li>
                                    <li>Package Orientation</li>
                                    <li>Keep Dry</li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div>
                                    <img
                                        src="images/Common-Categories.png"
                                        alt="BigShip Courier SOP's"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                        <h4>Quick Check</h4>
                        <p>
                            Inspect the box for holes, tears, crushed edges and sturdiness. Avoid poor
                            quality boxes for the safety of the item shipped.
                        </p>
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <h6>Material</h6>
                                <ul className="list-style-3">
                                    <li>
                                        Use corrugated boxes of 3 ply for products below 4Kg and not fragile.
                                    </li>
                                    <li>
                                        Use corrugated boxes of 5 ply for products above 4Kg and fragile.
                                    </li>
                                    <li>
                                        Use tamper evident boxes for high value items (Cost above Rs. 7000).
                                    </li>
                                    <li>
                                        Ensure the material used can withstand the required edgecrush and
                                        burst factor loads.
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <h6>Size</h6>
                                <ul className="list-style-3">
                                    <li>Optimize the size of the boxes as per the product dimensions</li>
                                    <li>
                                        The box should not be too small or too big for the item shipped. An
                                        optimum size box should be chosen Quick Check
                                    </li>
                                    <li>
                                        Inspect the box for holes, tears, crushed edges and sturdiness. Avoid
                                        poor quality boxes for the safety of the item shipped.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <img
                                src="images/Quick-Check.png"
                                alt="BigShip Courier SOP's"
                                className="img-fluid"
                            />
                        </div>
                        <h3>List of Dangerous items:</h3>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered align-middle">
                                <thead className="text-center">
                                    <tr>
                                        <th width="30%" colSpan={2}>
                                            Dangerous Goods
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    <tr>
                                        <td>Acid</td>
                                        <td>Butane</td>
                                    </tr>
                                    <tr>
                                        <td>Adhesive products (containing flammable liquid)</td>
                                        <td>Camphor</td>
                                    </tr>
                                    <tr>
                                        <td>Aerosol cans (e.g. Hair spray)</td>
                                        <td>Chemicals</td>
                                    </tr>
                                    <tr>
                                        <td>Alarm devices (gas or battery powered)</td>
                                        <td>Christmas crackers</td>
                                    </tr>
                                    <tr>
                                        <td>Anti-freeze</td>
                                        <td>Disinfectants</td>
                                    </tr>
                                    <tr>
                                        <td>Appliances (containing batteries)</td>
                                        <td>Drugs (unless in prescription quantities)</td>
                                    </tr>
                                    <tr>
                                        <td>Asbestos</td>
                                        <td>Dyes</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Batteries (contained in any appliance, made of lithium or car wet
                                            cell &amp; battery fluids)
                                        </td>
                                        <td>Electronic items (containing batteries)</td>
                                    </tr>
                                    <tr>
                                        <td>Blasting caps</td>
                                        <td>Essential oils (e.g. Eucalyptus, tea tree)</td>
                                    </tr>
                                    <tr>
                                        <td>Bleach</td>
                                        <td>Fertilizers</td>
                                    </tr>
                                    <tr>
                                        <td>Brake fluid</td>
                                        <td>Fire extinguishers</td>
                                    </tr>
                                    <tr>
                                        <td>Fire lighter &amp; Flint Lighters &amp; Cigarette lighters</td>
                                        <td>
                                            Gas (e.g. Propane, butane, hydrogen, helium, camping gas cyliender
                                            full or empty)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Firearms</td>
                                        <td>Glue (e.g. Flammable, quick drying)</td>
                                    </tr>
                                    <tr>
                                        <td>Fireworks (e.g. Skyrockets, sparklers, crackers)</td>
                                        <td>Varnish (e.g. Removers, thinners)</td>
                                    </tr>
                                    <tr>
                                        <td>Flammable liquids and flammable solids (e.g. Perfume)</td>
                                        <td>Grenades </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3>List of Prohibited or Restricted Items</h3>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered align-middle">
                                <thead className="text-center">
                                    <tr>
                                        <th width="30%" colSpan={2}>
                                            Restricted Items
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    <tr>
                                        <td>Live or dead animals</td>
                                        <td>Bullion</td>
                                    </tr>
                                    <tr>
                                        <td>Prescription drugs</td>
                                        <td>Cash or Currency</td>
                                    </tr>
                                    <tr>
                                        <td>Illegal narcotic substances</td>
                                        <td>Payment cards, traveller cheques, etc.</td>
                                    </tr>
                                    <tr>
                                        <td>Firearms(including parts) and Ammunition</td>
                                        <td>Jewellery</td>
                                    </tr>
                                    <tr>
                                        <td>Fake/dummy/game/toy weapons, paint ball</td>
                                        <td>Precious metals &amp; stones</td>
                                    </tr>
                                    <tr>
                                        <td>Guns, BB guns, antique weapons, swords, knives etc. </td>
                                        <td>Works of Art</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Items that could be used as weapons decorative swords, kitchen,
                                            knives etc.)
                                        </td>
                                        <td>Antiques</td>
                                    </tr>
                                    <tr>
                                        <td>Human remains (including ashes)</td>
                                        <td>Items of a fragile nature</td>
                                    </tr>
                                    <tr>
                                        <td>Furs and skins (untreated)</td>
                                        <td>Packages that are wet, leaking or emit any</td>
                                    </tr>
                                    <tr>
                                        <td>Indecent goods &amp; pornography</td>
                                        <td>Ammunition</td>
                                    </tr>
                                    <tr>
                                        <td>Any noxious substance</td>
                                        <td>Foodstuff</td>
                                    </tr>
                                    <tr>
                                        <td>Plants/Seeds</td>
                                        <td>Perishable goods</td>
                                    </tr>
                                    <tr>
                                        <td>Any unsolicited indecent item</td>
                                        <td>Any inadequately packaged item</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-danger">
                            <b>NOTE:</b>{" "}
                            <em>
                                If any shipment is encountered to have any prohibited or restricted items
                                and reported by the Courier Partner, a penalty of Rs. 25000/- (extendable
                                up to Rs. 50000/-) can be levied over the shipment which is liable to be
                                paid by the Seller or Consignee depending upon the case and shipment will
                                be disposed of at the same time.
                            </em>
                        </p>
                        <h3>Special Deliveries &amp; Pickups Charges</h3>
                        <p>All kind of extra handling charges shall be billed extra to the client.</p>
                        <div className="row">
                            <div className="col-6">
                                <ul className="list-style-3">
                                    <li>
                                        Excess Charges: POS (Payment on scan) charges will be leived if COD
                                        payment is paid through POS machine. It will be 1.5% of the COD
                                        amount.
                                    </li>
                                    <li>Mall Delivery &amp; Pickup</li>
                                    <li>Canteen Delivery &amp; Pickup</li>
                                    <li>Government Office or compound Delivery &amp; Pickup</li>
                                    <li>Sunday delivery &amp; pickup</li>
                                    <li>Higher floor delivery &amp; pickup charges</li>
                                    <li>Crane Charges</li>
                                    <li>Demurrage charges</li>
                                    <li>Appointment Base delivery and pickup charges</li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="list-style-3">
                                    <li>Pickup &amp; Destination Union charges</li>
                                    <li>Warai charges</li>
                                    <li>Special vehicle arrangements charges.</li>
                                    <li>Labor charges</li>
                                    <li>Army Area</li>
                                    <li>Mathadi Charges</li>
                                    <li>Hamaii Charges</li>
                                    <li>Adhoc charges</li>
                                </ul>
                            </div>
                        </div>
                        <h3>Address Format</h3>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Address Format</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>*House No. / khasara No. / Ward no.</td>
                                    </tr>
                                    <tr>
                                        <td>*Building Name / Floor No./ Block no. or name</td>
                                    </tr>
                                    <tr>
                                        <td>*Road Name/ Area Name /Colony Name / District</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            *Landmark (Hospital , School, Temple bank &amp; government office)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>*City &amp; state</td>
                                    </tr>
                                    <tr>
                                        <td>*Pin code (According to area or Post office)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3>Forward Delivery</h3>
                        <p>
                            In any case related to forward delivery after the 1st delivery attempt has
                            been made, shipment it will be re-attempted in a window of 24-48 hours.
                        </p>
                        <h3>POD Cases</h3>
                        <p>
                            Any case related to POD whether forward delivery or RTO (Return to origin)
                            delivery will be entertained within the courier TAT which is 24-48 hours. No
                            escalation after that will be entertained.
                        </p>
                        <div>
                            <img
                                src="images/courier-sop-tag.png"
                                alt="BigShip Courier SOP's"
                                className="img-fluid"
                            />
                        </div>
                        <h3>In-Transit Shipment</h3>
                        <p>
                            The usual TAT of any shipment varies between 3-5 day, it is requested to put
                            any escalation bearing this in mind.
                        </p>
                        <h3>ODA Location- (NSZ)</h3>
                        <p>
                            In ODA location cases (Out of delivery area &amp; Non serviceable zone)
                            customer has to self-collect the shipment from the courier branch.
                        </p>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">ODA (Out of Delivery Area)</th>
                                        <th scope="col">Non-Serviceable Zone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            Out of Delivery Area means, the location/area of delivery is beyond
                                            regular pickup and delivery service.
                                        </td>
                                        <td>
                                            Non Serviceable Zone means, the location/area is non serviceable for
                                            regular pickup and delivery.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            In ODA locations shipments courier charge a specific amount for
                                            pickup and delivery.
                                        </td>
                                        <td>
                                            In Non Serviceable Zone no charges will be charged. No delivery and
                                            pickups will be done in such areas.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            There could be cases where a part of an ODA area is non-serviceable
                                            due to sanctions imposed by the Courier Partner due to their past
                                            experience in that particular area or part of it. (Cases of
                                            Snatching, Theft, etc.)
                                        </td>
                                        <td />
                                    </tr>
                                    <tr></tr>
                                </tbody>
                            </table>
                        </div>
                        <h4>Branch Address</h4>
                        <p>
                            In any case, when provided the branch address for self-collection and
                            customer is unable to self-collect the same within a TAT of 24-48 hours,
                            same will marked RTO.
                        </p>
                        <h4>Shipment Closure</h4>
                        <p>
                            RTO Shipment (Return to Origin):- Shipment closure courier TAT is 60days.
                            Only after that can we ask the courier to mark the shipment as LOST.
                        </p>
                        <h4>Appointment Base Delivery</h4>
                        <p>
                            In appointment-based delivery, the seller has to take an appointment with
                            the consignee then the seller need to inform us about the delivery date
                            prior 24 hours of the delivery, so that we can instruct the courier to
                            deliver the shipment on the given date &amp; the charges for the appointment
                            base delivery are mentioned below.
                        </p>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered text-center">
                                <thead>
                                    <tr>
                                        <th scope="col" colSpan={2}>
                                            Appointment Base Delivery Charges
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Delhivery Surface</td>
                                        <td>
                                            1.5 per kg per day or Rs. 400 for single tracking or whichever is
                                            higher +18% GST.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Delhivery LTL</td>
                                        <td>
                                            1.5 per kg per day or Rs. 500 for single tracking or whichever is
                                            higher +18% GST.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>DTDC LTL</td>
                                        <td>
                                            Rs 2.5 per Kg Per Day or Rs. 600 for single tracking or whichever is
                                            higher +18% GST.
                                        </td>
                                    </tr>
                                    <tr></tr>
                                    <tr>
                                        <td>Rivigo</td>
                                        <td>
                                            Rs 1.5 per Kg per Day or Rs 300 for single tracking or whichever is
                                            higher +18% GST.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Delhivery Air</td>
                                        <td>
                                            Rs 3 per Kg Per Day or Rs. 600 for single tracking or whichever is
                                            higher +18% GST.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Smartr</td>
                                        <td>
                                            Rs 5 per Kg per Day or Rs 600 for single tracking or whichever is
                                            higher + 18% GST.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Movin </td>
                                        <td>Rs 1000 per tracking +18% GST.</td>
                                    </tr>
                                    <tr>
                                        <td>Ekart LTL</td>
                                        <td>No appointment Base Delivery</td>
                                    </tr>
                                    <tr>
                                        <td>Gati</td>
                                        <td>No appointment Base Delivery</td>
                                    </tr>
                                    <tr>
                                        <td>Xpressbees</td>
                                        <td>No appointment Base Delivery</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h4>Charges for Extra Delivery Attempt</h4>
                        <p>
                            Please be informed that if the consignee didn't accept the delivery in the
                            first two attempts by the courier then for further delivery attempts the
                            seller has to pay extra charges.
                        </p>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered text-center">
                                <thead>
                                    <tr>
                                        <th scope="col" colSpan={2}>
                                            Charges for Extra Delivery attempt
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>DELHIVERY 10kg, 20Kg &amp; 30Kg</td>
                                        <td>Rs 2 per Kg or Rs 500 after 2nd attempt whichever is higher.</td>
                                    </tr>
                                    <tr>
                                        <td>Delhivery LTL</td>
                                        <td>Rs 3 per Kg or Rs 600 after 2nd attempt whichever is higher.</td>
                                    </tr>
                                    <tr>
                                        <td>DTDC LTL</td>
                                        <td>Rs 2 per Kg or Rs 600 after 2nd attempt whichever is higher.</td>
                                    </tr>
                                    <tr>
                                        <td>Rivigo</td>
                                        <td>Rs 2 per Kg or Rs 600 after 2nd attempt whichever is higher.</td>
                                    </tr>
                                    <tr>
                                        <td>DELHIVERY AIR</td>
                                        <td>Rs 2 per Kg or Rs 600 after 2nd attempt whichever is higher.</td>
                                    </tr>
                                    <tr>
                                        <td>Gati</td>
                                        <td>Rs 2 per Kg or Rs 600 after 2nd attempt whichever is higher.</td>
                                    </tr>
                                    <tr>
                                        <td>Xpressbees</td>
                                        <td>Rs 2 per Kg or Rs 600 after 2nd attempt whichever is higher.</td>
                                    </tr>
                                    <tr>
                                        <td>Smartr</td>
                                        <td>Rs 2 per Kg or Rs 600 after 2nd attempt whichever is higher.</td>
                                    </tr>
                                    <tr>
                                        <td>Ekart LTL</td>
                                        <td>Rs 2 per Kg or Rs 600 after 2nd attempt whichever is higher</td>
                                    </tr>
                                    <tr>
                                        <td>Movin</td>
                                        <td>Rs 2 per Kg or Rs 600 after 2nd attempt whichever is higher.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h4>Damages</h4>
                        <p>
                            Client needs to raise any content mismatch / short / partial / damage issues
                            in either forward or return delivery within 48 hours of receiving the
                            shipment. Courier shall not be liable in any manner whatsoever to the
                            customer /Consignee of any third party, if the customer or receiver has
                            accepted the shipment without mentioning the dispute on the proof of
                            delivery (POD). No escalation would be entertained on clean POD.
                        </p>
                        <h3>Limitation of Liability (Carrier Risk &amp; Owner Risk)</h3>
                        <h4>Delhivery</h4>
                        <p>
                            Parties agree that in cases where in Courier Partner agrees to insure the
                            shipments entirely, it will provide 100% of invoice value (after deducting
                            the relevant processing charges of Rs 10,000/- &amp; deduction of salvage
                            charges ) to the seller for any loss suffered or incurred due to gross
                            negligence or wilful misconduct of the Courier Partner.
                        </p>
                        <p>
                            However, if the Seller agrees to insure the shipments on its own risk,
                            Courier Partner will only provide a Certificate of Fact (COF). Courier
                            Partner will not be responsible for any other liability. The full liability
                            for the loss/damage value will be that of the sellers alone.
                        </p>
                        <p>
                            <b>NOTE: -</b> There is no liability on liquid&amp; glass items. There
                            should be a fragile sticker on the breakable items.
                        </p>
                        <h4>Rivigo</h4>
                        <p>
                            The Seller should be liable for the any liquidation, indirect, incidental,
                            punitive or consequential damages or consequential damages or losses. The
                            Courier Partner will be liable for the liability under or in connection
                            losses or damage and agrees to pay max amount (after deducting the relevant
                            processing charges &amp; deduction of salvage charges by the courier
                            partner)or as per the conclusion of the investigation of the courier
                            partner.
                        </p>
                        <p>
                            However, if the Seller agrees to insure the shipments on its own risk,
                            Courier Partner will only provide a Certificate of Fact (COF). Courier
                            Partner will not be responsible for any other liability. The full liability
                            for the loss/damage value will be that of the Seller’s alone.
                        </p>
                        <p>
                            <b>NOTE: -</b> There is no liability on liquid &amp; glass items. There
                            should be a fragile sticker on the breakable items.
                        </p>
                        <h4>Gati KWE</h4>
                        <p>
                            Shipments carried by Gati are subjected to several constraints as some
                            services are handled in GATI KWE are by the external agencies (third party
                            vendor) which are beyond its reasonable control. Courier Partner shall not,
                            under any circumstances, be liable for any consequential, incidental or
                            special damage, direct or indirect loss, claim expenses or delay in pickup
                            or delivery for any shipment regardless of the causes of such delays or
                            whatsoever nature arising.
                        </p>
                        <p>
                            No liability is assumed for any error/ omission of the information or data
                            that is imparted in respect of the shipment.
                        </p>
                        <p>
                            The Courier Partner will be liable for the liability under or in connection
                            losses or damage and agrees to max (after deducting the relevant processing
                            charges &amp; deduction of salvage charges by the courier partner)or as per
                            the conclusion of the investigation of the courier partner.
                        </p>
                        <p>
                            <b>NOTE: -</b> There is no liability on liquid &amp; glass items. There
                            should be a fragile sticker on the breakable items.
                        </p>
                        <h4>DTDC LTL</h4>
                        <p>
                            The processing charges for the Claim Redressal will be 0.2% of the invoice
                            value of the Shipment or Rs.100/-per Docket, whichever is higher. DTDC will
                            provide either the certificate of fact (COF) or Rs.2000/-(Max.). Maximum
                            coverage will be INR 5, 00,000/-.
                        </p>
                        <p>
                            <b>NOTE: -</b> There is no liability on liquid &amp; glass items. There
                            should be a fragile sticker on the breakable items.
                        </p>
                        <h4>Xpressbees</h4>
                        <p>
                            The Xpreebees will be liable for the liability under or in connection losses
                            or damage and agrees to pay max amount (after deducting the relevant
                            processing charges &amp; deduction of salvage charges by the courier
                            partner)or as per the conclusion of the investigation of the courier
                            partner. If the losses are higher than invoice or the amount defined by
                            courier for the claim then Courier Partner will provide the Certificate of
                            Fact (COF) only.
                        </p>
                        <p>
                            <b>NOTE:-</b> There is no liability on liquid items in both the scenario
                            carrier risk and owner risk in each and every courier. There should be
                            fragile sticker on breakable items or which can be damaged easily.
                        </p>
                        <h4>Ekart LTL</h4>
                        <p>
                            The Ekart will be liable for the liability under or in connection losses or
                            damage and agrees to pay the max amount (after deducting the relevant
                            processing charges &amp; deduction of salvage charges by the courier
                            partner) or as per the conclusion of the investigation of the courier
                            partner. If the losses are higher than invoice or the amount defined by
                            courier for the claim then Courier Partner will provide the Certificate of
                            Fact (COF) only.
                        </p>
                        <p>
                            <b>NOTE:-</b> There is no liability on liquid &amp; glass items in both the
                            scenario carrier risk and owner risk in each and every courier. There should
                            be fragile sticker on breakable items or which can be damaged easily.
                        </p>
                        <h4>Smartr</h4>
                        <p>
                            The Smartr will be liable for the liability under or in connection losses or
                            damage and agrees to pay the max amount (after deducting the relevant
                            processing charges &amp; deduction of salvage charges by the courier
                            partner) or as per the conclusion of the investigation of the courier
                            partner. If the losses are higher than invoice or the amount defined by
                            courier for the claim then Courier Partner will provide the Certificate of
                            Fact (COF) only.
                        </p>
                        <p>
                            <b>NOTE:-</b> There is no liability on liquid &amp; glass items in both the
                            scenario carrier risk and owner risk in each and every courier. There should
                            be fragile sticker on breakable items or which can be damaged easily.
                        </p>
                        <h4>Movin</h4>
                        <p>
                            The Movin will be liable for the liability under or in connection losses or
                            damage and agrees to pay the max amount (after deducting the relevant
                            processing charges &amp; deduction of salvage charges by the courier
                            partner) or as per the conclusion of the investigation of the courier
                            partner. If the losses are higher than invoice or the amount defined by
                            courier for the claim then Courier Partner will provide the Certificate of
                            Fact (COF) only.
                        </p>
                        <p>
                            <b>NOTE:-</b> - There is no liability on liquid &amp; glass items in both
                            the scenario carrier risk and owner risk in each and every courier. There
                            should be fragile sticker on breakable items or which can be damaged easily.
                        </p>
                        <h4>Limitation of Liability (B2C &amp; B2C Heavy All Carriers)</h4>
                        <p>
                            The service provider, any of its officers, employees' agents, or contractors
                            shall not in any case be liable to the merchant for any incidental,
                            consequential, special, exceptional, indirect, or other losses or damages
                            resulting from the agreement.
                        </p>
                        <p>
                            If the invoice value is less than the liability clause, the service
                            provider's maximum liability and the merchant's only and exclusive
                            compensation for any damages or loss, theft, or misappropriation of any
                            shipment resulting from the service provider's willful misconduct or gross
                            negligence will be to pay Rs 2000.
                        </p>
                        <p>
                            The service provider's responsibility for any loss or damage to a shipment
                            costing more than 2000/-will be restricted to giving the merchant the
                            certificate of fact (COF).
                        </p>
                        <p>
                            The maximum liability which could be initiated by the Service Provider is
                            limited to an amount of Rs. 2000/- when the invoice value is upto Rs.
                            2000/-. For Example, if a claim is requested with a claim value of Rs.
                            2000/-, it will be settled monetarily. But if the invoice value exceeds the
                            amount of Rs. 2000/-, the settlement is made by providing a Certificate of
                            Fact (COF) only. No monetary claim will be settled in that particular case.
                        </p>
                        <h4>LOST Cases Timeline</h4>
                        <ul className="list-style-3">
                            <li>
                                The Lost amount will be added for B2B shipments as per the courier TAT
                                which 45-60 working days.
                            </li>
                            <li>
                                The Lost amount will be added for B2C shipments will be done as per the
                                courier TAT which 30-45 working days.
                            </li>
                            <li>
                                As per courier sop in B2C maximum amount to be added will be Rs.1000/- or
                                invoice value.
                            </li>
                            <li>
                                As per courier sop in B2B amount will be added or the invoice value
                                whichever is higher. ( Carrier Risk &amp; Insurance cases)
                            </li>
                            <li>As per courier sop in B2B COF will be shared. (Owner Risk)</li>
                            <li>
                                All the Lost/Damage &amp; missing items amount will added in seller’s
                                wallet.
                            </li>
                        </ul>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered text-center">
                                <thead>
                                    <tr>
                                        <th scope="col" colSpan={2}>
                                            B2C and B2C Heavy Claim amounts
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>B2C- 0.5kg- 5kg(0.5,1,2,5)</td>
                                        <td>Rs 1000/- or the invoice value whichever is lower.</td>
                                    </tr>
                                    <tr>
                                        <td>B2C heavy- Above 5kg-20 kg(10,20)</td>
                                        <td>Rs 1500/- or the invoice value whichever is lower </td>
                                    </tr>
                                    <tr>
                                        <td>B2C heavy- 20kg-30 kg(30)</td>
                                        <td>Rs 2000/- or the invoice value whichever is lower.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h4>Third Party Insurance</h4>
                        <p>
                            Any escalation raised after 48 hour of delivery will not be entertained and
                            no escalation will be taken on clean POD. All the details need to be
                            mentioned the POD whether it’s a short shipment, damage shipment or missing
                            item quantity should be specified on the POD. Below mentioned documents
                            should be provided by the seller at the time raising the dispute in case of
                            damage, short or missing.
                        </p>
                        <p>Find the list below for the documents:-</p>
                        <ul className="list-style-3">
                            <li>Signed LR or manifest copy.</li>
                            <li>Signed &amp; stamped invoice copy.</li>
                            <li>Before and after images of the damage product</li>
                            <li>
                                In case short shipment and missing items packing video and unpacking video
                                should be provide with label.
                            </li>
                        </ul>
                        <p>
                            And there is no specific TAT of the investigation which is held by the third
                            party vendor. (ICICI Lombard insurance)
                        </p>
                        <h4>Demurrages</h4>
                        <p>
                            If the seller wants to hold the shipment then he has to pay the demurrage
                            charges and these charges will be imposed after the first attempt of
                            delivery and incase of non-payment of the charges, the shipment will be
                            forfeited or disposed accordingly at service provider’s end and no claim or
                            escalation would be entertained on this furthermore.
                        </p>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered text-center">
                                <thead>
                                    <tr>
                                        <th scope="col" colSpan={2}>
                                            Demurrage charges
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Delhivery Surface</td>
                                        <td>
                                            Rs.1 per kg &amp; per day after 3 day of first delivery attempt or
                                            500 Rs whichever is higher +18% GST.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Delhivery LTL</td>
                                        <td>
                                            Rs.1 per kg &amp; per day after 3 day of first delivery attempt or
                                            600 Rs whichever is higher +18% GST.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>DTDC LTL</td>
                                        <td>
                                            Rs.1 per Kg &amp; per day after 4 days of reaching the shipment at
                                            destination or 600 Rs whichever is higher +18% GST.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Rivigo</td>
                                        <td>
                                            Rs.1.5 per kg &amp; per day after 1st attempt of delivery or 600 Rs
                                            whichever is higher + 18% GST.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>DELHIVERY AIR</td>
                                        <td>
                                            Rs.1 per kg &amp; per day after 3 day of first delivery attempt or
                                            600 Rs whichever is higher + 18%GST.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Gati</td>
                                        <td>
                                            Rs.1.5 Per &amp; per day after 1st attempt of delivery or 300 Rs
                                            whichever is higher + 18% GST..
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Xpressbees</td>
                                        <td>
                                            Rs.1 per Kg per day after 1st attempt of delivery or 300 Rs
                                            whichever is higher + 18%GST.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Smartr</td>
                                        <td>
                                            Rs.1.5 per Kg per day after 4 days of reaching the shipment at
                                            destination or 600 Rs whichever is higher +18% GST.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Movin </td>
                                        <td>
                                            Rs.1.5 per kg &amp; per day after 1st attempt of delivery or 600 Rs
                                            whichever is higher + 18% GST.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ekart LTL </td>
                                        <td>
                                            Rs.2.5 Per &amp; per day after 1st attempt of delivery or 600 Rs
                                            whichever is higher + 18% GST.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3>Weight Discrepancy</h3>
                        <h4>Weight Disagreement between Client &amp; Courier</h4>
                        <p>
                            Weight discrepancy occurs when there is difference between weight captured
                            by courier and weight given by client while manifesting the shipment. It is
                            to be notified that Bigship is an aggregator and does not involve its
                            personals in the weight input process. All the weights shared under “weight
                            discrepancy” are weights shared by the carrier strictly. Assistance of the
                            client is thus needed for the physical verification of the shipment in the
                            form of similar/same packaging pictures.
                        </p>
                        <p>
                            <b>
                                To understand this, some terminologies are important to be referred as
                                below:
                            </b>
                        </p>
                        <ul className="list-style-3">
                            <li>
                                <strong>Dead Weight –</strong> Dead weight is the actual weight captured
                                by a weighing machine shown in the below image and video link.
                            </li>
                        </ul>
                        <div>
                            <img
                                src="images/weight-discrepancy-img-01.jpg"
                                className="mx-auto d-block img-fluid"
                            />{" "}
                        </div>
                        <ul className="list-style-3">
                            <li>
                                <strong>Volumetric Weight –</strong> Volumetric Weight is captured by
                                measuring the dimensions of the item with a measuring tape. Measure the
                                length, breadth &amp; the height in centimetres as shown in the below
                                images.
                            </li>
                        </ul>
                        <div>
                            <img
                                src="images/Volumetric-Weight.png"
                                className="mx-auto d-block img-fluid"
                            />
                        </div>
                        <p>
                            <strong>
                                For Volumetric, after measuring the LBH, it needs to be calculated as
                                Length x Breadth x Height ÷ Divisor
                            </strong>
                        </p>
                        <p>The divisor for couriers are different in surface and air. </p>
                        <h4>How to raise a dispute?</h4>
                        <p>
                            Having an understanding that carriers are involved in the weight discrepancy
                            process, assistance from the clients is needed to counter the false weights
                            shared by the carrier.{" "}
                        </p>
                        <h4>This is done simply by sharing the following:</h4>
                        <ul className="list-style-3">
                            <li>Dead weight pictures or a video of the packed shipment.</li>
                            <li>Measurement of length, breadth and height in pictures or video</li>
                            <li>
                                All pictures and videos must be clear and not hazy for the concern team to
                                evaluate very properly.
                            </li>
                            <li>
                                Pictures without any measuring tape will be considered as irrelevant.
                            </li>
                            <li>
                                While raising a dispute, Client needs to provide a video of the dead
                                weight showing 0 weight first then measure the item weight by pressing the
                                tare button.
                            </li>
                            <li>
                                Clients can raise a dispute only once per Tracking/LR number.A resolution
                                on the disputed order is final and you cannot raise a dispute again.
                            </li>
                            <li>
                                Disputed AWB labels should be attached over the boxes while taking images
                                or video.
                            </li>
                            <li>
                                In-case of QC &amp; Manual weight sources without images of the disputed
                                AWB/ LR number, no escalation will be accepted by Bigship or raised to the
                                Courier Partner for resolution.
                            </li>
                        </ul>
                        <p>
                            Please share all the above information with our finance team along with the
                            AWB numbers on the mail id at{" "}
                            <a href="mailto:escalation.desk@bigship.in">escalation.desk@bigship.in</a>{" "}
                            keeping{" "}
                            <a href="mailto:client.service@bigship.in">client.service@bigship.in</a> in
                            cc. We will send the information to counter the weight of the courier and
                            assist you resolve the cases in your favour. In the case of a tampered or
                            false proof, the weight given by the courier will be charged.
                        </p>
                        <p>
                            Please note that all the above is mandatory and a lack of any single
                            information from the above will lead to case not being closed in your
                            favour.{" "}
                        </p>
                        <p>
                            <strong>Note:</strong> Clients have 24 Hours (in B2B &amp; 48 hours in B2C)
                            to raise a dispute, after which the weight given by the courier company will
                            be auto accepted.
                        </p>
                        <h3>Cancelled Shipment Sop’s:-</h3>
                        <p>
                            If any shipment which is cancelled by any dispute or issue the refund will
                            be done as mentioned below.
                        </p>
                        <ul className="list-style-3">
                            <li>
                                The refund for B2B shipments will be done as per the courier TAT which 5-6
                                working days.
                            </li>
                            <li>
                                The refund for B2C shipments will be done as per the courier TAT which 2-3
                                working days.
                            </li>
                        </ul>
                        <h4>Forfeiting Shipments</h4>
                        <p>
                            Under the circumstances where a seller is found to make a new account
                            against an already existing account which is in negative wallet state, any
                            shipments shipped with the new account will be forfeited without any
                            intimation for the same. For the recovery of such shipments, the seller has
                            to settle both the accounts and also pay charges for the overall journey of
                            shipping which includes 2 forward shipping charges and 1 reverse shipping
                            charges. For such accounts, an additional penalty will be applied to the
                            seller for Rs.10, 000.
                        </p>
                        <p>
                            Post the penalty and all the settlement will only the shipments be sent back
                            to the seller. Bigship or any of its entities will not be responsible for
                            any loss or damage of the shipments in such cases.
                        </p>
                        <p>
                            Under condition of shipments forfeited and no closure/intimation from the
                            client end for more than 7 days, shipments will be disposed off. Bigship
                            will not hold any responsibility of such shipments for any loss, breakage or
                            loss of any other type.
                        </p>
                        <h3>Amazon Shipping Sop’s</h3>
                        <h4>Proof of Delivery:-</h4>
                        <p>
                            The proof of delivery or other alternate documentation evidencing delivery
                            of the shipment will be furnished (issued) after a request in that behalf is
                            made within 24 hours of Delivery.
                        </p>
                        <p>
                            Amazon will carry the shipment from the point of pickup to the point of
                            delivery to the consignee at the address indicated on the shipping label.
                            There is no obligation to deliver a shipment to the consignee personally and
                            Amazon may deliver to someone other than the person named in the shipping
                            label on behalf of the consignee and such delivery shall be a valid
                            discharge of Amazon's obligations. Amazon may either take physical PODs or
                            use an electronic device to obtain proof of delivery and the Consignor
                            agrees that it will not object to Amazon relying on a printed copy of the
                            same as evidence merely on the grounds that the information concerned is
                            obtained and stored in electronic form.
                        </p>
                        <h4>Additional Restrictions</h4>
                        <p>
                            Additional restrictions may apply depending upon destination, Service and
                            ship method used. Amazon reserves the right to reject shipments based upon
                            these limitations or for reasons of security or safety. Amazon shall be
                            entitled to charge an administrative fee for shipment rejected and for the
                            costs of returning goods, where applicable, to the Consignor.
                        </p>
                        <h4>Disposed or Destroyed</h4>
                        <p>
                            Amazon reserves the right to refuse, hold, cancel, postpone, return or
                            destroy any shipment at any time if Amazon believes that such shipment
                            would, likely to cause damage or delay to other shipments, or persons, or
                            the carriage of which is prohibited by law of the land or is in violation of
                            any of these Conditions of Carriage. In such scenario, Amazon has a
                            discretion either to dispose or destroy that particular shipment as it seems
                            necessary to it. In addition, the consignor will be liable to compensate
                            Amazon for any damages incurred including any expenses Amazon incurs in
                            connection with any unsuitable shipments. The fact that Amazon accepts a
                            shipment does not mean that such shipment conforms to applicable laws and
                            regulations or to the Conditions of Carriage.
                        </p>
                        <ul className="list-style-3">
                            <li>
                                Amazon reserves the right to open or inspect any shipment at any time, at
                                its own option or upon the request of the competent authorities
                                (Aggregator) and shall not incur any liability thereof.
                            </li>
                            <li>
                                Amazon shall not be liable in any circumstances for any delay, loss,
                                damage and/or resultant claims due to seizure or detention of shipments
                            </li>
                        </ul>
                        <h4>Limits Of Liability</h4>
                        <ul className="list-style-3">
                            <li>
                                The liability of Amazon for any loss or damage to any shipment in relation
                                to a Service shall not exceed the amount specified for the applicable ship
                                method.
                            </li>
                            <li>
                                The declared value of shipments for carriage cannot exceed the invoice
                                value.{" "}
                            </li>
                            <li>
                                Amazon shall not be responsible for any losses, damages and/or claims on
                                account of delay in pickup, transportation or delivery of any shipment
                                regardless of cause of such delays.
                            </li>
                            <li>
                                The Consignor will indemnify Amazon for all losses, expenses, and any
                                claims made against Amazon by the consignee or a third party, arising
                                where Amazon does not deliver a shipment because the consignee does not
                                pay the cash on delivery ("COD") amount in the appropriate form or refuses
                                to accept the shipment. In such a scenario, amounts paid by Consignor for
                                all losses, expenses and any claims made against Amazon will not be
                                subject to service tax.
                            </li>
                            <li>
                                <b>Loss of Damage to Shipment.</b> The Parties hereby agree and
                                acknowledge that Amazon's liability for any loss, theft or damage to the
                                goods/shipment (whether in contract, ort or any other legal theory to the
                                fullest extent permitted by law) shall not exceed to max amount (after
                                deducting the relevant processing charges &amp; deduction of salvage
                                charges by the courier partner)
                            </li>
                        </ul>
                        <h4>Liabilities NOT Assumed</h4>
                        <ul className="list-style-3">
                            <li>
                                Amazon shall not be liable for loss of or damage to any shipment arising
                                from causes beyond its reasonable control including but not limited to:
                                <ul className="list-style-3 mt-2">
                                    <li>
                                        An Act of God; or Any consequences of war, armed conflict, invasion,
                                        act of foreign enemy, hostilities (whether war or not), civil war,
                                        riot, rebellion, insurrection, military or usurped power or
                                        confiscation, acts of terrorism, requisition or destruction of or
                                        damage to property by or under the order of any government or public
                                        or local authority, strike, lock-out.
                                    </li>
                                    <li>Seizure or forfeiture under legal process.</li>
                                    <li>
                                        Error, act, default, omission, mis-statement or mis-representation by
                                        the Consignor, consignee or any other party claiming interest in the
                                        shipment
                                    </li>
                                    <li>
                                        The violation of any of the terms and conditions contained on the
                                        shipping label or these Conditions of Carriage, tariff or other terms
                                        and conditions applicable to the shipment
                                    </li>
                                    <li>
                                        Damage to articles packed and sealed in shipments by the Consignor,
                                        provided that the seal is unbroken at the time of delivery and the
                                        shipment retains its basic integrity.
                                    </li>
                                    <li>
                                        The erasure of data from or the loss or irretrievability of data
                                        stored on magnetic tapes, files or other storage media, or erasure or
                                        damage of photographic images or soundtracks from exposed film
                                    </li>
                                    <li>
                                        The act, default or omission of any public authority carried out in
                                        connection with the entry, exit or transit of the shipments.
                                    </li>
                                    <li>
                                        Accidents to vehicles and other conveyances carrying the shipments.
                                    </li>
                                    <li>Flight delays.</li>
                                </ul>
                            </li>
                        </ul>
                        <h4>Undeliverable Shipments</h4>
                        <ul className="list-style-3">
                            <li>
                                A shipment shall be considered to be undeliverable if:
                                <ul className="list-style-3 mt-2">
                                    <li>
                                        The consignee's address is incomplete &amp; in-correct or cannot be
                                        located.
                                    </li>
                                    <li>
                                        The consignee is not present or fails or refuses to accept delivery or
                                        sign or pay for delivery of any shipment. In this regard, Amazon, on a
                                        commercially reasonable basis, agrees to make 2 attempts for delivery.
                                    </li>
                                    <li>
                                        The shipment would likely cause damage or delay to other shipments, or
                                        injury to persons.
                                    </li>
                                    <li>The shipment contains prohibited items.</li>
                                    <li>
                                        The shipment's contents or packaging are damaged to the extent that
                                        re-wrapping is not possible.
                                    </li>
                                    <li>
                                        The shipment is detained or otherwise unable to clear local or state
                                        boundaries.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Amazon shall use reasonable efforts to return such shipment to the
                                Consignor at Consignor’s cost, failing which Amazon may elect to dispose
                                of or destroy the shipment at its sole discretion without incurring any
                                liability whatsoever to the Consignor or anyone else. Amazon shall, out of
                                the sale proceeds so received, be entitled to retain a sum equal to the
                                freight, storage and other charges due including expenses incurred for the
                                sale and the surplus, if any, from such sale proceeds shall be returned to
                                the Consignor, as the case may be.
                            </li>
                        </ul>
                        <h3>Proofs Required for Claim</h3>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered">
                                <thead className="text-center">
                                    <tr>
                                        <th>Reason</th>
                                        <th>Required Proofs</th>
                                        <th>Recommended Proofs</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>My shipment shows delivered but is not received</td>
                                        <td>packaging image &amp; video with label and invoice</td>
                                        <td>
                                            packaging image &amp; video with label and invoice and invoice
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>My Shipment is lost intransit</td>
                                        <td>packaging image &amp; video with label and invoice</td>
                                        <td>packaging image &amp; video with label and invoice</td>
                                    </tr>
                                    <tr>
                                        <td>My Shipment is received in Damaged condition</td>
                                        <td>
                                            Received by Recipient (forwardleg)
                                            <ul className="list-style-3">
                                                <li>Outer packaging image(condition)</li>
                                                <li>
                                                    Clearly visible Air way bill number on box(notseparatelabel)
                                                </li>
                                                <li>Product images</li>
                                                <li>Sample pre-ship image( to assess packaging type)</li>
                                                <li>Packaging Videos</li>
                                            </ul>
                                            Received by Shipper (reverseleg)
                                            <ul className="list-style-3">
                                                <li>Photos of outer package(w/o opening box)</li>
                                                <li>Unboxing video</li>
                                                <li>
                                                    Invoice with amount &amp; quantity for order(This is needed only
                                                    if there are multiple products within the order and not all of
                                                    them are received damaged)
                                                </li>
                                                <li>Sample pre-ship image( to assess packaging type)</li>
                                            </ul>
                                        </td>
                                        <td>Unboxing video by recipients for forward leg</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            My shipments shows delivered, but the item is missing/different
                                        </td>
                                        <td>
                                            Received by Recipient(forwardleg)
                                            <ul className="list-style-3">
                                                <li>Outer packaging image(condition)</li>
                                                <li>
                                                    Clearly visible Air way bill number on box(not separate label)
                                                </li>
                                                <li>Product images(for different item)</li>
                                                <li>Sample pre-ship image( to assess packaging type)</li>
                                                <li>Packaging Videos</li>
                                            </ul>
                                            Received by Shipper (reverse leg)
                                            <ul className="list-style-3">
                                                <li>Photos of outer package(w/o opening box)</li>
                                                <li>
                                                    Invoice with amount &amp; quantity for order(This is needed only
                                                    if there are multiple products within the order, along with
                                                    details of which products are missing in the comment section)
                                                </li>
                                                <li>Unboxing Video</li>
                                                <li>Sample pre-ship image( to assess packaging type)</li>
                                            </ul>
                                        </td>
                                        <td>Unboxing video by recipients for forward leg</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h4>Insurance</h4>
                        <p>
                            Amazon does not provide insurance cover and the Consignor may insure the
                            shipments entrusted for carriage to Amazon at his own cost and expense. In
                            the event of any loss or damage to the shipment in such a scenario, Amazon
                            agrees to provide the Consignor a certificate of facts ("COF") upon a
                            written request from the Consignor. The Consignor agrees and acknowledges
                            that the COF will be issued by Amazon without admission of any claim and
                            that Amazon shall be discharged of all liabilities, if any arising out of
                            the shipment on acceptance of the loss/damage/shortage certified by the
                            Consignor.
                        </p>
                        <h4>Chargeable Weight</h4>
                        <ul className="list-style-3">
                            <li>
                                Every shipment shall be charged by its chargeable weight, as defined
                                hereunder, and not the actual weight. The chargeable weight shall be the
                                higher of:
                                <ul className="list-style-3 mt-2">
                                    <li>
                                        The actual weight rounded off to the next higher half kg or one kg as
                                        per the rate category agreed.
                                    </li>
                                    <li>The volumetric weight similarly rounded off.</li>
                                </ul>
                            </li>
                            <li>
                                Volumetric weight (Dimensional weight) of a shipment, in kilograms, is its
                                gross cubic volume in cubic centimetres divided by the Volumetric Divisor.
                            </li>
                            <li>
                                Courier Partner reserves the right to re-weigh or re-measure any shipment
                                to confirm the calculation and chargeable weight until it is billed to
                                BigShip.
                            </li>
                        </ul>
                        <h3>Guidelines for Labelling and Packaging</h3>
                        <h4>Improper Packaging</h4>
                        <p>
                            The consignor (Seller) must ensure that all shipments given to Amazon are
                            prepared and packed appropriatelyto ensure safe carriage with normal care in
                            handling. Amazon shall not be liable for any damage or shortages occurring
                            as a result of improper packaging.{" "}
                        </p>
                        <h4>Shipping Label and Packaging</h4>
                        <ul className="list-style-3">
                            <li>
                                Amazon shipping label is non-editable and shall be used as a evidence
                                confirming
                                <ul className="list-style-3 mt-2">
                                    <li>
                                        Acceptance of shipments(Improper Details could result in refusal to
                                        accept the shipment by the Courier Boy)
                                    </li>
                                    <li>Acceptance of these Conditions of Carriage; and </li>
                                    <li>Conclusion of the contract between Amazon and the Consignor.</li>
                                </ul>
                            </li>
                            <li>
                                Consignor acknowledges and agrees that sale invoice details provided at
                                the time of the placing a shipment Service request will be included as
                                part of the shipping label and other transportation compliance
                                documentation. For such shipping labels, Amazon will consider GST ID of
                                the pickup address state declared by the Consignor. Amazon may submit such
                                documents to tax officials during inspections.
                            </li>
                            <li>
                                Each package within a shipment must be legibly and durably marked with the
                                full name and complete postal address with the PIN Code and telephone
                                number of both the Consignor and the recipient and in disagreement with
                                the standards as may be communicated by Amazon from time to time. Amazon
                                shall not be liable for non-delivery on account of incomplete or incorrect
                                address being provided by the Consignor.
                            </li>
                            <li>
                                Any article susceptible to damage as a result of any condition which may
                                be encountered during handling or transportation by air, railway or road
                                must be adequately protected by the shipper by proper packaging and Amazon
                                shall not be liable for any damage or shortages occurring as a result of
                                improper packaging.
                            </li>
                        </ul>
                        <p>
                            The following are the mandatory requirements for packages to be shipped with
                            Amazon.
                        </p>
                        <h4>Labelling Guidelines for Amazon Shipping orders</h4>
                        <ul className="list-style-3">
                            <li>
                                The label print must be clear and readable, the bar code and QR code
                                should be scan-able and the To/From address must be visible.
                            </li>
                            <li>
                                The size of a label shouldn’t be resized so small that more than four
                                labels on an A4 sheet which is 4’x6’ (inches) size for each label. Labels
                                smaller than 4’x6’ (inches) cannot be scanned and can lead to packages
                                getting lost during transit.
                            </li>
                            <li>
                                Do not fold the shipping label along any edge as the Information at the
                                bottom of the label is required at various points during transit.
                            </li>
                            <li>Do not use polybags with pouch (POD bags) for packaging.</li>
                        </ul>
                        <p className="text-danger">
                            Note: Do not keep labels in the document pouch of the outer package.
                        </p>
                        <ul className="list-style-3">
                            <li>
                                Affix shipping label on the visible side of the package and put the
                                invoice inside the package.
                            </li>
                            <li>
                                Use good quality sticky paper to print the labels. Do not make any
                                markings on the shipping label.
                            </li>
                            <li>
                                Non-adherence to these guidelines can lead to the following:
                                <ul className="list-style-3 mt-2">
                                    <li>Pickup associate refusing to pick up the packages.</li>
                                    <li>Ship with Amazon services getting disabled on your account.</li>
                                    <li>Orders getting cancelled or delayed.</li>
                                </ul>
                            </li>
                        </ul>
                        <h4>Packaging guidelines for Ship with Amazon orders</h4>
                        <ul className="list-style-3">
                            <li>
                                All items must be packed in packaging (envelope/box/polybag) with minimum
                                20 cm X 16 cm base dimension.
                            </li>
                            <li>
                                If you are using polybags for packaging purpose, you need to ensure that
                                poly bags are used as specified under applicable law. The plastic should
                                be thicker than 50 microns. It should be recyclable (it should have a logo
                                for recycling) and include information about the manufacturer (name,
                                address, license no), thickness, buyback price, decomposability (if
                                applicable) and type of plastic. See below image, a sample packaging
                                polybag which contains required specification. Sample provided is
                                indicative only.
                            </li>
                            <li>Polybags with pouch (POD bags) should not be used for packaging.</li>
                            <li>
                                Adequate cushioning in the form of dunnage (foam work) should be provided
                                to prevent the movement of items within the package.
                            </li>
                            <li>Only new packaging material should be used.</li>
                            <li>All items for one order must be packed in one package</li>
                            <li>
                                Manufacturer’s box/package is not considered as packaging material for
                                transportation. A separate outer packaging is mandatory.
                            </li>
                            <li>
                                Packages containing Hazmat or fragile products must carry required
                                indicative labelling.
                            </li>
                        </ul>
                        <h4>General Packaging Guidelines</h4>
                        <p>
                            {" "}
                            These are generic packaging advice to ensure safe transit and delivery of
                            the package to the customer.
                        </p>
                        <ul className="list-style-3">
                            <li>
                                <strong>External Packaging:</strong> Ensure package is not oversized for
                                the product (product package ratio should be appropriate).
                            </li>
                            <li>
                                <strong>Sealing:</strong> The packages should be sealed using H taping
                                technique to ensure they do not open during transit. Good quality
                                packaging tape (at least 2” wide) should be used.
                            </li>
                            <li>
                                <strong>Shipping Label:</strong> The shipping label should be of good
                                quality.
                            </li>
                            <li>
                                <strong>Outbound Labels:</strong> Orientation (eg. “This Side Up”) and
                                category labels (eg. Fragile) should be used wherever required.
                            </li>
                        </ul>
                        <h4>Packaging Guidelines by Category</h4>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">Category</th>
                                        <th scope="col">Example</th>
                                        <th scope="col">Package Material</th>
                                        <th scope="col">Packaging Guidelines</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Fragile</td>
                                        <td>Glass, Porcelain picture frames, Clocks, Mirrors</td>
                                        <td>Bubble wrap, double boxing</td>
                                        <td>
                                            <ul className="list-style-3">
                                                <li>Bubble wrap items individually with cushioning</li>
                                                <li>Double box heavier items (items &gt; 13.5 kg)</li>
                                                <li>Add orientation and fragile labelling</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Liquids</td>
                                        <td>Soaps, Spray bottles, Lotions</td>
                                        <td>Plastic -bag box wrapping</td>
                                        <td>
                                            <ul className="list-style-3">
                                                <li>
                                                    For liquids without double seal, tighten the lid, wrap the
                                                    container in a fully sealable strong plastic bag or plastic
                                                    sheet, and tightly seal all the seams
                                                </li>
                                                <li>Check if the content falls under Hazmat guidelines</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Apparels, Fabric, Textile</td>
                                        <td>Towels, Clothing, Purses</td>
                                        <td>Plastic-bag box wrapping</td>
                                        <td>
                                            <ul className="list-style-3">
                                                <li>
                                                    Place the unit in a transparent poly-bag to protect it from
                                                    damage due to dust and dirt
                                                </li>
                                                <li>Pack the unit in a six-cornered corrugated box</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Consumer Electronics</td>
                                        <td>Mobiles, MP3 Players, Camera, Electric shavers</td>
                                        <td>Bubble wrap, Plastic -bag double Boxing</td>
                                        <td>
                                            <ul className="list-style-3">
                                                <li>
                                                    Batteries/cells must be separated to prevent short circuit
                                                </li>
                                                <li>
                                                    Any device with installed batteries must be turned off during
                                                    transport
                                                </li>
                                                <li>
                                                    Small cell bubble sheet, 1/4 inch thick air bubble wrapping
                                                    could be used for additional protection
                                                </li>
                                                <li>
                                                    Double boxing with sufficient cushioning could be used to ensure
                                                    no damage to the product
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Toys and Baby Products</td>
                                        <td>Teething rings, Toy weapons, Exposed toys</td>
                                        <td>Poly-bag box wrapping</td>
                                        <td>
                                            <ul className="list-style-3">
                                                <li>
                                                    Units that are not contained in a sealed, six-edged package or
                                                    have have an opening greater than one square inch, must b placed
                                                    in a sealed poly-bag
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Books</td>
                                        <td>Paperback/Hardcover</td>
                                        <td>Jiffy bags, 1/4 bubble sheet/craft paper</td>
                                        <td>
                                            <ul className="list-style-3">
                                                <li>
                                                    Small cell bubble sheet can be used to ensure surface protection
                                                    and scuffing resistance
                                                </li>
                                                <li>
                                                    Additional packaging in jiffy bags or corrugated boxes can be
                                                    done according to size
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Sharp Objects</td>
                                        <td>Scissors, Tools, Knives</td>
                                        <td>Box packing, bubble wrap blister packing</td>
                                        <td>
                                            <ul className="list-style-3">
                                                <li>Use blister packing wherever possible</li>
                                                <li>
                                                    Wrap the unit in protective bubble wrap and further pack it in a
                                                    side edged corrugated box
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* <h4>Product Restrictions</h4>
                  <p>This page tells you which products are restricted and cannot be shipped using the Ship with Amazon Program.
                    The following products are excluded from the Ship with Amazon Program. Amazon reserves the right to change, modify, amend or alter the list of products which are excluded from the Ship with Amazon Program. Your continued use of the Amazon shipping Services constitutes your deemed consent to such revised terms and conditions.
                    </p>
                  
                    <ul class="list-style-3">
                      <li>Any products weighing over 18 kgs or the following dimensions – 70cm x 70cm x 45cm.</li>
                      <li>Alcoholic beverages and liquor confectionery.</li>
                      <li>Cigars, cigarettes, tobacco and any other products containing tobacco.</li>
                      <li>Following types of weapons:
                        <ul class="list-style-3 mt-2">
                          <li>Firearms and all associated parts, kits and ammunition; Realistic Imitation Firearms; Air-weapons, Air guns, BB guns and Air-soft guns (not including toy guns provided they are not Realistic Imitation Firearms).</li>
                          <li>Spear guns; mace; black powder and all explosives</li>
                          <li>Crossbows (all types, but not including toy crossbows which shoot plastic/foam darts).</li>
                          <li>Slingshots/Catapults (not including toys such as catapults that come with an action figure toy).</li>
                          <li>Offensive weapons.</li>
                          <li>Any ammunition, kits spares or accessories for any of the above.</li>
                        </ul>
                      </li>
                      <li>Fireworks or other pyrotechnics.</li>
                      <li>Knives, knife blades, razor blades, swords, daggers, axes and any other articles with a blade or which is sharply pointed and is made or adapted for use for causing injury to persons, with the exception of the following:
                        <ul class="list-style-3 mt-2">
                          <li>Razor blades permanently enclosed in a cartridge or housing with less than 2mm of blade exposed.  </li>
                          <li>Unlockable folding blades of less than 3 inches.</li>
                          <li>Folding blades of less than 3 inches part of a multi-tool device.</li>
                          <li>Knives included in ordinary cutlery sets with forks and spoons (blocks of knives, sets including only knives and carving sets including only carving knifes and carving forks will be considered as excluded products).</li>
                          <li>Electric carving knives</li>
                        </ul>
                      </li>
                      <li>Medicines and veterinary medicines, medicinal products, medicinal feeds and remedies of any type, including for example general sales list medicines, pharmacy only medicines, prescription only medicines, AVM – GSL medicines (Authorised Veterinary Medicine – General Sales List), NFA – VPS medicines (Non-Food Animal – Veterinarian, Pharmacist, Suitably Qualified Person) and POM-V medicines (Prescription Only Medicines – Veterinarian).</li>
                      <li>Any device, drug, vitamin, herbal product or other product which requires a doctor’s, optician’s or other health care provider’s prescription as a prerequisite for purchase or can only be stored, sold or shipped by a licensed health care provider.</li>
                      <li>Elements of the human body and medical implants any products made of or containing parts of any regulated endangered plant or animal such as for example elephant ivory, coral, sea turtle shells, most reptile skins.</li>
                      <li>Any product that contains other ingredients that are prohibited, restricted or regulated under applicable law.</li>
                      <li>Sex and sensuality products.</li>
                      <li>Products containing prohibited images of children and any other violent, offensive, obscene or sexual content that is unlawful in any of the countries to which Amazon enables your products to be sold.</li>
                      <li>Loose gemstone products</li>
                      <li>Any product that is placed on the market without the consent of the relevant brand or trademark owner.</li>
                      <li>Any product for which Seller either is not an “authorised reseller” (as designated by the product’s manufacturer or distributor), or does not provide to customers the manufacturer’s standard warranty therefore.</li>
                      <li>Any products that cannot be lawfully shipped to or sold in India.</li>
                      <li>Any product unit that:
                        <ul class="list-style-3 mt-2">
                          <li>Is regulated as a dangerous good or hazardous material (HAZMAT) by either the European Agreement concerning the International Carriage of Dangerous Goods by Road (ADR), the International Maritime Dangerous Goods Code (IMDG-Code) or the International Air Transport Association Dangerous Goods Regulations (IATA DGR) or any other relevant authority or agency under the applicable law; i.e. products that contains compressed gas, chemicals that are potentially explosive, flammable, corrosive, toxic, radioactive, magnetic, in either gaseous, liquid or solid (including powder) form. Consignment with Lithium battery products need to carry the necessary markings and need to comply with applicable provisions and testing requirements specified in the ADR and the IATA DGR provisions in order to be accepted by Amazon.
                            <p><b>Note: </b>Amazon may dispose of such items without compensating the seller.</p>
                          </li>
                          <li>Is a prohibited drug.</li>
                        </ul>
                      </li>
                      
                    </ul> */}
                        <p className="fw-bold">
                            If the shipment in-transit contains anyone of the above mentioned
                            substances/items and reported by the Courier Partner, the shipment under
                            consideration will be disposed off at the real time and a penalty of an
                            amount decided by the Courier Partner will be levied which is strictly to be
                            paid by the Client (Upto Rs.2,50,000/- per LRN/AWB)
                        </p>
                        <h3>CLAIMS</h3>
                        <ul className="list-style-3">
                            <li>
                                Claims for Damage: All claims for damage or delay must be notified in
                                writing to Amazon within 24 hours after delivery of the shipment, failing
                                which no action for damages may be brought against Amazon. Receipt of the
                                shipment by the recipient without written notice of damage on the delivery
                                receipt is a valid evidence that the shipment was delivered in good
                                condition. As a condition for Amazon considering any claim for damage, the
                                recipient must make the contents, original cartons and packaging available
                                for inspection by Amazon and must be retained until the claim is
                                concluded. Amazon reserves the right to inspect the damaged shipment on
                                the shipper's or recipient’s premises and to retrieve it for inspection at
                                an Amazon location. Amazon shall be entitled to require proof in respect
                                of any claim that the goods were undamaged when transit commenced.
                            </li>
                            <li>
                                Claims for Loss: All claims for loss must be received by Amazon in writing
                                within 21 days after the shipment is accepted by Amazon.
                            </li>
                            <li>
                                No claim for loss, damage will be entertained until all invoices and
                                charges have been paid. The amount of any such claim will not be deducted
                                from any dues owed to Amazon.
                            </li>
                        </ul>
                        <h3>What reason should you select for your Claim?</h3>
                        <h4>My Shipment is received in damaged condition</h4>
                        <p>
                            If a package arrives damaged and the damage is proven to be caused by us,you
                            may receive the cost of the items in the package under this reason. If claim
                            is found to be devoid of required proofs the status will change to ‘Missing
                            information’ within 2 days, post which we will wait for 24 hours for you to
                            share proof, before rejecting the claim on the 2nd day if no proof is
                            received. This type of claim has to be raised within 24 hours from the
                            delivery date
                        </p>
                        <h4>My Shipment is lost intransit</h4>
                        <p>
                            If the package's tracking status hasn't been updated for 10 days past the
                            estimated arrival date/estimated delivery date to indicate it was delivered,
                            please report it as a "My Shipment was not delivered" package. If they are
                            unable to find it, you may receive the cost of the items in the package upto
                            the amount as per the liability. Packages without a pickups can will not be
                            refunded as it indicates it was not received. This type of claim has to be
                            raised within 60 days from the pickup date.
                        </p>
                        <h4>My shipments shows delivered but is not received</h4>
                        <p>
                            If the tracking information shows that the package was delivered, but the
                            recipient contacts you and reports that they cannot find it, please follow
                            these steps before reporting it as Delivered not received.
                        </p>
                        <ul className="list-style-3">
                            <li>
                                Confirm that 24 hours have passed since the package was expected to be
                                delivered
                            </li>
                            <li>
                                <strong>Ask the customer to:</strong>
                                <ul className="list-style-3 mt-2">
                                    <li>Check with the security/neighbour if the shipment was delivered</li>
                                    <li>Confirm that no one else accepted the delivery</li>
                                </ul>
                            </li>
                            <li>
                                This type of claim has to be raised with in 24 hours from the delivery
                                date.
                            </li>
                        </ul>
                        <h4>My shipment shows delivered,but the item is missing/different</h4>
                        <p>
                            If the tracking shows that the shipment was delivered and recipient or
                            shipper claims to have received the package, but the contents in side were
                            missing/different, then please follow raise under this reason. If claim is
                            found to be devoid of required proofs, the status will change to ‘Missing
                            information’ in 2 days, post which we will wait for 24 hours for you to
                            share proof,before rejecting the claim on 2nd day This type of claim has to
                            be raised with in 24 hours from the delivery date.
                        </p>
                        <h3>Amazon Claim Timelines &amp; Statuses</h3>
                        <ul className="list-style-3">
                            <li>
                                My Shipment is received in damaged condition – 20 days from date of claim
                                creation or from date of submission of proofs, which ever is later.
                            </li>
                            <li>
                                My Shipment is lost intransit – 20 days from date of claim creation.
                            </li>
                            <li>
                                My shipment shows delivered but is not received – 20 days from date of
                                claim creation
                            </li>
                            <li>
                                My shipment shows delivered, but the item is missing/different – 20 days
                                from date of creation or from date of submission of proofs,
                                Whicheverislater?{" "}
                            </li>
                            <li>
                                <strong>Claim statuses:</strong>
                                <ul className="list-style-3 mt-2">
                                    <li>
                                        Refund filed - Your claim is approved &amp; refund is getting
                                        processed.
                                    </li>
                                    <li>
                                        Refund completed – Your claim is approved &amp; refund has been
                                        processed{" "}
                                    </li>
                                    <li>Denied – Your claim is rejected</li>
                                    <li>
                                        Pending Information – We need additional proof store solve these
                                        claims. Please refer comments for the type(s) of proof required.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <h3>Invoice</h3>
                        <h4>What is a valid invoice?</h4>
                        <p>
                            An invoice is a written document sent by a seller to its buyer after or at
                            the time of delivering goods or rendering services. The primary purpose of
                            sending an invoice is to request payment from the buyer when it’s due.
                        </p>
                        <p>
                            An invoice is considered valid only if it contains the details required by
                            the local regulatory laws. Besides, a valid invoice must also comply with
                            country-specific sales or value added tax laws and regulations where the
                            company operates. The value of goods and services mentioned in an invoice
                            becomes a base for calculating, collecting, and remitting tax.
                        </p>
                        <h4>What are the major details required for an invoice?</h4>
                        <p>
                            Although each country may have its own invoice requirements, a typical
                            invoice should possess the following critical details:
                        </p>
                        <ul className="list-style-3">
                            <li>The word “Tax Invoice” marked clearly at the top</li>
                            <li>Business name, address, and contact details With GSTIN</li>
                            <li>Client name, address, and contact details with GSTIN</li>
                            <li>Project address (if it’s different from the usual business address)</li>
                            <li>Invoice number</li>
                            <li>Invoice date</li>
                            <li>Payment terms and due date</li>
                            <li>
                                Description of services rendered or products delivered with HSN CODE
                            </li>
                            <li>Quantity of products or services</li>
                            <li>Proper GST classification required</li>
                            <li>Amount due (in local currency)</li>
                            <li>Taxes, if applicable</li>
                            <li>
                                Mode of payment such as ECH, credit card, UPI , &amp; COD (cash on
                                delivery)
                            </li>
                        </ul>
                        <p>
                            Businesses can assign a number to an invoice in chronological order or
                            choose unique identifiers for each customer, product or service, or
                            geographical region. Assigning a unique number to each invoice helps quickly
                            retrieve necessary information when required for filing GST or sales tax
                            returns and auditing purposes.
                        </p>
                        <h4>Invoice Penalty &amp; clauses</h4>
                        <ul className="list-style-3">
                            <li>
                                If we found any seller who is uploading the false invoice or have uploaded
                                a PI (Performa invoice), Delivery Challan or declaration, while
                                manifesting the shipment. The seller would be penalized for Rs 2000/- (Per
                                invoice) and the action would be taken against the seller.
                            </li>
                            <li>
                                If any shipment which has been caught the sales tax department or any
                                other government authorities, the seller would be penalized according to
                                the violation of the rules &amp; regulatory terms as per the state or
                                region + 10,000/- (It can be upto 200% as defined by the in-charge or the
                                officer).
                            </li>
                        </ul>
                    </div>

                </div>

                <FreeTrialArea />

                <Footer />
            </>
        );
    }
}

export default Community;