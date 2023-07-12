
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function myModal() {
    const [show, setShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalBody, setModalBody] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const openModal = (title, body) => {
        setModalTitle(title);
        setModalBody(body);
        handleShow();
    };
    return (
        <>
            <footer className="main-footer">
                <div className="bg bg-pattern-10" />
                {/*Widgets Section*/}
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-4 col-lg-12 col-md-12">
                                <div className="footer-widget about-widget">
                                    <h6 className="widget-title">ACECOR</h6>
                                    <div className="text">Achieving sustainable management and use of coastal environment through training of human resource and engaging in demand driven research to support coastal policy development in Africa</div>
                                    <div className="text">Cape Coast, Ghana</div>
                                    <ul className="contact-info">
                                        <li><i className="fa fa-envelope" /> <a href="mailto:ccm@ucc.edu.gh">ccm@ucc.edu.gh</a><br /></li>
                                        <li><i className="fa fa-phone-square" /> <a href="tel: +233332091855">+233 33 209 1855</a><br /></li>
                                    </ul>




                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-4 col-lg-4 col-md-4">
                                <div className="footer-widget links-widget">
                                    <h6 className="widget-title">Services</h6>
                                    <ul className="user-links">

                                        <Modal show={show} onHide={handleClose} size="lg">
                                            <Modal.Header closeButton>
                                                <Modal.Title>{modalTitle}</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>{modalBody}</Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>

                                        <li>
                                            <a onClick={() => openModal('Mapping Potential Fishing Zones (PFZS)', 'Sea surface temperature and ocean colour products are useful for monitoring conditions that affect fish distribution. Ocean colour products including Chl-a data provides measurements of phytoplankton abundance. SST measurements are useful for identifying oceanographic features including upwelling and fronts. These features are associated with nutrient enrichment and areas of the ocean where fish aggregate to feed which can be analyzed to generate potential fishing zones.')} role="button">
                                                Mapping Potential Fishing Zones (PFZS)
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={() => openModal('Monitoring and forecasting oceanographic variables', 'The monitoring and forecasting of physical and biological oceanographic variables was successfully implemented during MESA in western Africa. The service utilizes medium resolution optical and thermal EO data, in situ measurements of surface wave characteristics as well as forecast products including sea surface temperature, height, salinity and geostrophic current.\n' +
                                                '\n' +
                                                'During the implementation of the GMES & Africa Coastal and Marine Area Management Project, the service will be further enhanced by incorporating OLCI, SLSTR and SRAL products from Sentinel 3.\n' +
                                                '\n' +
                                                'Two monthly bulletins are produced from this service. The biological oceanographic bulletin targets fisheries managers and fishermen and primarily provides information on the dynamics of the local oceanographic processes within the Guinea Current LME and its impact on fish distribution. The second bulletin, i.e. physical oceanographic bulletin, provides information that describes the evolution and dynamics of the local oceanographic conditions and the potential effect it could have on fishing operations and coastal communities')} role="button">
                                                Monitoring and forecasting oceanographic variables
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={() => openModal('Forecast of ocean conditions', 'Information on ocean waves, currents, winds and sea surface heights is very important to ocean farers for effective navigation and safety at sea. This is crucial as ocean transportation remains the main means of transport of goods and services. Ocean state products provide information to users about their safety at sea and help plan on the safest routes and times of embarkation. This is especially useful to artisanal fishers who most often are at the mercy of the weather and use less sophisticated equipment making them vulnerable at sea\n' +
                                                '\n' +
                                                'Forecasts of ocean condition are disseminated as SMS texts to local fishermen designated as “1” for CALM, “2” for ROUGH, and “3” for DANGEROUS. This dissemination is done through mandated fisheries institutions in the region.\n' +
                                                '\n' +
                                                'On the ground,within the local fishing communities, opinion leaders and chief fishermen are encouraged to share the information received, using flags of different colours. Green represents \'CALM\', yellow goes for \'ROUGH\' and finally the Red flag signifies \'DANGEROUS\'. The flags are often planted at vantage points for other fishermen to locate them easily. Prior to this, they are, of course, educated to interprete the flags.\n' +
                                                'This information are available to all 12 beneficiary countries and most of them are really making good use of it.')} role="button">
                                                Forecast of ocean conditions
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={() => openModal('Generate coastal vulnerability indices', 'The goal of Coastal Vulnerability service is to set up an efficient way of monitoring the coastal environment to address the issues related to coastal erosion in these critical areas. The morphological study of the beaches, with their characteristics and changes will provide relevant information for an efficient monitoring of the coastal areas and implement of sound beach-lagoon management practices. Inputs data will include raster and shapefiles of geomorphological, relief and natural habitats indicators. Winds, wave exposure and net sea level change products from models covering the West African region will be an essential input that will help estimate the effect of ocean and winds to the different types of coastal habitats.\n' +
                                                '\n' +
                                                'Outputs from this service will include raster, shapefiles and figures that describe the degree of vulnerability of the coastal environment.')} role="button">
                                                Our Projects
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={() => openModal('Mapping of coastal ecosystem / habitats', 'Assessment, Monitoring and Mapping of Coastal Zone is essential for ensuring that the coastal area and the adjoining seas are ‘free’ from degradation from both natural processes and human activities. The coastal area mapping services will develop comprehensive and accurate maps of the distributions, quantities and qualities of diverse resources within the coastal zone. It is anticipated that this will help address impacts of natural processes and human activities on coastal habitats such as storm-surge on flora and fauna distribution, mangrove ecosystems and other wetlands. The Coastal Zone Mapping service will develop land-use/land-cover maps of coastal habitats, classification of vegetation and land cover changes. These will provide coastal zone managers and planners information on the drivers and effect of the changes in the different coastal habitats.\n' +
                                                '\n' +
                                                'Coastal sensitivity maps will be produced from a blend of high resolution optical/infrared imageries, social and economic data alongside ecological features. Mapping tools to be developed will adopt a two-stage process to understand and map ecosystem services. Vegetation classification maps for the different coastal habitats will be generated at a regional scale from optical and infra-red imageries. Targeted monitoring of sensitive habitats will be carried out periodically from aerial platforms.\n' +
                                                '\n' +
                                                'Outputs from the service will be disseminated via a web tool and would provide critical coastal zone geospatial data needed for prudent management of resources and infrastructure.')} role="button">
                                                Mapping of coastal ecosystem / habitats
                                            </a>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-4 col-lg-4 col-md-4">
                                <div className="footer-widget links-widget">
                                    <h6 className="widget-title">Useful Links</h6>
                                    <ul className="user-links">
                                        <li> <a href="">University Of CapeCoast</a></li>




                                        <h6 className="widget-title mt-5">Follow Us!</h6>
                                        <ul className="social-icon-two">
                                            <li><a href="https://www.facebook.com/ccmuccgh" target="_blank"><i className="fab fa-facebook" /></a></li>
                                            <li><a href="https://www.linkedin.com/company/centre-for-coastal-management-africa-centre-of-excellence-in-coastal-resilience/" target="_blank"><i className="fab fa-linkedin" /></a></li>
                                            <li><a href="https://www.instagram.com/acecor_ccm/" target="_blank"><i className="fab fa-instagram" /></a></li>
                                        </ul>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Footer Bottom*/}
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="copyright-text">© Copyright 2023 by  <a href="ccm.ucc.edu.gh">ccm.ucc.edu.gh</a></div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default myModal;