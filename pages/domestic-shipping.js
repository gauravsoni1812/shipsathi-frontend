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

const styles = `/*! CSS Used from: https://fship.in/assets/vendor/bootstrap/css/bootstrap.min.css */
*,::after,::before{box-sizing:border-box;}
h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem;}
p{margin-top:0;margin-bottom:1rem;}
a{color:#007bff;text-decoration:none;background-color:transparent;}
a:hover{color:#0056b3;text-decoration:underline;}
img{vertical-align:middle;border-style:none;}
svg{overflow:hidden;vertical-align:middle;}
h3,h4,h5,h6{margin-bottom:.5rem;font-weight:500;line-height:1.2;}
h3{font-size:1.75rem;}
h4{font-size:1.5rem;}
h5{font-size:1.25rem;}
h6{font-size:1rem;}
.row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px;}
.col-md-4,.col-md-8,.col-sm-12{position:relative;width:100%;padding-right:15px;padding-left:15px;}
@media (min-width:576px){
.col-sm-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;}
}
@media (min-width:768px){
.col-md-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%;}
.col-md-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%;}
}
.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;}
@media (prefers-reduced-motion:reduce){
.btn{transition:none;}
}
.btn:hover{color:#212529;text-decoration:none;}
.btn:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25);}
.btn:disabled{opacity:.65;}
.btn:not(:disabled):not(.disabled){cursor:pointer;}
.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff;}
.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc;}
.btn-primary:focus{color:#fff;background-color:#0069d9;border-color:#0062cc;box-shadow:0 0 0 .2rem rgba(38,143,255,.5);}
.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff;}
.btn-primary:not(:disabled):not(.disabled):active{color:#fff;background-color:#0062cc;border-color:#005cbf;}
.btn-primary:not(:disabled):not(.disabled):active:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5);}
.tab-content>.tab-pane{display:none;}
.w-100{width:100%!important;}
.pt-5{padding-top:3rem!important;}
.pb-5{padding-bottom:3rem!important;}
@media print{
*,::after,::before{text-shadow:none!important;box-shadow:none!important;}
img{page-break-inside:avoid;}
h3,p{orphans:3;widows:3;}
h3{page-break-after:avoid;}
}
/*! CSS Used from: https://fship.in/assets/css/main.css */
a:hover,a:focus{color:var(--link-color);text-decoration:none;outline:none;}
.tab-content{padding:15px;}
.btn{font-size:16px;}
.btn.btn-primary{background-color:var(--primary-color);border-color:var(--primary-color);}
/*! CSS Used from: https://fship.in/assets/css/application.css */
.btn-primary{color:#fff!important;background-color:#4a5784!important;}
.btn-primary:hover{background-color:#4a5784!important;border-color:#4a5784!important;}
/*! CSS Used from: https://fship.in/assets/css/style.css */
.txt-center{text-align:center;}
.location-features{text-align:center;}
.location-features svg{width:25px;margin-left:10px;margin-bottom:10px;}
.tab-content>.tab-pane{display:block;} padding: 0px 100px;`

