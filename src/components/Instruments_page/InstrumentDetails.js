import React from 'react'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'
import { Link } from 'react-router-dom'

const InstrumentDetails = () => {
  return (
    <div>
      <>
        <HeadComponent />
        <main id="main">
          {/* ======= Our Portfolio Section ======= */}
          <section className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2>eTrex-20x Details</h2>
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Instruments">Instruments</Link>
                  </li>
                  <li> eTrex-20x  </li>
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
                        <img src="assets/img/portfolio/etrex22.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="assets/img/portfolio/etrex22.jpg" alt="" />
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
                    <h3>eTrex-20x information</h3>
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
                        <strong>Instrument</strong>: eTrex 20x
                      </li>
                    </ul>
                  </div>
                  <div className="portfolio-description">
                    <h2>eTrex 20x detail</h2>
                    <p>
                      eTrex 20x takes one of the most popular & reliable GPS hand helds & makes it better.
                      Redesigned ergonomics, an easier-to-use interface, 
                      paperless geocaching & expanded mapping capabilities add up to serious 
                      improvements for an already legendary GPS handheld. eTrex 20 is versatile.

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

export default InstrumentDetails