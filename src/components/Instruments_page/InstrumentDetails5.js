import React from 'react'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'
import { Link } from 'react-router-dom'

const InstrumentDetails5 = () => {
  return (
    <div>
      <>
        <HeadComponent />
        <main id="main">
          {/* ======= Our Portfolio Section ======= */}
          <section className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2> SP-85 </h2>
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Instruments">Instruments</Link>
                  </li>
                  <li> SP-85 detail </li>
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
                        <img src="assets/img/portfolio/sp-85.jpg" alt="" />
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
                    <h3>SP-85 information</h3>
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
                        <strong>Instrument Name</strong>: SP-85
                      </li>
                    </ul>
                  </div>
                  <div className="portfolio-description">
                    <h2>SP-85 detail</h2>
                    <p>
                      The Spectra Geospatial® SP85 is a next generation GNSS receiver that combines
                      decades of GNSS RTK technology with revolutionary new GNSS processing.
                      Featuring the new 600-channel “7G” chipset combined with the patented Z-Blade
                      technology, the SP85 system is optimized for tracking and processing
                      signals from all GNSS constellations in challenging environments. With unmatched
                      connectivity in the GNSS receiver market, the SP85 offers a unique combination of 
                      integrated 3.5G cellular, WiFi and UHF communications with SMS, email and anti-theft technology.

                      • 600 GNSS channels
                      • GPS		• GLONASS
                      • Beidou		• Galileo
                      • SBAS		• IRNSS
                      REAL-TIME ACCURACY (RMS)
                      SBAS (WAAS/EGNOS/MSAS/GAGAN)
                      • Horizontal: is less than 50 cm	• Vertical: is less than 85 cm
                      Real-Time DGPS position
                      • Horizontal: 25 cm + 1 ppm	• Vertical: 50 cm + 1 ppm
                      Real-Time Kinematic Position (RTK)
                      • Horizontal: 8 mm + 1 ppm	• Vertical: 15 mm + 1 ppm
                      Network RTK
                      • Horizontal: 8 mm + 0.5 ppm	• Vertical: 15 mm + 0.5 ppm
                      POST-PROCESSING ACCURACY (RMS)
                      Static & Fast Static
                      • Horizontal: 3 mm + 0.5 ppm	• Vertical: 5 mm + 0.5 ppm
                      High-Precision Static
                      • Horizontal: 3 mm + 0.1 ppm	• Vertical: 3.5 mm + 0.4 ppm



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

export default InstrumentDetails5