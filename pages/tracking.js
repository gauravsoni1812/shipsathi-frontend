import React, { Component } from 'react';
import NavbarThree from '../components/Layouts/NavbarThree';
import PageTitleArea from '../components/Common/PageTitleArea';
import FreeTrialArea from '../components/Common/FreeTrialArea';
import Footer from '../components/Layouts/Footer';

class Tracking extends Component {
    constructor(props) {
        super(props);

        // Initialize state with show set to false
        this.state = {
            show: false,
        };
    }

    printGaurav = () => {
        console.log('gaurav');

        // Use this.setState to update the state
        this.setState({
            show: true,
        });

        console.log(this.state.show);
    }


    render() {
        return (
            <>
                <NavbarThree />

                <PageTitleArea
                    pageTitle="Tracking"
                />

                <div _ngcontent-imy-c104="" className="form" style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "34px 40%"
                }}>
                    <h4 _ngcontent-imy-c104="" className="">
                        Track Your Shipment
                    </h4>
                    <div _ngcontent-imy-c104="" className="input-box-wrapper">
                        <div _ngcontent-imy-c104="" className="input-form" style={{
                            padding: "20px 0px"
                        }}>
                            <input
                                _ngcontent-imy-c104=""
                                type="text"
                                placeholder="LR/AWB Number"
                                fdprocessedid="28v7df"
                                style={{
                                    padding: "1rem",
                                    borderRadius: '20px'
                                }} 
                            />
                        </div>
                        <div _ngcontent-imy-c104="" className="search-form">

                            <button
                                className="border-radius-12 btn-blue"
                                fdprocessedid="vn08s" style={{
                                    border: "none",
                                    padding: "6px 34px",
                                    borderRadius: "9px",
                                    color: "white",
                                    background: "#753fdf",
                                }}
                            >
                                Track
                            </button>

                        </div>
                    </div>
                </div>

