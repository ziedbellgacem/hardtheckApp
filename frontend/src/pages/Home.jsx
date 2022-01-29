import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import SliderHome from "../components/SiderHome";
import SliderFoot from "../components/SliderFoot";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
     <SliderHome/>
      <Categories />
      <Products/>
      <SliderFoot/>
      <Footer/>
      
    </div>
  );
};

export default Home;
