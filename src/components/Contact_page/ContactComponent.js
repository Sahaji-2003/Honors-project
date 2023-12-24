import React from 'react'
import HeadComponent from '../HeadComponent'
import FooterComponent from '../FooterComponent'

import ContactForm from './ContactReact'
import { Link } from 'react-router-dom'


const ContactComponent = () => {
  return (
    <div className="Contact">
        <>
        <HeadComponent/>
  <main id="main">
    {/* ======= Contact Section ======= */}
    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Contact</h2>
          <ol>
            <li>
              <Link to="/">Home </Link> 
            </li>
            <li>Contact</li>
          </ol>
        </div>
      </div>
    </section>
    {/* End Contact Section */}
    {/* ======= Contact Section ======= */}
    <section
      className="contact"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration={500}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i className="bx bx-map" />
                  <h3>Address</h3>
                  <p>Plot No. 44, Chhatrapati Nagar , 
                                    Wardha Road , 
                                    Nagpur - 440 015 <br/>
                                    
                                    Maharashtra (India) <br />
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bx bx-envelope" />
                  <h3>Email Us</h3>
                  <p>
                  aspcspl22@gmail.com<br/>
                  skc@aspcspl.com<br/>
                  pravin@aspcspl.com<br/>
                  
                  
                  
                  </p>
                </div>
                <div className="info-box">
                 
                  <h3>Support</h3>
                  <p>
                  support@aspcspl.com
          
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bx bx-phone-call" />
                  <h3>Call Us</h3>
                  <br/>
                  <p>
                  +91 7972657590 


                    <br />
                    +91  8830763438
                  </p>
                </div>
                <div className="info-box">
                 
                  <h3>Accounts</h3>
                  <p>
                  accounts@aspcspl.com<br/>
          
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                
              </div>
            </div>
          </div>
          <div className="col-lg-6">
          <ContactForm/>
            {/* <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <h3 style={{ textAlign: 'center' }}><b>GOT A QUESTION?</b></h3>


              <p>
We’re here to help and answer any question you might have. We look forward to hearing from you!
</p>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required=""
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form> */}
          </div>
{/* 
          <ContactForm/> */}
        </div>
      </div>
    </section>
    {/* End Contact Section */}
    {/* ======= Map Section ======= */}
    {/* <section className="map mt-2">
      <div className="container-fluid p-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sbg!4v1579767901424!5m2!1sen!2sbg"
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen=""
        />
      </div>
    </section> */}
    {/* End Map Section */}
  </main>
  {/* End #main */}
  <FooterComponent/>
</>

    </div>
  )
}

export default ContactComponent