                {this.state.show && (
                    <div>
                        {/* Content to show when 'show' is true */}
                        <>
                            <div _ngcontent-lyw-c105="" className="row">
                                <div _ngcontent-lyw-c105="" className="col-md-12">
                                    <div _ngcontent-lyw-c105="" className="card">
                                        <div _ngcontent-lyw-c105="" className="card-body py-0">
                                            <div _ngcontent-lyw-c105="" className="row pt-10 pb-10">
                                                <div
                                                    _ngcontent-lyw-c105=""
                                                    className="col-md-2 col-lg-2 mb-1 mb-md-0 mb-lg-0"
                                                >
                                                    <span _ngcontent-lyw-c105="" className="track-label">
                                                        Courier
                                                    </span>
                                                    <span _ngcontent-lyw-c105="" className="track-text">
                                                        Delhivery 10kg
                                                    </span>
                                                </div>
                                                <div
                                                    _ngcontent-lyw-c105=""
                                                    className="col-md-2 col-lg-2 mb-1 mb-md-0 mb-lg-0 bl-1"
                                                >
                                                    <span _ngcontent-lyw-c105="" className="track-label">
                                                        Tracking ID{" "}
                                                    </span>
                                                    <span _ngcontent-lyw-c105="" className="track-text">
                                                        13090312399143
                                                    </span>
                                                </div>
                                                <div
                                                    _ngcontent-lyw-c105=""
                                                    className="col-md-3 col-lg-3 mb-1 mb-md-0 mb-lg-0 bl-1"
                                                >
                                                    <span _ngcontent-lyw-c105="" className="track-label">
                                                        Order ID{" "}
                                                    </span>
                                                    <span _ngcontent-lyw-c105="" className="track-text">
                                                        eb229735-b875-4c2e-86bb-8
                                                    </span>
                                                </div>
                                                <div
                                                    _ngcontent-lyw-c105=""
                                                    className="col-md-5 col-lg-5 mb-1 mb-md-0 mb-lg-0 bl-1"
                                                >
                                                    <span _ngcontent-lyw-c105="" className="track-label">
                                                        Last Update{" "}
                                                    </span>
                                                    <span _ngcontent-lyw-c105="" className="track-text">
                                                        <strong _ngcontent-lyw-c105="" className="text-success">
                                                            DELIVERED
                                                        </strong>{" "}
                                                        on 1/16/2024 12:39:36.0020000
                                                    </span>
                                                </div>
                                            </div>
                                            <div _ngcontent-lyw-c105="" className="row pt-10 pb-10 bt-1">
                                                <div _ngcontent-lyw-c105="" className="col-md-12">
                                                    <span _ngcontent-lyw-c105="" className="track-label">
                                                        Order Placed On
                                                    </span>
                                                    <span _ngcontent-lyw-c105="" className="track-text">
                                                        Jan 13, 2024, 10:47:08 AM
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div _ngcontent-lyw-c105="" className="row">
                                <div _ngcontent-lyw-c105="" className="col-md-8">
                                    <div _ngcontent-lyw-c105="" className="card">
                                        <div _ngcontent-lyw-c105="" className="card-body">
                                            <div _ngcontent-lyw-c105="" className="row">
                                                <div _ngcontent-lyw-c105="" className="col-md-12">
                                                    <div _ngcontent-lyw-c105="" className="process-wrapper">
                                                        <div _ngcontent-lyw-c105="" id="progress-bar-container">
                                                            <ul _ngcontent-lyw-c105="">
                                                                <li
                                                                    _ngcontent-lyw-c105=""
                                                                    className="step step01 active"
                                                                    style={{ width: "25%" }}
                                                                >
                                                                    <div _ngcontent-lyw-c105="" className="step-inner">
                                                                        Order Placed
                                                                    </div>
                                                                </li>
                                                                <li
                                                                    _ngcontent-lyw-c105=""
                                                                    className="step step01 active"
                                                                    style={{ width: "25%" }}
                                                                >
                                                                    <div _ngcontent-lyw-c105="" className="step-inner">
                                                                        In Transit
                                                                    </div>
                                                                </li>
                                                                <li
                                                                    _ngcontent-lyw-c105=""
                                                                    className="step step01 active"
                                                                    style={{ width: "25%" }}
                                                                >
                                                                    <div _ngcontent-lyw-c105="" className="step-inner">
                                                                        Out For Delivery
                                                                    </div>
                                                                </li>
                                                                <li
                                                                    _ngcontent-lyw-c105=""
                                                                    className="step step01 active"
                                                                    style={{ width: "25%" }}
                                                                >
                                                                    <div _ngcontent-lyw-c105="" className="step-inner">
                                                                        Delivered
                                                                    </div>
                                                                </li>
                                                                {/**/}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/**/}
                                                    {/**/}
                                                </div>
                                            </div>
                                            <div _ngcontent-lyw-c105="" className="row bt-1">
                                                <div _ngcontent-lyw-c105="" className="col-md-12">
                                                    <div
                                                        _ngcontent-lyw-c105=""
                                                        className="vertical-timeline pd-15 xs-pd-10 xs-pd-btm-0"
                                                    >
                                                        <ul
                                                            _ngcontent-lyw-c105=""
                                                            className="scrollbar xs-overflow-y-hidden"
                                                            style={{ maxHeight: 317 }}
                                                        >
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 12:39
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Delivered{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 12:39
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Delivered{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 12:39
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Delivered{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 12:39
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Delivered{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 12:39
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Delivered{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 12:39
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Delivered{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 12:39
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Delivered{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 12:39
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Delivered{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 12:39
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Delivered{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 12:39
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Delivered{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 12:39
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Delivered{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 12:07
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong> Out
                                                                            for Delivery{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 12:07
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong> Out
                                                                            for Delivery{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 12:07
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong> Out
                                                                            for Delivery{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 12:07
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong> Out
                                                                            for Delivery{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 12:07
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong> Out
                                                                            for Delivery{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 12:07
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong> Out
                                                                            for Delivery{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 12:07
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong> Out
                                                                            for Delivery{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 12:07
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong> Out
                                                                            for Delivery{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 12:07
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong> Out
                                                                            for Delivery{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 12:07
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong> Out
                                                                            for Delivery{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 12:07
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong> Out
                                                                            for Delivery{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 10:00
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong> Out
                                                                            for Delivery{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 10:00
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong> Out
                                                                            for Delivery{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 10:00
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong> Out
                                                                            for Delivery{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 10:00
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong> Out
                                                                            for Delivery{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 10:00
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong> Out
                                                                            for Delivery{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 10:00
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong> Out
                                                                            for Delivery{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 10:00
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong> Out
                                                                            for Delivery{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 10:00
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong> Out
                                                                            for Delivery{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 10:00
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong> Out
                                                                            for Delivery{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 10:00
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong> Out
                                                                            for Delivery{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 10:00
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong> Out
                                                                            for Delivery{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 05:11
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Undelivered{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 05:11
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Undelivered{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 05:11
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Undelivered{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 05:11
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Undelivered{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 05:11
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Undelivered{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 05:11
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Undelivered{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 05:11
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Undelivered{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 05:11
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Undelivered{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 05:11
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Undelivered{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 05:11
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Undelivered{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 05:11
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Undelivered{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 05:11
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 05:11
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 05:11
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 05:11
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 05:11
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 05:11
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 05:11
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 05:11
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 05:11
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 05:11
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 05:11
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 04:49
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 04:49
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 04:49
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 04:49
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 04:49
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 04:49
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 04:49
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 04:49
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 04:49
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 04:49
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Nasrullaganj_RujanKhedi_D (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 04:49
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 00:49
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 00:49
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 00:49
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 00:49
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 00:49
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 00:49
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 00:49
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 00:49
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 00:49
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 00:49
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 00:49
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        16{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 08:58
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 08:58
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 08:58
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 08:58
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 08:58
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 08:58
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 08:58
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 08:58
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 08:58
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 08:58
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 08:58
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 08:46
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 08:46
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 08:46
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 08:46
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 08:46
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 08:46
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 08:46
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 08:46
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 08:46
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 08:46
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Bhopal_Pipaliya_H (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 08:46
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 03:40
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 03:40
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 03:40
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 03:40
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 03:40
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 03:40
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 03:40
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 03:40
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 03:40
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 03:40
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 03:40
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 01:53
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 01:53
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 01:53
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 01:53
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 01:53
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 01:53
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 01:53
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 01:53
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 01:53
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 01:53
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 01:53
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 01:36
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 01:36
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 01:36
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 01:36
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 01:36
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 01:36
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 01:36
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 01:36
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 01:36
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 01:36
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Sagar_Pagara_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 01:36
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        15{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 18:27
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        14{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 18:27
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        14{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 18:27
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        14{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 18:27
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        14{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 18:27
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        14{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 18:27
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        14{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 18:27
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        14{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 18:27
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        14{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 18:27
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        14{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 18:27
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        14{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 18:27
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        14{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 18:27
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        14{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 18:27
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        14{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 18:27
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        14{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 18:27
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        14{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 18:27
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        14{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 18:27
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        14{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 18:27
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        14{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 18:27
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        14{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 18:27
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        14{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 18:27
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        14{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 18:27
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        14{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 21:15
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 21:15
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 21:15
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 21:15
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 21:15
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 21:15
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 21:15
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 21:15
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 21:15
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 21:15
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 21:15
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 21:15
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 21:15
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 21:15
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 21:15
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 21:15
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 21:15
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 21:15
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 21:15
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 21:15
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 21:15
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 21:15
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 16:24
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 16:24
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 16:24
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 16:24
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 16:24
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 16:24
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 16:24
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 16:24
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 16:24
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 16:24
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 16:24
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            In-Transit{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 10:47
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Pickup Scheduled{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 10:47
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Pickup Scheduled{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 10:47
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Pickup Scheduled{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 10:47
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Pickup Scheduled{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 10:47
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Pickup Scheduled{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 10:47
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Pickup Scheduled{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 10:47
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Pickup Scheduled{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 10:47
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Pickup Scheduled{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 10:47
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Pickup Scheduled{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 10:47
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Pickup Scheduled{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            <li _ngcontent-lyw-c105="">
                                                                <div _ngcontent-lyw-c105="" className="row status-card">
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-5 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Location: </strong>{" "}
                                                                                Jabalpur_Timri_P (Madhya Pradesh)
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-4 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <span _ngcontent-lyw-c105="" className="text">
                                                                                <strong _ngcontent-lyw-c105="">Time: </strong> 10:47
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        _ngcontent-lyw-c105=""
                                                                        className="col-md-3 col-xs-24"
                                                                    >
                                                                        <p _ngcontent-lyw-c105="">
                                                                            <strong _ngcontent-lyw-c105="">Remark: </strong>{" "}
                                                                            Pickup Scheduled{" "}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <span _ngcontent-lyw-c105="" className="number">
                                                                    <span _ngcontent-lyw-c105="">
                                                                        13{" "}
                                                                        <label _ngcontent-lyw-c105="" className="fs-14">
                                                                            January
                                                                        </label>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                            {/**/}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/**/}
                                        </div>
                                    </div>
                                </div>
                                <div _ngcontent-lyw-c105="" className="col-md-4" />
                            </div>
                        </>
                    </div>
                )}


                <FreeTrialArea />

                <Footer />
            </>
        );
    }
}

export default Tracking;

