import React from 'react'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'
import { Link } from 'react-router-dom'

const InstrumentDetails8 = () => {
  return (
    <div>
      <>
        <HeadComponent />
        <main id="main">
          {/* ======= Our Portfolio Section ======= */}
          <section className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2> Digital Water Level Recorder (DWLR)</h2>
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Instruments">Instruments</Link>
                  </li>
                  <li> Digital Water Level Recorder (DWLR) detail </li>
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
                        <img src="assets/img/portfolio/DWLR.jpg" alt="" />
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
                    <h3>Digital Water Level Recorder (DWLR) information</h3>
                    <ul>
                      <li>
                        <strong>Category</strong>: Digital Water Level Recorder (DWLR)
                      </li>
                      <li>
                        <strong>Purpose</strong>: Digital Water Level Recorder (DWLR) / Piezometer (Battery type) Telemetric With Data Server and Connectivity

                      </li>
                      <li>
                        <strong>Instrument Type</strong>: DWLR
                      </li>
                      <li>
                        <strong>Instrument Name</strong>: Digital Water Level Recorder (DWLR)
                      </li>
                    </ul>
                  </div>
                  <div className="portfolio-description">
                    <h2>Digital Water Level Recorder (DWLR)</h2>
                    <p>
                      Application <br /><br />
                      Digital Water Level Recorder (DWLR),
                      is a data logger and submersible pressure transducer
                      combination designed for remote monitoring and recording of water level or pore
                      pressure data of the Bore Well.

                      <br />
                      <br />
                      Salient Features:
                      <br />
                      ● Online Ground water level recorder. 	 ● Continuous Data Logging Facility.
                      ● Factory-calibrated sensor.		 ● Facility for Wall/Pipe mounting.
                      ● IP 65 grade rated enclosure. 	 ● Durable and rugged design
                      ● Data can be uploaded on Cloud Server 	 ● Battery
                      ● Including Telemetry for online Data transfer and one year free of cost Server
                      ● Data transfer to server with 50 to 200m cable.
                      ● Imported pressure transducer (sensor) with capability of measuring till 160 meters’ depth.
                      <br />
                      <br />
                      Technical Specifications
                      <br />
                      <br />
                      ● Accuracy: 0.25 % F.S 		 ● Compensated temperature: -200C to +850C.
                      ● Operating temperature: -400C to +1250C 	 ● Current consumption: 5mA
                      ● Vibration: ±20g, MIL-STD-810C 	 ● Dielectric strength: 2mA @500VAC, 1min
                      ● Display: 16x2 LCD display 		 ● Enclosure: IP65
                      ● Data Output: Microso􀄦 Excel format 	 ● Clock: Real time internal clock
                      ● Cable Length: 50m or as per requirement	 ● Input Power: 220V 50Hz AC
                      ● Power Adapter output: 12V, 1A DC 	 ● Lithium Ion Battery Pack 11.1 V 4.4A
                      ● Wetted Material: 17-4PH or 316L Stainless Steel Port, 316L Stainless Steel Snubber
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

export default InstrumentDetails8