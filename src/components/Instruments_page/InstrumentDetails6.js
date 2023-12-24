import React from 'react'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'
import { Link } from 'react-router-dom'

const InstrumentDetails6 = () => {
  return (
    <div>
      <>
        <HeadComponent />
        <main id="main">
          {/* ======= Our Portfolio Section ======= */}
          <section className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2> SP-80 </h2>
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Instruments">Instruments</Link>
                  </li>
                  <li> SP-80 detail </li>
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
                        <img src="assets/img/portfolio/sp-80.jpg" alt="" />
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
                    <h3>SP-80 information</h3>
                    <ul>
                      <li>
                        <strong>Category</strong>: DGPS (Differential Global Positioning System)
                      </li>
                      <li>
                        <strong>Purpose</strong>: GNSS Survey
                      </li>
                      <li>
                        <strong>Instrument Type</strong>: DGPS
                      </li>
                      <li>
                        <strong>Instrument Name</strong>: SP-80
                      </li>
                    </ul>
                  </div>
                  <div className="portfolio-description">
                    <h2>SP-80 detail</h2>
                    <p>
                      The SP80's Z-Blade GNSS-centric technology delivers fast
                      and reliable GNSS positioning utilizing all available GNSS signals
                      to produce the optimal solution even in challenging environments.
                      GNSS CHARACTERISTICS

                      • 240 GNSS channels
                      • GPS	• GLONASS	• BeiDou
                      • Galileo
                      • SBAS
                      REAL-TIME ACCURACY (RMS)
                      SBAS (WAAS/EGNOS/MSAS/GAGAN)
                      • Horizontal: is less than 50 cm
                      • Vertical: is less than 85 cm
                      Real-Time DGPS position
                      • Horizontal: 25 cm	• Vertical: 50 cm
                      Real-Time Kinematic position (RTK)
                      • Horizontal: 8 mm	• Vertical: 15 mm
                      POST-PROCESSING ACCURACY (RMS)
                      Static & Fast static
                      • Horizontal: 3 mm	• Vertical: 5 mm
                      High-Precision Static
                      • Horizontal: 3 mm	• Vertical: 3.5 mm


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

export default InstrumentDetails6