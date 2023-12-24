import React from 'react'
import { Link } from 'react-router-dom'

const FooterComponent = () => {
    return (
        <div className='FooterComponent'>
            
            <footer
                id="footer"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration={500}
            >
                {/* <div className="footer-newsletter">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4>Blog</h4>
                                <p>
                                    Our New Blogs
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <form action="" method="post">
                                    <input type="email" name="email" />
                                    <input type="submit" defaultValue="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <Link to="/About">About us</Link>
                                    </li>
                                    {/* <div className="social-links mt-3">
                                    <a href="#" className="twitter">
                                        <i className="bx bxl-twitter" />
                                    </a>
                                    <a href="#" className="facebook">
                                        <i className="bx bxl-facebook" />
                                    </a>
                                    <a href="#" className="instagram">
                                        <i className="bx bxl-instagram" />
                                    </a>
                                    <a href="#" className="linkedin">
                                        <i className="bx bxl-linkedin" />
                                    </a>
                                </div> */}
                                    
                                    
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="#">IT Services</a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" /> <a href="#"> Hydrogeological Services </a>
                                    </li>
                                    
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="#">Instruments</a>
                                    </li>
                                    {/* <li>
                                        <i className="bx bx-chevron-right" /> <a href="#">Marketing</a>
                                    </li> */}
                                    {/* <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="#">Comming Soon</a>
                                    </li> */}
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h4>Contact Us</h4>
                                <p>
                                    Plot No. 44, Chhatrapati Nagar , <br />
                                    Wardha Road , <br/>
                                    Nagpur - 440 015 <br/>
                                    

                                    <br />
                                    Maharashtra (India) <br />
                                    <br />
                                    <strong>Phone:</strong> +91 7972657590 / 8830763438
                                    <br />
                                    <strong>Email:</strong> aspcspl22@gmail.com
                                    <br />
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-info">
                                <h3>About ASP</h3>
                                <p>
                                    ASP Consultancy Services is your partner for success,seemlessly combining expertise and innovation to deliver enduring solutions that stand the test of time.
                                </p>
                               
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container">
                    <div className="copyright">
                        © Copyright{" "}
                        <strong>
                            <span>Moderna</span>
                        </strong>
                        . All Rights Reserved
                    </div> */}
                    {/* <div className="credits"> */}
                        {/* All the links in the footer should remain intact. */}
                        {/* You can delete the links only if you purchased the pro version. */}
                        {/* Licensing information: https://bootstrapmade.com/license/ */}
                        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-bootstrap-template-corporate-moderna/ */}
                        {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
                    {/* </div> */}
                {/* </div> */}
            </footer>
        </div>
    )
}

export default FooterComponent