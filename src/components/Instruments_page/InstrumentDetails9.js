import React from 'react'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'
import { Link } from 'react-router-dom'

const InstrumentDetails9 = () => {
  return (
    <div>
      <>
        <HeadComponent />
        <main id="main">
          {/* ======= Our Portfolio Section ======= */}
          <section className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2> Ultrasonic Digital Water Flow Meter (Telemetry)</h2>
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Instruments">Instruments</Link>
                  </li>
                  <li> Ultrasonic Digital Water Flow Meter (Telemetry) detail </li>
                </ol>
              </div>
            </div>
          </section>
          {/* End Our Portfolio Section */}
          {/* ======= Portfolio Details Section ======= */}
          <section id="portfolio-details" className="portfolio-details">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-4">
                  <div className="portfolio-details-slider swiper">
                    <div className="swiper-wrapper align-items-center">
                      <div className="swiper-slide">
                        <img src="assets/img/portfolio/UD.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="assets/img/portfolio/montana680.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="assets/img/portfolio/UD.jpg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-pagination" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="portfolio-info">
                    <h3>Ultrasonic Digital Water Flow Meter (Telemetry) information</h3>
                    <ul>
                      <li>
                        <strong>Category</strong>: Ultrasonic Digital Water Flow Meter
                      </li>
                      <li>
                        <strong>Purpose</strong>: Ultrasonic Digital Water Flow Meter (Telemetry) as per Guidelines of CGWA of all Sizes from 1 Inches to 8 Inches

                      </li>
                      <li>
                        <strong>Instrument Type</strong>: Ultrasonic Digital Water Flow Meter
                      </li>
                      <li>
                        <strong>Instrument Name</strong>: Telemetry
                      </li>
                    </ul>
                  </div>
                  <div className="portfolio-description">
                    <h2>Ultrasonic Digital Water Flow Meter (Telemetry)</h2>
                    <p>
                      <br />
                      <br />
                      Key Features of Dhaara Smart Flow Meters : -<br /><br />
                      Battery operated meter with inbuilt GPRS/4G communication.<br />
                      Ultrasonic Transit Time principle-based flow measurement.<br />
                      Non-contact measurement to make it more durable.<br />
                      Certified from FCRI.<br />
                      Easy to install and Plug & Play with low maintenance.<br />
                      Real time data on your web & mobile dashboards.<br />
                      Real time and event triggered alerts on WhatsApp/SMS/Email.<br />
                      Integration with third party application using web APIs.<br />

                      <br />
                      <br />

                      SPECIFICATION

                      <br />
                      Metering Technology-	Ultrasonic
                      Diameter-		DN25/40/50/65/100/150/200
                      Flow range-		Q1 - 1 m3/hr, Q3 - 40 m3/hr
                      Turndown ratio- 	(R)Minimum 40
                      Communication-	Inbuilt dual SIM based 4G with fall back on 2G
                      Power Source-	The meter and telemetry shall be operated using non-rechargeable batteries with minimum 3 years life assuming every 12 hours transmission.
                      Certification-		ISO 4064: 2014
                      Ingress Protection-	Meter along with the telemetry system should be IP68 certified
                      Accuracy-		Class 2, T50, as per ISO 4064:2014
                      Parameters to monitor-	The meter should transmit the following parameters to a secure cloud
                      1. Timestamp 2. Cumulative volume 3. Cumulative pump working hours
                      Transmission frequency-	Every 8/12/24 hours as per the requirement of the
                      Transmission frequency-	Every 8/12/24 hours as per the requirement of the purchaser.
                      Data Management Software-	The supplier shall acquire the data in the secured cloud and shall provide a web dashboard and mobile application to view and download data from the meters.
                      Integration with other dashboards- 	The supplier shall provide web APIs to integrate the flow meter data with any dashboard as desired by the purchaser.
                      Material of construction-	The body of the meter shall be brass/bronze/cast iron/
                      Meter indicator-	The meter shall display the following parameters on LCD <br/>
                      1. Instantaneous flow rate
                      2. Cumulative

                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Portfolio Details Section */}
        </main>
        {/* End #main */}
        <FooterComponent />
      </>

    </div>
  )
}

export default InstrumentDetails9