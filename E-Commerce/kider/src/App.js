import React from "react";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Classes from "./Pages/Classes/Classes";
import ContactUs from './Pages/ContactUs/ContactUs'
import Footer from "./Components/Footer/Footer";
import Error from "./Pages/Error/Error";
import Testimonial from "./Pages/Testimonial/Testimonial";
import Appointments from "./Pages/Appointments/Appointments";
import BecomeATeachers from "./Pages/BecomeATeachers/BecomeATeachers";
import Teachers from "./Pages/Teachers/Teachers";
import Facilities from "./Components/Facilities/Facilities";
import SchoolFacilities from "./Pages/SchoolFacilities/SchoolFacilities";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/home' element={<Home />} /> */}
          <Route path="/aboutUS" element={<AboutUs />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/schoolFacilities" element={<SchoolFacilities />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/becomeaTeachers" element={<BecomeATeachers />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/error" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
