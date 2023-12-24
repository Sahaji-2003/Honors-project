import React from 'react'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'
import { Link } from 'react-router-dom'

const InstrumentDetails10 = () => {
  return (
    <div>
      <>
        <HeadComponent />
        <main id="main">
          {/* ======= Our Portfolio Section ======= */}
          <section className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2> Sounder (EWLI/ EWLS) </h2>
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Instruments">Instruments</Link>
                  </li>
                  <li> Digital Water Level Indicator </li>
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
                        <img src="assets/img/portfolio/WLI.jpg" alt="" />
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
                    <h3>Sounder (EWLI/ EWLS) information</h3>
                    <ul>
                      <li>
                        <strong>Category</strong>: Digital Water Level Indicator
                      </li>
                      <li>
                        <strong>Purpose</strong>: Digital Water Level Indicator/Sounder (EWLI/ EWLS)
                        Groundwater Level Measuring Instruments


                      </li>
                      <li>
                        <strong>Instrument Type</strong>: Digital Water Level Indicator
                      </li>
                      <li>
                        <strong>Instrument Name</strong>: (EWLI/ EWLS)
                      </li>
                    </ul>
                  </div>
                  <div className="portfolio-description">
                    <h2>Digital Water Level Indicator/Sounder (EWLI/ EWLS)</h2>
                    <p>
                      <br />
                      <br />
                      Monitoring of ground water table has assumed great significance in
                      view of depleting ground water reserves. The basic measurement of ground
                      water level can be done by Open Standpipe or constructing observation wells.
                      The model EPP-10/6 water level sounder is widely used for measurement of water
                      level in boreholes, wells, casagrande piezometers and standpipes. It is accurate,
                      robust, light weight and convenient to use.


                      <br />
                      <br />

                      TECHNICAL SPECIFICATIONS -

                      EPP-10/6 Water level sounder

                      <br />
                      <br />
                      Tape Length 'L' 		(m) 30, 50, 100, 150, 200, 300
                      Resolution (for tape length in m) 	1 mm standard
                      Imperial unit (optional) Tape Length 'L'(ft) 50, 100, 150, 300, 500
                      Resolution (for tape length in ft) 	0.1” standard
                      Cable/Tape 		High tensile virtually nonexpendable, non-stretch, PE insulated flat steel tape
                      Tape/Cable Size 		10 mm wide x 2 mm thick
                      Probe 		Stainless steel with 12.7 mm diameter
                      Power Supply 		9 V PP-3 size battery
                      Audio Signal 		Sound buzzer
                      Visual Signal 		Green LED light signal


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

export default InstrumentDetails10