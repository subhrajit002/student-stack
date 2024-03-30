import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar';

const Navbar = () => {

    const User = null;
    return (
        <div className="iq-top-navbar">
            <div className="iq-navbar-custom">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <div className="iq-navbar-logo d-flex justify-content-between">
                        <Link to="/">
                            <img src="../assets/images/logo.png" className="img-fluid" alt="" />
                            <span>Student Stack</span>
                        </Link>
                        <div className="iq-menu-bt align-self-center">
                            <div className="wrapper-menu">
                                <div className="main-circle"><i className="ri-menu-line"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="iq-search-bar device-search">
                        <form action="#" className="searchbox">
                            <Link className="search-link" to="/"><i className="ri-search-line"></i></Link>
                            <input type="text" className="text search-input" placeholder="Search here..." />
                        </form>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-label="Toggle navigation">
                        <i className="ri-menu-3-line"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ms-auto navbar-list">
                            <li>
                                <Link to="../dashboard/index.html" className="  d-flex align-items-center">
                                    <i className="ri-home-line"></i>
                                </Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link to="#" className="search-toggle   dropdown-toggle" id="notification-drop"
                                    data-bs-toggle="dropdown">
                                    <i className="ri-notification-4-line"></i>
                                </Link>
                                <div className="sub-drop dropdown-menu" aria-labelledby="notification-drop">
                                    <div className="card shadow-none m-0">
                                        <div className="card-header d-flex justify-content-between bg-primary">
                                            <div className="header-title bg-primary">
                                                <h5 className="mb-0 text-white">All Notifications</h5>
                                            </div>
                                            <small className="badge  bg-light text-dark">4</small>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item ">
                                {
                                    User === null ?
                                        <button type="button" class="btn btn-primary"><Link to="/Auth" style={{fontSize:"15px"}} className='nav-item nav-link'>Log in</Link></button> :
                                        <>
                                            {/* <Avatar backgroundColor="#009dff" px="3px" py="10px" color="white" borderRadius="50%" ><Link to="/User" style={{ color: "whtie", textDecoration: "none" }} >S</Link></Avatar> */}
                                            <Avatar />
                                        </>
                                }

                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
