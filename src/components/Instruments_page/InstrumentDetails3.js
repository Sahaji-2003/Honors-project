import React from 'react'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'
import { Link } from 'react-router-dom'

const InstrumentDetails3 = () => {
  return (
    <div>
      <>
        <HeadComponent />
        <main id="main">
          {/* ======= Our Portfolio Section ======= */}
          <section className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2> OREGON 750 </h2>
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Instruments">Instruments</Link>
                  </li>
                  <li> OREGON 750 detail </li>
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
                        <img src="assets/img/portfolio/oregon750.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="assets/img/portfolio/montana680.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="assets/img/portfolio/SP-85.jpg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-pagination" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="portfolio-info">
                    <h3>OREGON 750 information</h3>
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
                        <strong>Instrument Name</strong>: OREGON 750
                      </li>
                    </ul>
                  </div>
                  <div className="portfolio-description">
                    <h2>OREGON 750 detail</h2>
                    <p>
                      Oregon 750: With high-sensitivity GPS & GLONASS satellite tracking,
                      worldwide basemap with shaded relief & customizable buttons for 1-touch
                      image capture & waypoint marking, Oregon 650 opens a new world of GPS mapping &
                      positioning. 8 MP autofocus camera with LED flash/torch.
                      3-axis compass with accelerometer & barometric altimeter sensors.
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

export default InstrumentDetails3