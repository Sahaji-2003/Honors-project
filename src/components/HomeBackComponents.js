import React from 'react'
import { Link } from 'react-router-dom'

const HomeBackComponents = () => {
  return (
 
    <div>
<>
  <section
    id="hero"
    className="d-flex flex-column justify-content-end align-items-center"
  >
    <div
      id="heroCarousel"
      data-bs-interval={5000}
      className="container carousel carousel-fade"
      data-bs-ride="carousel"
    >
      {/* Slide 1 */}
      <div className="carousel-item active">
        <div className="carousel-container">
          <h2 className="animate__animated animate__fadeInDown">
            Welcome to <span>ASP <br/>
            <h3>Consultancy Services Pvt Ltd.</h3></span>
          </h2>
          <p className="animate__animated fanimate__adeInUp">
          Providing comprehensive IT Services and Hydrogeological consultancy services
         and state-of-the-art monitoring instruments that ensures the highest standards
          of quality and expertise in the field of water resource management.
          </p>
          <Link to='/About'
            className="btn-get-started animate__animated animate__fadeInUp scrollto"
          >
            Read More
          </Link>
        </div>
      </div>
      {/* Slide 2 */}
      <div className="carousel-item">
        <div className="carousel-container">
          <h2 className="animate__animated animate__fadeInDown">
            Our Mission
          </h2>
          <p className="animate__animated animate__fadeInUp">
          Our Mission is to provide outstanding Software solutions, Instruments and Consultancy
      Services by understanding the requirement of the
          clients and to build long term relationship through
          mutual trust & co-ordination.
          
          </p>
          <Link to='/About'
            className="btn-get-started animate__animated animate__fadeInUp scrollto"
          >
            Read More
          </Link>
          
        </div>
      </div>
      {/* Slide 3 */}
      <div className="carousel-item">
        <div className="carousel-container">
          <h2 className="animate__animated animate__fadeInDown">
            Our Vision
          </h2>
          <p className="animate__animated animate__fadeInUp">
          Our vision is to excel in Geoscientific services, prioritizing user
       empowerment through cutting-edge techniques and technology. We are
      committed to leading the industry, ensuring our clients have access
       to the latest advancements in the field.
          </p>
          <Link to='/About'
            className="btn-get-started animate__animated animate__fadeInUp scrollto"
          >
            Read More
          </Link>
          
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#heroCarousel"
        role="button"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon bx bx-chevron-left"
          aria-hidden="true"
        />
      </a>
      <a
        className="carousel-control-next"
        href="#heroCarousel"
        role="button"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon bx bx-chevron-right"
          aria-hidden="true"
        />
      </a>
    </div>
    <svg
      className="hero-waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28 "
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="wave-path"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        ></path>
      </defs>
      <g className="wave1">
        <use
          xlinkHref="#wave-path"
          x={50}
          y={3}
          fill="rgba(255,255,255, .1)"
        ></use>
      </g>
      <g className="wave2">
        <use
          xlinkHref="#wave-path"
          x={50}
          y={0}
          fill="rgba(255,255,255, .2)"
        ></use>
      </g>
      <g className="wave3">
        <use xlinkHref="#wave-path" x={50} y={9} fill="#fff"></use>
      </g>
    </svg>
  </section>
  {/* End Hero */}
</>

    </div>
  )
}
export default HomeBackComponents