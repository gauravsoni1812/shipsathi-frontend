import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class NavbarTwo extends Component {

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
                <div id="navbar" className="navbar-area navbar-style-two">
                    <div className="main-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                    <a className="navbar-brand">
                                        <img src="/images/NEWLOGO1.svg" className="hidden md:block" height={100}  style={{ maxWidth: "250px", width: "50vw" }} alt="logo" />
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
                                                        <a className="nav-link">B2B and Bulk Shipping </a>
                                                    </Link>
                                           
                                                    {/* <Link href="/index-chatbot" activeClassName="active">
                                                        <a className="nav-link">Domestic Shipping</a>
                                                    </Link> */}
                                                
                                                </li>

                                            
                                            </ul>
                                        </li>


                                        <li className="nav-item">
                                            <Link href="/pricing" activeClassName="active">
                                                <a className="nav-link">Pricing</a>
                                            </Link>
                                        </li>



                                        <li className="nav-item">
                                            <Link href="/partners" activeClassName="active">
                                                <a className="nav-link">Partners</a>
                                            </Link>
                                        </li>
                                      
 
                                    
                                        <li className="nav-item">
                                            <Link href="/tracking" activeClassName="active">
                                                <a className="nav-link">Track Orders</a>
                                            </Link>
                                        </li>
 
                                        <li className="nav-item">
                                            <Link href="/contact" activeClassName="active">
                                                <a className="nav-link">Contact</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="others-options">
                                    <Link href="https://shipsathi-dashboard.vercel.app/signup">
                                        <a className="default-btn mr-3">
                                        <i className="bx bx-log-in"></i> Sign Up  <span></span> 
                                        </a>
                                    </Link>
                                    <Link href="https://shipsathi-dashboard.vercel.app/signin">
                                        <a className="default-btn black-btn">
                                            <i className="bx bx-log-in"></i> Log In <span></span>
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

export default NavbarTwo;