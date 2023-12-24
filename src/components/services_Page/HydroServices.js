import React from 'react'
import { Link } from 'react-router-dom'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'


const HydroServices = () => {
  return (
    <div>
        <HeadComponent />
        <main id="main">
          {/* ======= Our Portfolio Section ======= */}
          <section className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
              <h2> HydroGeological Services</h2>
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Services">Services</Link>
                  </li>

                </ol>
              </div>
            </div>
          </section>
          <br/>
          <section
                    className="why-us section-bg"
                    data-aos="fade-up"
                    date-aos-delay={200}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 video-box">
                                <img src="assets/img/service-details-1.jpg" className="img-fluid" alt="" />
                                <a
                                    href="assets\img\homeimg.jpg"
                                />
                            </div>
                            <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
                                <div className="icon-box">
                                    <div className="icon">
                                        <i className="bi bi-droplet-half" />
                                    </div>
                                    {/* <h4 className="title">
                                        <a href=""></a>
                                    </h4> */}
                                    <p className="description"><b>
                                    Hydrogeological Studies For Groundwater , Industries , Infrastructure and Mining Projects</b>
                                    </p>
                                </div>
                                <div className="icon-box">
                                    <div className="icon">
                                        <i className="bi bi-water" />
                                    </div>
                                    {/* <h4 className="title">
                                        <a href=""></a>
                                    </h4> */}
                                    <p className="description"><b>
                                    Rain-Water Harvesting Plan And Structures</b>
                                    </p>
                                </div>
                                
                                <div className="icon-box">
                                    <div className="icon">
                                        <i className="bi bi-moisture" />
                                    </div>
                                    {/* <h4 className="title">
                                        <a href=""></a>
                                    </h4> */}
                                    <p className="description"><b>
                                    Geophysical Survey for Groundwater Exploration</b>
``                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
                <section className="features">
                    <div className="container">
                    <div className="section-title">
                            <h2 className="breadcrumbs">Focus</h2>
                            <p>
                           
                            Developing sustainable and efficient groundwater harvesting strategies to support environmental
                             conservation and meet the water needs of various sectors.Providing comprehensive hydrogeological 
                             studies tailored to the specific requirements of industrial projects.</p>
                        </div>
                        <br/>
                        <br/>
                        <div className="row" data-aos="fade-up">
                            <div className="col-md-5">
                                {/* <img src="assets/img/features-2.jpg" className="img-fluid" alt="" /> */}
                                
                                <img src="assets/img/hydro1.jpg" className="img-fluid" alt="" />
                                
                            </div>
                            <div className="col-md-7 pt-4">
                            <h3>"Integrated Water Solutions: Expertise Beyond Boundaries"<br/></h3>
                            <p>Features of Services that we provide are:</p>
                                
                                <ul>
                                    <li>
                                        <i className="bi bi-check" /> Preparation of HydroGeological & Rain Water Harvesting report for ground water abstraction 

                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> Field survey of the project area as per requirements.

                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> Borewell and Dugwell Recharge Plan for the area.

                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> Recharge proposal for the area.
                                    </li>
                                    <li>
                                        <i className="bi bi-check" />  Geophysical studies for ground water abstraction of the existing or proposed project premises.

                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="row" data-aos="fade-up">
                            <div className="col-md-5 order-1 order-md-2">
                                <img src="assets\img\rainy.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-7 pt-5 order-2 order-md-1">

                            <h3>"Empowering Sustainability through Comprehensive Water Management"</h3>
                                <p className="fst-italic">
                                We carry out following works:
                                 </p>
                                <ul>
                                    
                                    <li>
                                        <i className="bi bi-check" /> Assessment to increased system performance.
                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> Assist to achieve higher water efficiency.

                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> Assist to imply easier regulatory compliance.

                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> Construction of Rainwater Harvesting Structure


                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> Our team consists of competent professionals with extensive experience in their respective disciplines. Their expertise ensures quality service and support.
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                        <div className="row" data-aos="fade-up">
                            <div className="col-md-5">
                                <img src="assets/img/hydro.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-7 pt-5">
                                <h3>"Innovation"</h3>
                                <ul>
                                    <li>
                                        <i className="bi bi-check" /> Supply and Training of Resistivity Meter.


                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> Supply and Installation of Digital Water Flow Meter (TELEMETRY).


                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> Supply and Comissioning of Water Level Sounder .


                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> Supply and lnstallation of DWLR (Digital Water Level Recorder).


                                    </li>
                                    
                                    
                                </ul>
                            </div>
                        </div>
                        {/* <div className="row" data-aos="fade-up">
                            <div className="col-md-5 order-1 order-md-2">
                                <img src="assets\img\zp2.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-7 pt-5 order-2 order-md-1">
                                <h3>
                                    Other Services
                                </h3>
                                <p className="fst-italic">
                                In addition to our advanced instruments, we offer a 
                                    comprehensive suite of services aimed at enhancing 
                                    geoscientific research and water resource management.
                                    
                                    
                                </p>
                                <p>
                                Our expert team provides tailored consultancy services,
                                    precise data analysis, geophysical surveys, and groundwater
                                    modeling to  to optimize processes. 
                                   
                                </p>
                            </div>
                        </div> */}
                    </div>
                </section>
          
          {/* <section className="breadcrumbs">
          <section id="portfolio-details" className="portfolio-details">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-5">
                  <div className="portfolio-details-slider swiper">
                    <div className="swiper-wrapper align-items-center">
                      <div className="swiper-slide">
                        <img src="assets/img/hydro1.jpg" alt="" />
                        <br/>
                        <br/>
                        <br/>
                        <img src="assets/img/hydro.jpg" alt="" />
                        <br/>
                        <br/>
                        <br/>
                        
                        
                      </div>
                      <div className="swiper-slide">
                        <img src="assets/img/portfolio/eTrex30x.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="assets/img/portfolio/oregon750.jpg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-pagination" />
                  </div>
                </div>
                
                <div className="col-lg-7">
                  
                  <h2>This service will have followings features / scope of work:</h2>
                  <p className="card-text">
                  
Preparation of Groundwater Availability & Rain Water Harvesting report for ground water abstraction by visit and survey the industrial/Infrastructure/Mining areas as per the Guidelines of CGWA
Site visit / field survey of the project area as per the Guidelines of CGWA
Preparation of Recharge proposal / report for ground water abstraction by Land use plan / details of the existing/proposed Industrial unit premises
Online submission of report to CGWA (Central Ground Water Authority)
Response to queries, if any raised by CGWB/ CGWA
Response to queries or presentation of entire work to CGWA, New Delhi if required for getting the approval and NOC.

                </p>
                  <div className="portfolio-description">
                    <h2>We also carry out the following works.</h2>
                    <p>
                    Preparation of Groundwater availability report
Compliance of NOC
Implementation of Rain Water Harvesting Structures as per the guidelines of CGWA
Dug well/Borewell Recharge
Drainage Plan for the area (River/ nala, etc)
Study of Sources of availability of surface water for Industrial use, if any
Preparation / Details of water requirement /recycled water usage (STP/ ETP)
Supply and Installation of Digital Water Meter
Constructions of Piezo meters
Supply and lnstallation of DWLR (Digital Water Level Recorder)
Renewal of NOC
Construction of Rainwater Harvesting Structure
	Our team consists of competent professionals with extensive experience in their respective disciplines. Their expertise ensures quality service and support.


                    </p>
                  </div>
                </div>
                
              </div>
            </div>
            </section>
          </section> */}
        
        </main>
        {/* End #main */}
        <FooterComponent />
          </div>
      
  )
}

export default HydroServices