class Pricing extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <section class="first-content txt-center">
                    <div class="container">
                        <h2>Features</h2>
                        <p>Fship are leading enablers to Quick Commerce!</p>
                    </div>
                </section>

                <div className=""  >
                <style dangerouslySetInnerHTML={{ __html: styles }} />
                    <div className="tab-pane" id="cod">
                        <h3 className="txt-center pt-5">Cash On Delivery</h3>
                        <p className="txt-center">
                            No need to choose one. Offer both prepaid &amp; cash on delivery payment
                            options.
                        </p>
                        <div className="row pt-5">
                            <div className="col-md-8 col-sm-12 pt-5">
                                <h5>Get early Cash on Delivery Remittance</h5>
                                <p>
                                    Improve your cash flow. Scale your business faster with early COD
                                    remittance.
                                </p>
                                <a href="https://app.fship.in/register" className="btn btn-primary">
                                    Know More
                                </a>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <img
                                    src="assets/images/cod.png"
                                    alt="Cash On Delivery"
                                    title="Cash On Delivery"
                                    className="w-100"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="pickup">
                        <div className="row pt-5 pb-5">
                            <div className="col-md-4 col-sm-12">
                                <img
                                    src="assets/images/multiple-pickup-location.png"
                                    alt="Multiple Pickup Locations"
                                    title="Multiple Pickup Locations"
                                    className="w-100"
                                />
                            </div>
                            <div className="col-md-8 col-sm-12 pt-5">
                                <h3>Multiple Pickup Locations</h3>
                                <p>
                                    Do you have multiple warehouses or sell your products through various
                                    vendors? Add unlimited warehouses to simplify your logistics
                                    operations
                                </p>
                            </div>
                        </div>
                        <div className="row pt-5">
                            <div className="col-md-4 col-sm-12">
                                <div className="location-features">
                                    <svg
                                        aria-hidden="true"
                                        className="e-font-icon-svg e-far-thumbs-up"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z" />
                                    </svg>
                                    <h4>Highly Convenient</h4>
                                    <p>
                                        we let you add all your pickup locations by uploading a bulk pickup
                                        sheet. Now, add as many pickup locations as you want! This feature
                                        is available in all our plans.
                                    </p>
                                </div>
                                <div className="location-features">
                                    <svg
                                        aria-hidden="true"
                                        className="e-font-icon-svg e-fas-shipping-fast"
                                        viewBox="0 0 640 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z" />
                                    </svg>
                                    <h4>Faster Delivery Time</h4>
                                    <p>
                                        Get your product delivered at your customers doorstep by selecting
                                        the nearest pickup location to your buyer’s address. It helps in
                                        faster delivery by eliminating the extra in-transit time.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12 pt-5">
                                <img
                                    src="assets/images/multiple-pickup-location1.jpg"
                                    alt="Multiple Pickup Locations"
                                    title="Multiple Pickup Locations"
                                    className="w-100"
                                />
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="location-features">
                                    <svg
                                        aria-hidden="true"
                                        className="e-font-icon-svg e-fas-arrow-down"
                                        viewBox="0 0 448 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z" />
                                    </svg>
                                    <h4>Lower Shipping Cost</h4>
                                    <p>
                                        By selecting the nearest pickup location to the delivery location,
                                        you also reduce the overall shipping cost.
                                    </p>
                                </div>
                                <div className="location-features">
                                    <svg
                                        aria-hidden="true"
                                        className="e-font-icon-svg e-far-smile-beam"
                                        viewBox="0 0 496 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm84-143.4c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.6-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.2-8.4-25.3-7.1-33.8 3.1zM136.5 211c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3 3.4 1.1 7.4-.5 9.3-3.7l9.5-17zM328 152c-23.8 0-52.7 29.3-56 71.4-.3 3.7 2.1 7.2 5.7 8.3 3.5 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4z" />
                                    </svg>
                                    <h4>Better Customer Satisfaction</h4>
                                    <p>Build trust by going an extra mile for your customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="serviceable">
                        <h3 className="txt-center pt-5">Serviceable Pin Codes</h3>
                        <p className="txt-center">
                            Ship at maximum coverage in just a few clicks, With extensive coverage of
                            29000+ pincodes.
                        </p>
                        <div className="row pt-5">
                            <div className="col-md-8 col-sm-12">
                                <h5>Maximum Coverage with 29000+ pincodes.</h5>
                                <p>
                                    With extensive coverage of 29000+ pincodes, you can reach out to every
                                    corner of the country. Double your sales by having a reach to every
                                    state and town.
                                </p>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <img
                                    src="assets/images/Serviceable-Pin-Codes.jpg"
                                    alt="Serviceable Pin Codes"
                                    title="Serviceable Pin Codes"
                                    className="w-100"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="api-integration">
                        <h3 className="txt-center pt-5">API Integration</h3>
                        <p className="txt-center">
                            API Integration refers to this seamless connectivity. Now stay connected
                            with your store – at all times!
                        </p>
                        <div className="row">
                            <div className="col-md-8 col-sm-12 pt-5">
                                <h5>Flexible API That Meets Your Client's Needs</h5>
                                <h6>
                                    Integrate your eCommerce store with your Fship account and process all
                                    orders from one single platform. Sync the inventory and catalog from
                                    your website to receive all incoming orders into the panel.
                                </h6>
                                <p>
                                    API Integration refers to this seamless connectivity that allows
                                    organizations to automate business processes, and enhance the sharing
                                    and embedding of data between various applications and systems. For
                                    instance, like Gracious aggregates data from various Couriers by
                                    calling their APIs and push to your API system.
                                </p>
                                <a href="https://app.fship.in/register" className="btn btn-primary">
                                    API Docs
                                </a>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <img
                                    src="assets/images/Serviceable-Pin-Codes.jpg"
                                    alt="API Integration"
                                    title="API Integration"
                                    className="w-100"
                                />
                            </div>
                        </div>
                        <h3 className="txt-center pt-5">One API. Many Uses</h3>
                        <p className="txt-center">
                            We’re amazed by the creative uses of our API. Here are some:
                        </p>
                        <div className="row pt-5">
                            <div className="col-md-4 col-sm-12">
                                <div className="location-features">
                                    <svg
                                        aria-hidden="true"
                                        className="e-font-icon-svg e-far-chart-bar"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M396.8 352h22.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-192 0h22.4c6.4 0 12.8-6.4 12.8-12.8V140.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h22.4c6.4 0 12.8-6.4 12.8-12.8V204.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zM496 400H48V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-387.2-48h22.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8z" />
                                    </svg>
                                    <h4>Fship Fulfillment</h4>
                                    <p>
                                        3PLs are always looking for an increased assortment of couriers for
                                        their clients. Our API gives them instant access without disrupting
                                        processes.
                                    </p>
                                </div>
                                <div className="location-features">
                                    <svg
                                        aria-hidden="true"
                                        className="e-font-icon-svg e-fas-boxes"
                                        viewBox="0 0 576 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M560 288h-80v96l-32-21.3-32 21.3v-96h-80c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16zm-384-64h224c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16h-80v96l-32-21.3L256 96V0h-80c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16zm64 64h-80v96l-32-21.3L96 384v-96H16c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16z" />
                                    </svg>
                                    <h4>Organized Operations</h4>
                                    <p>
                                        With a regular incoming order flow, follow a particular procedure
                                        for every shipment.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12 pt-5">
                                <img
                                    src="assets/images/one-api-many-uses.png"
                                    alt="One API. Many Uses"
                                    title="One API. Many Uses"
                                    className="w-100"
                                />
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="location-features">
                                    <svg
                                        aria-hidden="true"
                                        className="e-font-icon-svg e-far-sun"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M494.2 221.9l-59.8-40.5 13.7-71c2.6-13.2-1.6-26.8-11.1-36.4-9.6-9.5-23.2-13.7-36.2-11.1l-70.9 13.7-40.4-59.9c-15.1-22.3-51.9-22.3-67 0l-40.4 59.9-70.8-13.7C98 60.4 84.5 64.5 75 74.1c-9.5 9.6-13.7 23.1-11.1 36.3l13.7 71-59.8 40.5C6.6 229.5 0 242 0 255.5s6.7 26 17.8 33.5l59.8 40.5-13.7 71c-2.6 13.2 1.6 26.8 11.1 36.3 9.5 9.5 22.9 13.7 36.3 11.1l70.8-13.7 40.4 59.9C230 505.3 242.6 512 256 512s26-6.7 33.5-17.8l40.4-59.9 70.9 13.7c13.4 2.7 26.8-1.6 36.3-11.1 9.5-9.5 13.6-23.1 11.1-36.3l-13.7-71 59.8-40.5c11.1-7.5 17.8-20.1 17.8-33.5-.1-13.6-6.7-26.1-17.9-33.7zm-112.9 85.6l17.6 91.2-91-17.6L256 458l-51.9-77-90.9 17.6 17.6-91.2-76.8-52 76.8-52-17.6-91.2 91 17.6L256 53l51.9 76.9 91-17.6-17.6 91.1 76.8 52-76.8 52.1zM256 152c-57.3 0-104 46.7-104 104s46.7 104 104 104 104-46.7 104-104-46.7-104-104-104zm0 160c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z" />
                                    </svg>
                                    <h4>Automated Process</h4>
                                    <p>
                                        With constant syncing, automate your order fulfillment process right
                                        from the start.
                                    </p>
                                </div>
                                <div className="location-features">
                                    <svg
                                        aria-hidden="true"
                                        className="e-font-icon-svg e-fas-shipping-fast"
                                        viewBox="0 0 640 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z" />
                                    </svg>
                                    <h4>Tracking</h4>
                                    <p>
                                        The Track API is used to track the journey of a given Shipment. The
                                        response will give the most recent status update for the Shipment as
                                        well as a history of all previous Checkpoints.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="notification">
                        <div className="row">
                            <div className="col-md-8 col-sm-12 pt-5">
                                <h3>Email &amp; SMS Notifications</h3>
                                <h5>
                                    Get real-time updates, as soon as the products get shipped through
                                    multiple channels. Improve customer service with real-time shipment
                                    updates
                                </h5>
                                <p>
                                    Fship sends shipment notifications as soon as your order gets picked
                                    up from your location. Below are the multiple tracking statuses on
                                    which we send both email and SMS to your customers:
                                </p>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <img
                                    src="assets/images/Notifications.png"
                                    alt="Email & SMS Notifications"
                                    title="Email & SMS Notifications"
                                    className="w-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>



            </>
        );
    }
}

export default Pricing;