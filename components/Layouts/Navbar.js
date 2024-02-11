import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';
// import Image from "next/image"
class Navbar extends Component {

    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <>
                <div id="navbar" className="navbar-area">
                    <div className="main-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/">
                                    <a className="navbar-brand">
                                        <img src="/images/logo-cropped.svg" className="hidden md:block" alt="logo" style={{
                                            height:"50px", width:"150px"
                                        }} />
                                    </a>
                                </Link>

                                <button 
                                    onClick={this.toggleNavbar} 
                                    className={classTwo}
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link href="#">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    Products <i className='bx bx-chevron-down'></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu mega-dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/domestic-shipping" activeClassName="active">
                                                        <a className="nav-link">domestic shopping </a>
                                                    </Link>
                                           
                                                    <Link href="/index-chatbot" activeClassName="active">
                                                        <a className="nav-link">B2B and Bulk Shipping</a>
                                                    </Link>
                                                
                                                </li>

                                            
                                            </ul>
                                        </li>

                                    


                               

                                        <li className="nav-item">
                                            <Link href="/pricing" activeClassName="active">
                                                <a className="nav-link">Pricing</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="#">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    Partners 
                                                </a>
                                            </Link>

                                            {/* <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/services" activeClassName="active">
                                                        <a className="nav-link">Services</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/services2" activeClassName="active">
                                                        <a className="nav-link">Services Two</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/services3" activeClassName="active">
                                                        <a className="nav-link">Services Three</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/service-details" activeClassName="active">
                                                        <a className="nav-link">Service Details</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="#">
                                                        <a className="nav-link" onClick={e => e.preventDefault()}>
                                                            Features <i className='bx bx-chevron-right float-right'></i>
                                                        </a>
                                                    </Link>

                                                    <ul className="dropdown-menu">
                                                        <li className="nav-item">
                                                            <Link href="/features" activeClassName="active">
                                                                <a className="nav-link">Features One</a>
                                                            </Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link href="/features2" activeClassName="active">
                                                                <a className="nav-link">Features Two</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
  
                                                <li className="nav-item">
                                                    <Link href="/team" activeClassName="active">
                                                        <a className="nav-link">Team</a>
                                                    </Link>
                                                </li> 

                                                <li className="nav-item">
                                                    <Link href="/pricing" activeClassName="active">
                                                        <a className="nav-link">Pricing</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/faq" activeClassName="active">
                                                        <a className="nav-link">FAQ</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/login" activeClassName="active">
                                                        <a className="nav-link">Log In</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/signup" activeClassName="active">
                                                        <a className="nav-link">Sign Up</a>
                                                    </Link>
                                                </li>
 
                                                <li className="nav-item">
                                                    <Link href="/404" activeClassName="active">
                                                        <a className="nav-link">404 Error Page</a>
                                                    </Link>
                                                </li>
                                            </ul> */}
                                        </li>
 


                                        <li className="nav-item">
                                            <Link href="#">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    Track Orders
                                                </a>
                                            </Link>

                                         
                                        </li>
 
                                        <li className="nav-item">
                                            <Link href="/contact" activeClassName="active">
                                                <a className="nav-link">Contact</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="others-options ms-auto">
                                    <Link href="/login">
                                        <a className="optional-btn">
                                            <i className="bx bx-log-in"></i> Log In <span></span>
                                        </a>
                                    </Link>
                                    <Link href="/contact">
                                        <a className="default-btn">
                                           Sign up <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Navbar;