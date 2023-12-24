import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  { createBrowserRouter, RouterProvider, Route,} from "react-router-dom";
import SercvicesComponent from './components/services_Page/SercvicesComponent';
import AboutComponent from './components/AboutComponent/AboutComponent';
import InstrumentsComponent from './components/Instruments_page/InstrumentsComponent';
import PortfolioComponent from './components/Portfolio_page/PortfolioComponent';
import ContactComponent from './components/Contact_page/ContactComponent';
import InstrumentDetails from './components/Instruments_page/InstrumentDetails';
import InstrumentDetails2 from './components/Instruments_page/InstrumentDetails2';
import InstrumentDetails3 from './components/Instruments_page/InstrumentDetails3';
import InstrumentDetails4 from './components/Instruments_page/InstrumentDetails4';
import InstrumentDetails5 from './components/Instruments_page/InstrumentDetails5';
import InstrumentDetails6 from './components/Instruments_page/InstrumentDetails6';
import InstrumentDetails7 from './components/Instruments_page/InstrumentDetails7';
import InstrumentDetails8 from './components/Instruments_page/InstrumentDetails8';
import InstrumentDetails9 from './components/Instruments_page/InstrumentDetails9';
import InstrumentDetails10 from './components/Instruments_page/instrumentDetails10';
import HydroServices from './components/services_Page/HydroServices';
import It_homepage from './components/It_Services/It_homepage';
import ItSap1 from './components/It_Services/ItSap1';
import ItSap2 from './components/It_Services/ItSap2';
import ItSap3 from './components/It_Services/ItSap3';
import ItSap4 from './components/It_Services/ItSap4';
import ItSP from './components/It_Services/itSP';



const router = createBrowserRouter([
   {
    path: "/",
    element: <App />

  },
  {
    path: "/Services",
    element: <SercvicesComponent/>

  },
  {
    path: "/About",
    element: <AboutComponent/>

  },
  {
    path: "/Instruments",
    element: <InstrumentsComponent/>

  },
  {
    path: "/Portfolio",
    element: <PortfolioComponent/>

  },
  {
    path: "/Contact",
    element: <ContactComponent/>

  },
  {
    path: "/InstrumentDetails",
    element: <InstrumentDetails/>

  },
  {
    path: "/InstrumentDetails2",
    element: <InstrumentDetails2/>

  },
  {
    path: "/InstrumentDetails3",
    element: <InstrumentDetails3/>

  },
  {
    path: "/InstrumentDetails4",
    element: <InstrumentDetails4/>

  },
  {
    path: "/InstrumentDetails5",
    element: <InstrumentDetails5/>

  },
  {
    path: "/InstrumentDetails6",
    element: <InstrumentDetails6/>

  },
  {
    path: "/InstrumentDetails7",
    element: <InstrumentDetails7/>

  },
  {
    path: "/InstrumentDetails8",
    element: <InstrumentDetails8/>

  },
  {
    path: "/InstrumentDetails9",
    element: <InstrumentDetails9/>

  },
  {
    path: "/InstrumentDetails10",
    element: <InstrumentDetails10/>

  },
  {
    path: "/HydroServices",
    element: <HydroServices/>

  },
  {
    path: "/IT-Services",
    element: <It_homepage/>
  },
  {
    path: "/IT-1",
    element: <ItSap1/>
  },
  {
    path: "/IT-2",
    element: <ItSap2/>
  },
  {
    path: "/IT-3",
    element: <ItSap3/>
  },
  {
    path: "/IT-4",
    element: <ItSap4/>
  },
  {
    path:"/IT-0",
    element: <ItSP/>
  }
 




]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
