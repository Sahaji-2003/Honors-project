import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';

const HeadComponent = () => {
  const [isMobileNavActive, setMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavActive(!isMobileNavActive);
  };

  return (
    <div className='HeadComponent'>
      <header
        id="header"
        className="fixed-top d-flex align-items-center header-transparent"
      >
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <a href="index.html">
              <img src="assets/img/asp-logo.png" alt="" className="img-fluid" />
            </a>
          </div>
          <nav id="navbar" className="navbar">
          <ul>
                            <li className="active ">
                                
                                    <Link to="/"> Home </Link>
                                
                            </li>
                            <li>
                                <Link to="/About"> About </Link>
                            </li>

                            <li className="dropdown" >
                                <Link to="/IT-Services">

                                    <span>IT Services</span> <i className="bi bi-chevron-down" />

                                </Link>
                                <ul>
                                    <li>
                                        <Link to='/IT-0'>Services and Priorities</Link>
                                    </li>
                                    <li>
                                        <Link to="/IT-1">

                                            <span>SAP Datasphere</span> <i className="bi bi-chevron-down" />

                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/IT-2">

                                            <span>SAP Analytics</span> <i className="bi bi-chevron-down" />

                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/IT-3">

                                            <span>SAP S/4 HANA</span> <i className="bi bi-chevron-down" />

                                        </Link>

                                    </li>
                                    <li>
                                        <Link to="/IT-4">

                                            <span>SAP Architectural Planning</span> <i className="bi bi-chevron-down" />

                                        </Link>

                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/HydroServices" > Hydrogeological Services </Link>
                            </li>
                            <li>
                                <Link to="/Instruments" >Instruments</Link>
                            </li>


                            <li>
                                <Link to="/Contact">Contact Us</Link>
                            </li>
                        </ul>
            {/* <button onClick={toggleMobileNav}> */}
              <i className="bi bi-list mobile-nav-toggle" onClick={toggleMobileNav}/>
            {/* </button> */}
            
          </nav>
        </div>
        {isMobileNavActive &&  <MobileNav /> }
      </header>

      
    </div>
    
  );
};

export default HeadComponent;





// import React from 'react';
// import { Link } from 'react-router-dom';



// const HeadComponent = () => {
//     return (
//         <div className='HeadComponent'>
//             <header
//                 id="header"
//                 className="fixed-top d-flex align-items-center header-transparent"
//             >
//                 <div className="container d-flex justify-content-between align-items-center">
//                     <div className="logo">
//                         {/* <h1 className="text-light">
                            
//                                 <span> <h1><b>ASP</b></h1></span>
                            
//                         </h1> */}
//                         {/* Uncomment below if you prefer to use an image logo */}
//                         <a href="index.html"><img src="assets/img/asp-logo.png" alt="" className="img-fluid" /> </a>
//                         {/* <img src="assets/img/asp-logo.png" alt="Logo" style="height: 16px; width: 16px;"/>  */}
//                     </div>
//                     <nav id="navbar" className="navbar">
//                         <ul>
//                             <li className="active ">
                                
//                                     <Link to="/"> Home </Link>
                                
//                             </li>
//                             <li>
//                                 <Link to="/About"> About </Link>
//                             </li>

//                             <li className="dropdown" >
//                                 <Link to="/IT-Services">

//                                     <span>IT Services</span> <i className="bi bi-chevron-down" />

//                                 </Link>
//                                 <ul>
//                                     <li>
//                                         <Link to='/IT-0'>Services and Priorities</Link>
//                                     </li>
//                                     <li>
//                                         <Link to="/IT-1">

//                                             <span>SAP Datasphere</span> <i className="bi bi-chevron-down" />

//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link to="/IT-2">

//                                             <span>SAP Analytics</span> <i className="bi bi-chevron-down" />

//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link to="/IT-3">

//                                             <span>SAP S/4 HANA</span> <i className="bi bi-chevron-down" />

//                                         </Link>

//                                     </li>
//                                     <li>
//                                         <Link to="/IT-4">

//                                             <span>SAP Architectural Planning</span> <i className="bi bi-chevron-down" />

//                                         </Link>

//                                     </li>
//                                 </ul>
//                             </li>
//                             <li>
//                                 <Link to="/HydroServices" > Hydrogeological Services </Link>
//                             </li>
//                             <li>
//                                 <Link to="/Instruments" >Instruments</Link>
//                             </li>


//                             <li>
//                                 <Link to="/Contact">Contact Us</Link>
//                             </li>
//                         </ul>
//                         <button onClick={(MobileNav)}>
//                         <i className="bi bi-list mobile-nav-toggle" />
//                         </button>
//                     </nav>
        
                    
//                 </div>
//             </header>

//         </div>
        
//     )
// }

// export default HeadComponent
