import React from 'react'
import { Link } from 'react-router-dom'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'

const ItSap4 = () => {
  return (
    <div className='SAP4'>
    <HeadComponent />
    <br />
    <br />
    <br />
   

    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2> <b> SAP PLANNING ARCHITECTURES </b> </h2>
          <ol>
            <li>
              <Link to='IT-Services'> IT-Services </Link>
            </li>
            <li> SAP PLANNING </li>
          </ol>
        </div>
      </div>
    </section>


    <section
      className="why-us section-bg"
      data-aos="fade-up"
      date-aos-delay={200}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 video-box">
            <img src="assets\img\sappa.jpg" className="img-fluid" alt="" />
            <a
              href="assets\img\homeimg.jpg"
            />
          </div>
          <div className="col-lg-8 d-flex flex-column justify-content-center p-5">
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-file-earmark-bar-graph-fill" />
              </div>
              <h2 className="title">
                <Link to="/IT-2">SAP PLANNING ARCHITECTURES</Link>
              </h2>
              <p className="description">
                <b>SAP Planning : </b> 
                We put different  SAP planning architectures  to the test – SAC Native, S/4 Native, BPC  Live Connection or, in the future, planning with DWC. Our extensive demo landscape is available to us. <br/> <br/>

We bring clarity to the SAP “planning jungle” and work with you to find the right architectures and processes for your individual requirements. <br/> <br/> 

In addition to reviewing the architecture of your current SAP planning landscape, we also pay attention to the processes within your organization <br/> <br/>
              </p>

            </div>

            {/* <div className="icon-box">
                                  <div className="icon">
                                      <i className="bi bi-minecart-loaded" />
                                  </div>
                                  <h4 className="title">
                                      <a href="">MINING</a>
                                  </h4>
              
                              </div> */}

          </div>
        </div>
      </div>
    </section>

    <section className="services">
      <div className="container">
        <div className="row">
        <Link to='/IT-0'
            className="col-md-6 col-lg-3 d-flex align-items-stretch custom-link"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="icon-box icon-box-cyan">
              <div className="icon">
                <i className="bi bi-bookmark-check-fill" />
              </div>
              <h4 className="title">
                Services and priorities
              </h4>
              {/* <p className="description">
                Comprehensive services tailored to diverse project needs, ensuring optimal outcomes and client satisfaction.
              </p> */}
            </div>
            
            </Link>

            <Link to='/IT-1'
            className="col-md-6 col-lg-3 d-flex align-items-stretch custom-link"
            data-aos="fade-up"
          >
            <div className="icon-box icon-box-blue">
              <div className="icon">
                {/* <i className="bi bi-house-door" /> Bootstrap house door icon */}
                <i className="bi bi-pie-chart-fill" /> {/* Bootstrap water droplet icon */}
              </div>
              <h4 className="title">
              SAP Datasphere (formerly DWC)
              </h4>
              {/* <p className="description">
                Experts in hydrogeological services and groundwater assessments.
              </p> */}
            </div>
            </Link>
          
          <Link to='/IT-2'
            className="col-md-6 col-lg-3 d-flex align-items-stretch custom-link"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="icon-box icon-box-pink">
              <div className="icon">
                <i className="bi bi-cloud-upload-fill" />
              </div>
              <h4 className="title">
              SAP Analytics Cloud (SAC)
              </h4>
              {/* <p className="description">
                Leading IT services provider, for seamless digital transformation.
              </p> */}
            </div>
            
            </Link>
            <Link to='/IT-4'
            className="col-md-6 col-lg-3 d-flex align-items-stretch custom-link"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="icon-box icon-box-green">
              <div className="icon">
                <i className="bi bi-database-fill-gear" />
              </div>
              <h4 className="title">
              SAP S/4 Hana - Embedded Analytics                                                                 
              </h4>
              {/* <p className="description">
                Cutting-edge instruments for precise data collection and analysis.
              </p> */}
            </div>
            
            </Link>
            </div>
        </div>
      

     
    </section>
    <br/>
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
                        <br/>
                        <br/>
                        

    <FooterComponent />
  </div>
  )
}

export default ItSap4