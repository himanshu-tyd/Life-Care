import React from "react";
import HeaderPage from "../header/header";
import MainSection from "../main-section/main";
import Icons from "../icons/icons";
import Services from "../services/services";
import AboutPage from "../../pages/about-us/about";
import DoctorList from "../doctor/doctor";
import Book from "../book/book";
import Reviews from "../review/review";
import Footer from "../../pages/footer/footer";

const HomePage = () => {
  return (
    <div className="homepage">
      <HeaderPage />
      <MainSection />
      <Icons />
      <Services />
      <AboutPage />
      <DoctorList />
      <Book/>
      <Reviews/>
      <Footer/>
    </div>
  );
};

export default HomePage;
