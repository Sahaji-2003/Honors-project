//import logo from './logo.svg';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeadComp1 from './components/HeadComp1';
import HeadComponent from './components/HeadComponent';
import HomeBackComponents from './components/HomeBackComponents';
import HomeMidComponent from './components/HomeMidComponent';
import React, {useEffect} from 'react';
import MobileNav from './components/MobileNav';


// const CustomTitleBar = ({ title, logoPath }) => {
//   return (
//     <div className="custom-title-bar">
//       <img src="assets\img\apple-touch-icon.jpg" alt="Logo" className="title-bar-logo" />
//       <h1 className="title-bar-title">{title}</h1>
//     </div>
//   );
// };


const App=()=>{
//   useEffect(() => {
    // Update the document title
    // document.title = 'ASP-pvt.ltd';
  // }, []); 
  // The empty dependency array ensures that this effect runs once, similar to componentDidMount

  return (
    
    <>
    {/* <CustomTitleBar title="ASP Consultancy Services Pvt.Ltd" logoPath="assets/img/apple-touch-icon.jpg" /> */}
      {/* <HeadComp1/> */}
      <HeadComponent/>
    
      {/* End Header */}
      {/* ======= Hero Section ======= */}
      <HomeBackComponents />
      {/* End Hero */}
      <HomeMidComponent />
      {/* End #main */}
      {/* ======= Footer ======= */}
      
      <FooterComponent />
      {/* End Footer */}
      
    </>
  );
}

export default App;
