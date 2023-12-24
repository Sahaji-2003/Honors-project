import React from 'react'
import { Link } from 'react-router-dom'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'

const itSP = () => {
    return (
        <div className='it_Services_priorites'>
            <HeadComponent /> <br /> <br /> <br />
            <section className="breadcrumbs">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2> <b>IT-Service</b></h2>
                        <ol>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>IT Services</li>
                        </ol>
                    </div>
                </div>
            </section>


            <br />
            <div className="section-title">
                <h2>Services</h2>
                <p>
                    Our team of consultants supports you in your projects related to SAP
                    ANALYTICS - from conception to implementation and documentation.
                </p>
            </div>

            

            <section
                className="why-us section-bg1"
                data-aos="fade-up"
                date-aos-delay={200}
            >
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 d-flex flex-column justify-content-center p-5">
                            <div className="icon-box">
                                <div className="icon">
                                    <i className="bi bi-buildings" />
                                </div>
                                <h2 className="title">
                                    <Link to="/IT-0">SAP Analytics implementation consulting</Link>
                                </h2>
                                <p className="description">
                                    Our team of consultants supports you with your SAP Analytics topics – from conception to implementation and documentation. We use the latest technologies such as SAP Analytics Cloud (SAC), SAP BW4/HANA, SAP DataWarehouseCloud (DWC), SAP Datasphere, S4 HANA Embedded Analytics as well as our many years of experience with established tools such as SAP BW classic (with and without HANA) back.
                                </p>

                            </div>
                            <br />
                            <br />


                            <div className="icon-box">
                                <div className="icon">
                                    <i className="bi bi-buildings" />
                                </div>
                                <h2 className="title">
                                    <Link to="/IT-0">SAP Analytics process consulting</Link>
                                </h2>
                                <p className="description">
                                    We help you to introduce and optimize your processes. Together with you, we develop, for example, naming conventions, architectural guidelines, documentation templates and development and organizational processes. Benefit from our experience and our templates to optimize your setup.
                                </p>

                            </div>

                            <br />
                            <br />



                            <div className="icon-box">
                                <div className="icon">
                                    <i className="bi bi-buildings" />
                                </div>
                                <h2 className="title">
                                    <Link to="/IT-0">SAP Analytics strategy consulting</Link>
                                </h2>
                                <p className="description">
                                    Work with us to develop your SAP Analytics strategy for tools, organization, processes and procedures. Benefit from our experience to make your system and your organization future-proof
                                </p>

                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <br/>
            
            
            <div className="section-title">
                {/* <h2>Service</h2> */}
                <p>
                We rely on the latest technologies as well as our many years of <br/>
                experience with established tools. With innovative, tailor-made solutions for your company, <br/>
                 we support you throughout the entire lifecycle management<br/>
                </p>
            </div>
           


            <section className="features">
          <div className="container">
            
            <br />
            <br />
            <div className="row" data-aos="fade-up">
              <div className="col-md-5">
                {/* <img src="assets/img/features-2.jpg" className="img-fluid" alt="" /> */}

                <img src="assets\img\zp2.jpeg" className="img-fluid" alt="" />

              </div>
              <div className="col-md-7 pt-4">
                <h3>Technology</h3>

                <ul>
                  <li>
                    <i className="bi bi-check" /> SAP BW on/4 HANA
                  </li>
                  <li>
                    <i className="bi bi-check" /> SAP Analytics Cloud (SAC) Reporting & Planning
                  </li>
                  <li>
                    <i className="bi bi-check" /> SAP Datasphere
                  </li>
                  <li>
                    <i className="bi bi-check" /> SAP Data Warehouse Cloud (DWC)
                  </li>
                  <li>
                    <i className="bi bi-check" /> S4/HANA Reporting & Planning
                  </li>
                  <li>
                    <i className="bi bi-check" /> SAP Data Intelligence
                  </li>
                  <li>
                    <i className="bi bi-check" /> SAP BI IP & BPC Embedded
                  </li>
                  <li>
                    <i className="bi bi-check" /> HANA Native Reproduction
                  </li>
                </ul>
              </div>
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-md-5 order-1 order-md-2">
                <img src="assets\img\zp21.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-md-7 pt-5 order-2 order-md-1">

                <h3>Lifecycle Management
                </h3>
                <p className="fst-italic">
                  We carry out the followings.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check" /> SAP Analytics Project Management</li>
                  <li>
                    <i className="bi bi-check" /> SAP Analytics Performance Optimization
                  </li>
                  <li>
                    <i className="bi bi-check" /> SAP Analytics Development Guidelines Processes
                  </li>
                  <li>
                    <i className="bi bi-check" /> SAP Analytics documentation
                  </li>
                  <li>
                    <i className="bi bi-check" /> SAP Analytics Housekeeping
                  </li>
                </ul>

              </div>
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-md-5">
                <img src="assets\img\zp22.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-md-7 pt-5">
                <h3>Innovation
                </h3>
                <ul>
                  <li>
                    <i className="bi bi-check" /> Tailor-made solutions (Web Dynpro, UI5, ABAP 00)

                  </li>
                  <li>
                    <i className="bi bi-check" /> SAC Application Designer

                  </li>
                  <li>
                    <i className="bi bi-check" /> KPI definition and integration

                  </li>
                  <li>
                    <i className="bi bi-check" /> Integration of marketing data
                  </li>
                  <li>
                    <i className="bi bi-check" /> Integration of social media data
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </section>
            <FooterComponent />
        </div>
    )
}

export default itSP;