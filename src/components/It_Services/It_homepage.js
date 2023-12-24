import React from 'react'
import FooterComponent from '../FooterComponent'
import HeadComponent from '../HeadComponent'

import { Link } from 'react-router-dom'

const It_homepage = () => {
  return (
    <div>
      <HeadComponent />
      <main id="main">
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
        <section id="blog" className="blog">
          <div className="container" data-aos="fade-up">
            <div className="row">

              <div className="col-lg-9 entries">
                <article className="entry row">
                  <div className="col-md-6 ">
                    <div className="entry-img">
                      <img
                        src="assets\img\zp1.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <h2 className="title">
                      {/* <a href="blog-single.html"> */}
                      True To Our Motto</h2>

                    <p>
                      <br />
                      <b>PASSIONATE SOLUTION DELIVERY </b><br />
                      We specialize in creating sustainable, personalized solutions for SAP ANALYSIS, guiding you through
                      implementation and supporting you across the entire lifecycle management journey.
                    </p>
                  </div>



                </article>
              </div>




              <div className="col-lg-3">
                <div className="sidebar">

                  <h3 className="sidebar-title">Services</h3>
                  <div className="sidebar-item categories">
                    <ul>
                      {/* <li>
                    <a href="#">
                      General <span>(25)</span>
                    </a>
                  </li> */}
                      <li>
                        <Link to="/IT-1">

                          <span>SAP Datasphere</span>

                        </Link>
                      </li>
                      <li>
                        <Link to="/IT-2">
                          <span>SAP Analytics</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/IT-3">
                          <span>SAP S/4 HANA</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/IT-4">
                          <span>SAP Architectural Planning</span>

                        </Link>
                      </li>
                      <li>
                        <Link to="/IT-0">
                          <span>Services and Priorities</span>

                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* End sidebar categories*/}
                  {/* <h3 className="sidebar-title">Recent Posts</h3> */}
                  {/* <div className="sidebar-item recent-posts">
                <div className="post-item clearfix">
                  <img src="assets/img/blog/blog-recent-1.jpg" alt="" />
                  <h4>
                    <a href="blog-single.html">
                      Nihil blanditiis at in nihil autem
                    </a>
                  </h4>
                  <time dateTime="2020-01-01">Jan 1, 2020</time>
                </div>
                <div className="post-item clearfix">
                  <img src="assets/img/blog/blog-recent-2.jpg" alt="" />
                  <h4>
                    <a href="blog-single.html">Quidem autem et impedit</a>
                  </h4>
                  <time dateTime="2020-01-01">Jan 1, 2020</time>
                </div>
                <div className="post-item clearfix">
                  <img src="assets/img/blog/blog-recent-3.jpg" alt="" />
                  <h4>
                    <a href="blog-single.html">
                      Id quia et et ut maxime similique occaecati ut
                    </a>
                  </h4>
                  <time dateTime="2020-01-01">Jan 1, 2020</time>
                </div>
                <div className="post-item clearfix">
                  <img src="assets/img/blog/blog-recent-4.jpg" alt="" />
                  <h4>
                    <a href="blog-single.html">
                      Laborum corporis quo dara net para
                    </a>
                  </h4>
                  <time dateTime="2020-01-01">Jan 1, 2020</time>
                </div>
                <div className="post-item clearfix">
                  <img src="assets/img/blog/blog-recent-5.jpg" alt="" />
                  <h4>
                    <a href="blog-single.html">
                      Et dolores corrupti quae illo quod dolor
                    </a>
                  </h4>
                  <time dateTime="2020-01-01">Jan 1, 2020</time>
                </div>
              </div> */}
                  {/* End sidebar recent posts*/}
                  {/* <h3 className="sidebar-title">Tags</h3> */}
                  {/* <div className="sidebar-item tags">
                <ul>
                  <li>
                    <a href="#">App</a>
                  </li>
                  <li>
                    <a href="#">IT</a>
                  </li>
                  <li>
                    <a href="#">Business</a>
                  </li>
                  <li>
                    <a href="#">Mac</a>
                  </li>
                  <li>
                    <a href="#">Design</a>
                  </li>
                  <li>
                    <a href="#">Office</a>
                  </li>
                  <li>
                    <a href="#">Creative</a>
                  </li>
                  <li>
                    <a href="#">Studio</a>
                  </li>
                  <li>
                    <a href="#">Smart</a>
                  </li>
                  <li>
                    <a href="#">Tips</a>
                  </li>
                  <li>
                    <a href="#">Marketing</a>
                  </li>
                </ul>
              </div> */}
                  {/* End sidebar tags*/}
                </div>
                {/* End sidebar */}
              </div>
              {/* End blog sidebar */}
            </div>
          </div>
        </section>
        {/* End Blog Section */}
        <section className="services">
          <div className="section-title">
            <h2>Service Features</h2></div>
          <div className="container">
            <div className="row">
              <Link to='/IT-0'
                className="col-md-6 col-lg-4 d-flex align-items-stretch custom-link"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="icon-box icon-box-blue">
                  <div className="icon">
                    {/* <i className="bi bi-house-door" /> Bootstrap house door icon */}
                    <i className="bi bi-graph-up-arrow" /> {/* Bootstrap water droplet icon */}
                  </div>
                  <h4 className="title">
                    SAP Analytics Implementation Consulting
                  </h4>
                  {/* <p className="description">
                                    Experts in hydrogeological services and groundwater assessments.
                                    </p> */}
                </div>

              </Link>
              <Link to='/IT-0'
                className="col-md-6 col-lg-4 d-flex align-items-stretch custom-link"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="icon-box icon-box-pink">
                  <div className="icon">
                    <i className="bi bi-clipboard2-data" />
                  </div>
                  <h4 className="title">
                    SAP Analytics Strategy Consulting
                  </h4>
                  {/* <p className="description">
                                    Leading IT services provider, for seamless digital transformation.
                                    </p> */}
                </div>

              </Link>
              <Link to='/IT-0'
                className="col-md-6 col-lg-4 d-flex align-items-stretch custom-link"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="icon-box icon-box-green">
                  <div className="icon">
                    <i className="bi bi-bar-chart-steps" />
                  </div>
                  <h4 className="title">
                    SAP Analytics Process Consulting
                  </h4>
                  {/* <p className="description">
                                    Cutting-edge instruments for precise data collection and analysis.
                                    
                                    </p> */}
                </div>

              </Link>

            </div>
          </div>
        </section>
        <section className="features">
          <div className="container">
            <div className="section-title">
              <h2>Focus</h2>
              <p>
                To navigate the dynamic SAP BI landscape successfully,
                ASP has outlined key priorities crucial for the future. Internally,
                we're dedicating efforts to build expertise in one of these areas.
                This strategic focus positions us to seamlessly integrate the
                latest solutions into customer projects,
                ensuring they benefit from the forefront of SAP BI technology.
              </p>
            </div>
            <br />
            <br />
            <div className="row" data-aos="fade-up">
              <div className="col-md-5">
                {/* <img src="assets/img/features-2.jpg" className="img-fluid" alt="" /> */}

                <img src="assets\img\zp2.jpg" className="img-fluid" alt="" />

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
      </main>
      <FooterComponent />
    </div>

  )
}

export default It_homepage