import React from 'react'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'
import { Link } from 'react-router-dom'

const InstrumentDetails2 = () => {
  return (
    <div>
        <>
        <HeadComponent/>
        <main id="main">
          {/* ======= Our Portfolio Section ======= */}
          <section className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2> eTrex-30x </h2>
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Instruments">Instruments</Link>
                  </li>
                  <li> eTrex-30x  </li>
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
                        <img src="assets/img/portfolio/etrex32.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="assets/img/portfolio/etrex32.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="assets/img/portfolio/oregon750.jpg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-pagination" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="portfolio-info">
                    <h3>eTrex-30x information</h3>
                    <ul>
                      <li>
                        <strong>Category</strong>: Global Positioning System
                      </li>
                      <li>
                        <strong>Company</strong>: Garmin
                      </li>
                      <li>
                        <strong>Instrument Type</strong>: Hand Held GPS
                      </li>
                      <li>
                        <strong>Instrument</strong>: eTrex 30x
                      </li>
                    </ul>
                  </div>
                  <div className="portfolio-description">
                    <h2>eTrex 30x detail</h2>
                    <p>
                    eTrex 30x is the most reliable hand held GPS, it has sunlight readable display.
                    eTrex 30 adds a built-in 3-axis tilt-compensated electronic compass. 
                    The new eTrex series is the first-ever consumer-grade receivers that can track both GPS & GLONASS 
                    satellites simultaneously. GLONASS is a system developed by the Russian Federation. When using GLONASS 
                    satellites, the time it takes for the receiver to “lock on” to a position is (on average) approximately 
                    20 percent faster than using GPS. & when using both GPS & GLONASS, the receiver has the ability to lock 
                    on to 24 more satellites than using GPS alone. You can Add Maps With its microSD™ card slot & 1.7 
                    GB of internal memory, eTrex 30 lets you load TOPO 24K maps or City Navigator NT® map data for 
                    turn-by-turn routing on roads. eTrex 30 also supports BirdsEye™ Satellite Imagery 
                    (subscription required), that lets you download satellite images to your device & integrate 
                    them with your maps.


                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Portfolio Details Section */}
        </main>
  {/* End #main */}
  <FooterComponent/>
</>

    </div>
  )
}

export default InstrumentDetails2