import React from 'react'
import { Link } from 'react-router-dom'

const HomeMidComponent = () => {
    return (
        <div className='HomeMidComponent'>
            <main id="main">
                {/* ======= Services Section ======= */}
                <section className="services">
                    <div className="container">
                        <div className="row">
                        <Link to='/IT-Services'
                                className="col-md-6 col-lg-3 d-flex align-items-stretch custom-link"
                                data-aos="fade-up"
                                data-aos-delay={100}
                             >
                                
                                <div className="icon-box icon-box-pink">
                                
                                    <div className="icon">
                                        <i className="bi bi-pc-display" />
                                    </div>
                                    <h4 className="title">
                                        IT Services
                                    </h4>
                                    <p className="description">
                                    Leading IT services provider, for seamless digital transformation.
                                    </p>
                                    
                                </div>
                                </Link>
                            
                            <Link to='HydroServices'
                                className="col-md-6 col-lg-3 d-flex align-items-stretch custom-link"
                                data-aos="fade-up"
                            >
                                
                                <div className="icon-box icon-box-blue">
                                
                                    <div className="icon">
                                        {/* <i className="bi bi-house-door" /> Bootstrap house door icon */}
                                        <i className="bi bi-moisture" /> {/* Bootstrap water droplet icon */}
                                    </div>
                                    <h4 className="title">
                                        Hydrogeological Services
                                    </h4>
                                    <p className="description">
                                    Experts in hydrogeological services and groundwater assessments.
                                    </p>
                                    
                                </div>
                                </Link>
                               
                            
                            
                           
                            <Link to='/Instruments'
                                className="col-md-6 col-lg-3 d-flex align-items-stretch custom-link"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                
                                <div className="icon-box icon-box-green">
                                
                                    <div className="icon">
                                        <i className="bi bi-robot" />
                                    </div>
                                    <h4 className="title">
                                        Instruments
                                    </h4>
                                    <p className="description">
                                    Cutting-edge instruments for precise data collection and analysis.
                                    
                                    </p>
                                      
                                </div>
                              
                            
                            </Link>
                            <Link to='/'
                                className="col-md-6 col-lg-3 d-flex align-items-stretch custom-link"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="icon-box icon-box-cyan">
                                    <div className="icon">
                                        <i className="bi bi-globe" />
                                    </div>
                                    <h4 className="title">
                                        Other Services
                                    </h4>
                                    <p className="description">
                                    Comprehensive services tailored to diverse project needs, ensuring optimal outcomes and client satisfaction.
                                    </p>
                                </div>
                                </Link>
                        </div>
                        </div>
                    
                </section>
                {/* End Services Section */}
                {/* ======= Why Us Section ======= */}
                <section
                    className="why-us section-bg"
                    data-aos="fade-up"
                    date-aos-delay={200}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 video-box">
                                <img src="assets\img\homeimg.jpeg" className="img-fluid" alt="" />
                                <a
                                    href="assets\img\homeimg.jpg"
                                />
                            </div>
                            <div className="col-lg-8 d-flex flex-column justify-content-center p-5">
                                <div className="icon-box">
                                    <div className="icon">
                                        <i className="bi bi-database-check" />
                                    </div>
                                    <h5 className="title">
                                        <a href="">Data Precision at its Core</a>
                                    </h5>
                                    <p className="description">
                                    Precision defines us, whether in groundwater studies or IT analytics, ensuring every decision is based on accurate insights.
                                    
                                    </p>
                                </div>
                                <div className="icon-box">
                                    <div className="icon">
                                        <i className="bi bi-award" />
                                    </div>
                                    <h5 className="title">
                                        <a href="">Crafting solutions for Success </a>
                                    </h5>
                                    <p className="description">
                                    Our hydrogeological and IT services are customized strategies, finely crafted for the comprehensive success of your project.
                                    </p>
                                </div>
                                
                                <div className="icon-box">
                                    <div className="icon">
                                        <i className="bi bi-graph-up-arrow" />
                                    </div>
                                    <h5 className="title">
                                        <a href="">Strategy Partnerships and Lasting impact</a>
                                    </h5>
                                    <p className="description">
                                    We don't just consult ; we strategically partner with you for enduring solutions, be it hydrogeological challenges or digital transformation.

                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="features">
                    <div className="container">
                    <div className="section-title">
                            <h2>Features</h2>
                            <p>
                            Our company stands out with its state-of-the-art technology, 
                            ensuring precision in data collection and analysis. We pride 
                            ourselves on expert consultations, timely project delivery, 
                            and a commitment to sustainable practices, making us the trusted 
                            choice for geoscientific solutions.
                            </p>
                        </div>
                        <br/>
                        <br/>
                        <div className="row" data-aos="fade-up">
                            <div className="col-md-5">
                                
                                
                                <img src="assets/img/service-details-2.gif" className="img-fluid" alt="" />
                                
                            </div>
                            <div className="col-md-7 pt-4">
                            <h3>IT Services</h3>
                                <p className="fst-italic">
                                With precise data analysis, advanced mapping, and a dedicated team, we drive sustainable outcomes,
                                 ensure client satisfaction, and contribute positively to projects of all scales.
                                </p> 
                                <ul>
                                    <li>
                                        <i className="bi bi-check" /> SAP Datasphere
                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> SAP Analytics
                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> SAP S/4 HANA 
                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> SAP Architectural Planning
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row" data-aos="fade-up">
                            <div className="col-md-5 order-1 order-md-2">
                                <img src="assets/img/service-details-1.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-7 pt-5 order-2 order-md-1">

                            <h3>
                                    Hydrogeological Services
                                </h3>
                                <p className="fst-italic">
                                We carry out the followings.
                                 </p>
                                <ul>
                                    <li>
                                        <i className="bi bi-check" /> Hydrogeological Studies For GroundWater Harvesting , Industries , Infrastructure and And Mining Projects.
                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> Rain-Water Harvesting Plan And Structures.
                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> Geophysical Survey for GroundWater Exploration .
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                        <div className="row" data-aos="fade-up">
                            <div className="col-md-5">
                                <img src="assets/img/features-3.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-7 pt-5">
                                <h3>
                                    Instruments that we provide are:
                                </h3>
                                <p>
                                These cutting-edge tools ensure precise geoscientific research and efficient water 
                                resource management, guaranteeing precision, reliability, and efficiency.
                                </p>
                                <ul>
                                    <li>
                                        <i className="bi bi-check" /> Garmin's Hand Held GPS (Global Positioning System)

                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> DGPS (Differential Global Positioning System) – GNSS Survey

                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> Resistivity Meter

                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> Digital Water Level Recorder
                                    </li>
                                    <li>
                                        <i className="bi bi-check" /> And many more.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row" data-aos="fade-up">
                            <div className="col-md-5 order-1 order-md-2">
                                <img src="assets/img/features-4.jpg" className="img-fluid" alt="" />
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
                        </div>
                    </div>
                </section>
                
            </main>
        </div>
    )
}

export default HomeMidComponent