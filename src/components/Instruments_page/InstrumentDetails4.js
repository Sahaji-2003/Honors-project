import React from 'react'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'
import { Link } from 'react-router-dom'

const InstrumentDetails4 = () => {
  return (
    <div>
        <>
        <HeadComponent/>
        <main id="main">
          {/* ======= Our Portfolio Section ======= */}
          <section className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2> MONTANA 680 </h2>
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Instruments">Instruments</Link>
                  </li>
                  <li> MONTANA 680 detail </li>
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
                        <img src="assets/img/portfolio/montana680.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="assets/img/portfolio/sp-85.jpg" alt="" />
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
                    <h3>MONTANA 680 information</h3>
                    <ul>
                      <li>
                        <strong>Category</strong>:Global Positioning System
                      </li>
                      <li>
                        <strong>Company</strong>: Garmin
                      </li>
                      <li>
                        <strong>Instrument Type</strong>: Hand Held GPS
                      </li>
                      <li>
                        <strong>Instrument Name</strong>: MONTANA-680
                      </li>
                    </ul>
                  </div>
                  <div className="portfolio-description">
                    <h2>MONTANA 680 detail</h2>
                    <p>
                    Montana 680 features a bold 4 inches color touchscreen dual orientation 
                    display & supports multiple mapping options like BirdsEye™ Satellite Imagery
                    & it has a 8 megapixel Camera to boot. Montana has key features for the 
                    outdoors such as a 3-axis tilt-compensated compass & barometric altimeter, 
                    wireless data sharing, high-sensitivity GPS receiver,  microSD™ card slot, 8 
                    GB Internal Memory.


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

export default InstrumentDetails4