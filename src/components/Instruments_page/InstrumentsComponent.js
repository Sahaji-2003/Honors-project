import React from 'react'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'
import { Link } from 'react-router-dom'

const InstrumentsComponent = () => {
  return (
    <div className="Instruments">
      <>
     
        <HeadComponent />
        <main id="main">
          {/* ======= Our Portfolio Section ======= */}
          <section className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2>Our Instruments</h2>
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Our Instruments</li>
                </ol>
              </div>
            </div>
          </section>
          {/* End Our Portfolio Section */}
          {/* ======= Portfolio Section ======= */}
          <section className="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active"> All </li>
                    <li data-filter=".filter-app">GPS</li>
                    <li data-filter=".filter-card">DWLR</li>
                    <li data-filter=".filter-web">CMR</li>
                  </ul>
                </div>
              </div>
              <div
                className="row portfolio-container"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration={500}
              >
                <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
                <Link to="/InstrumentDetails">

                  <div className="portfolio-item">
                    <img
                      src="assets/img/portfolio/etrex22.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h3>eTrex 22x</h3>
                      <div>
                        <a
                          href="assets/img/portfolio/etrex22.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="App 1"
                        >
                          <i className="bx bx-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
               

                <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
                <Link to="/InstrumentDetails2">
                  <div className="portfolio-item">
                    <img
                      src="assets/img/portfolio/etrex32.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h3>eTrex 32x</h3>
                      <div>
                        <a
                          href="assets/img/portfolio/etrex32.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="App 3"
                        >
                          <i className="bx bx-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-wrap filter-app">
                <Link to="/InstrumentDetails3">
                  <div className="portfolio-item">
                    <img
                      src="assets/img/portfolio/oregon750.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h3>OREGON 750</h3>
                      <div>
                        <a
                          href="assets/img/portfolio/oregon750.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="App 2"
                        >
                          <i className="bx bx-plus" />
                        </a>

                      </div>
                    </div>
                  </div>
                  </Link>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
                <Link to="/InstrumentDetails4">
                  <div className="portfolio-item">
                    <img
                      src="assets/img/portfolio/montana680.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h3>MONTANA 680</h3>
                      <div>
                        <a
                          href="assets/img/portfolio/montana680.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="App 3"
                        >
                          <i className="bx bx-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
                <Link to="/InstrumentDetails5">
                  <div className="portfolio-item">
                    <img
                      src="assets/img/portfolio/sp-85.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h3>DGPS SP-85</h3>
                      <div>
                        <a
                          href="assets/img/portfolio/sp-85.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="Web 2"
                        >
                          <i className="bx bx-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-wrap filter-card">
                <Link to="/InstrumentDetails6">
                  <div className="portfolio-item">
                    <img
                      src="assets/img/portfolio/sp-80.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h3>DGPS SP-80</h3>
                      <div>
                        <a
                          href="assets/img/portfolio/sp-80.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="App 3"
                        >
                          <i className="bx bx-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-wrap filter-card">
                <Link to="/InstrumentDetails7">
                  <div className="portfolio-item">
                    <img
                      src="assets/img/portfolio/Aquameter.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h3>Aquameter CRM</h3>
                      <div>
                        <a
                          href="assets/img/portfolio/Aquameter.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="Card 1"
                        >
                          <i className="bx bx-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-wrap filter-card">
                <Link to="/InstrumentDetails8">
                  <div className="portfolio-item">
                    <img
                      src="assets/img/portfolio/DWLR.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h3>DWLR</h3>
                      <div>
                        <a
                          href="assets/img/portfolio/DWLR.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="Card 3"
                        >
                          <i className="bx bx-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-wrap filter-web">
                <Link to="/InstrumentDetails9">
                  <div className="portfolio-item">
                    <img
                      src="assets/img/portfolio/UD.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h3>Telemetry</h3>
                      <div>
                        <a
                          href="assets/img/portfolio/UD.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="Web 1"
                        >
                          <i className="bx bx-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-wrap filter-card">
                <Link to="/InstrumentDetails10">
                  <div className="portfolio-item">
                    <img
                      src="assets/img/portfolio/WLI.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h3>EWLI/EWLS</h3>
                      <div>
                        <a
                          href="assets/img/portfolio/WLI.jpg"
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="App 1"
                        >
                          <i className="bx bx-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>

              </div>
            </div>
          </section>
          {/* End Portfolio Section */}
        </main>
        {/* End #main */}
        <FooterComponent />

        <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      </>

    </div>

  )
}

export default InstrumentsComponent