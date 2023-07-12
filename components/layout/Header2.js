import Link from 'next/link';
import Image from 'next/image'
import React from 'react';
import MobileMenu from './MobileMenu';
import LogoWhite from './../../public/images/acecor_header.png';
import LogoDark from './../../public/images/acecor_header.png';

const Header2 = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }) => {



    return (
        <>

            <header className={`main-header header-style-two ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>
                {/* Header Top */}
                <div className="header-top">
                    <div className="inner-container">
                        <div className="top-left">
                            {/* Info List */}
                            <ul className="list-style-one">
                                <li><i className="fa fa-envelope" /> <Link href="mailto:ccm.ucc.edu.gh">ccm.ucc.edu.gh</Link></li>
                                <li><i className="fa fa-map-marker" /> Cape Coast, Ghana</li>
                            </ul>
                        </div>
                        <div className="top-right">
                            <ul className="useful-links">
                                <li><Link href="/page-contact">Contact</Link></li>
                            </ul>
                            <ul className="social-icon-one">
                                <li><a href="https://www.facebook.com/ccmuccgh" target="_blank"><i className="fab fa-facebook" /></a></li>
                                <li><a href="https://www.linkedin.com/company/centre-for-coastal-management-africa-centre-of-excellence-in-coastal-resilience/" target="_blank"><i className="fab fa-linkedin" /></a></li>
                                <li><a href="https://www.instagram.com/acecor_ccm/" target="_blank"><i className="fab fa-instagram" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Header Top */}
                <div className="header-lower">
                    <div className="container-fluid">
                        {/* Main box */}
                        <div className="main-box">
                            <div className="logo-box">
                                <div className="logo"><Link href="/"><Image src={LogoDark} title='Amiso' /></Link></div>
                            </div>
                            {/*Nav Box*/}
                            <div className="nav-outer">
                                <nav className="nav main-menu">
                                    <ul className="navigation">
                                        <li className=" "><Link href="/">Home</Link>
                                            {/*<ul>*/}
                                            {/*    <li><Link href="/">Home page 01</Link></li>*/}
                                            {/*    <li><Link href="/index-2">Home page 02</Link></li>*/}
                                            {/*    <li><Link href="/index-3">Home page 03</Link></li>*/}
                                            {/*    <li className="dropdown"><Link href="/#">Header Styles</Link>*/}
                                            {/*        <ul>*/}
                                            {/*            <li><Link href="/">Header Style One</Link></li>*/}
                                            {/*            <li><Link href="/index-2">Header Style Two</Link></li>*/}
                                            {/*            <li><Link href="/index-3">Header Style three</Link></li>*/}
                                            {/*        </ul>*/}
                                            {/*    </li>*/}
                                            {/*</ul>*/}
                                        </li>
                                        <li className=""><Link href="/page-about">About</Link>
                                            {/*<ul>*/}
                                            {/*    <li><Link href="/page-about">About</Link></li>*/}
                                            {/*    <li className="dropdown"><Link href="/#">Projects</Link>*/}
                                            {/*        <ul>*/}
                                            {/*            <li><Link href="/page-projects">Projects Grid</Link></li>*/}
                                            {/*            <li><Link href="/page-project-details">Project Details</Link></li>*/}
                                            {/*        </ul>*/}
                                            {/*    </li>*/}
                                            {/*    <li className="dropdown"><Link href="/#">Team</Link>*/}
                                            {/*        <ul>*/}
                                            {/*            <li><Link href="/page-team">Team Grid</Link></li>*/}
                                            {/*            <li><Link href="/page-team-details">Team Details</Link></li>*/}
                                            {/*        </ul>*/}
                                            {/*    </li>*/}
                                            {/*    <li><Link href="/page-testimonial">Testimonial</Link></li>*/}
                                            {/*    <li><Link href="/page-geoportal">FAQ</Link></li>*/}
                                            {/*    <li><Link href="/page-404">Page 404</Link></li>*/}
                                            {/*</ul>*/}
                                        </li>
                                        <li className=""><Link href="/page-geoportal">Geoportal</Link>
                                            {/*<ul>*/}
                                            {/*    <li><Link href="/page-services">Services Grid</Link></li>*/}
                                            {/*    <li><Link href="/page-service-details">Service Details</Link></li>*/}
                                            {/*</ul>*/}
                                        </li>
                                        <li className=""><Link href="/page-dashboard">Dashboard</Link>
                                            {/*<ul>*/}
                                            {/*    <li><Link href="/news-grid">News Grid</Link></li>*/}
                                            {/*    <li><Link href="/news-details">News Details</Link></li>*/}
                                            {/*</ul>*/}
                                        </li>
                                        <li><Link href="/page-data-catalog">Data Catalog</Link></li>
                                    </ul>
                                </nav>
                                {/* Main Menu End*/}
                            </div>
                            <div className="outer-box">
                                <div className="ui-btn-outer">
                                    <button className="ui-btn ui-btn search-btn" onClick={handleToggle}>
                                        <span className="icon lnr lnr-icon-search" />
                                    </button>
                                </div>
                                <Link href="tel: +233332091855" className="info-btn">
                                    <i className="icon fa fa-phone" />
                                    <small>Call Anytime</small>+233 33 209 1855
                                </Link>
                                {/* Mobile Nav toggler */}
                                <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                    <div className="menu-backdrop" onClick={handleRemove} />
                    {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="nav-logo"><Link href="/"><Image src={LogoWhite} title='Amiso' /></Link></div>
                            <div className="close-btn" onClick={handleRemove}><i className="icon fa fa-times" /></div>
                        </div>
                        <MobileMenu />
                        <ul className="contact-list-one">
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <i className="icon lnr-icon-phone-handset" />
                                    <span className="title">Call Now</span>
                                    <a href="tel: +233332091855">+233 33 209 1855</a>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-envelope1" />
                                    <span className="title">Send Email</span>
                                    <Link href="/mailto:ccm.ucc.edu.gh">ccm.ucc.edu.gh</Link>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-clock" />
                                    <span className="title">Send Email</span>
                                    Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                                </div>
                            </li>
                        </ul>
                        <ul className="social-links">
                            <li><a href="https://www.facebook.com/ccmuccgh" target="_blank"><i className="fab fa-facebook" /></a></li>
                            <li><a href="https://www.linkedin.com/company/centre-for-coastal-management-africa-centre-of-excellence-in-coastal-resilience/" target="_blank"><i className="fab fa-linkedin" /></a></li>
                            <li><a href="https://www.instagram.com/acecor_ccm/" target="_blank"><i className="fab fa-instagram" /></a></li>
                        </ul>
                    </nav>
                </div>{/* End Mobile Menu */}
                {/* Header Search */}
                <div className="search-popup">
                    <span className="search-back-drop" />
                    <button className="close-search" onClick={handleToggle}><span className="fa fa-times" /></button>
                    <div className="search-inner">
                        <form method="post" action="page-data-catalog">
                            <div className="form-group">
                                <input type="search" name="search-field" placeholder="Search..." required />
                                <button type="submit" > <i className="fa fa-search" /></button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* End Header Search */}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="inner-container">
                            {/*Logo*/}
                            <div className="logo">
                                <Link href="/" title><Image src={LogoDark} title='Amiso' /></Link>
                            </div>
                            {/*Right Col*/}
                            <div className="nav-outer">
                                {/* Main Menu */}
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                        <MobileMenu />
                                    </div>
                                </nav>{/* Main Menu End*/}
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars" /></div>
                            </div>
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
            </header>




        </>
    );
};

export default Header2;