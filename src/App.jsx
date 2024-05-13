import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import Category from "./components/category/Category";
import Category2 from "./components/category/Category2";
import Services from "./components/services/Services";
import Banner from "./components/banner/Banner";
import headphone from "./assets/hero/headphone.png";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import Products from "./components/products/Products";
import Blog from "./components/blog/Blog";
import Partner from "./components/partners/Partner";
import Footer from "./components/footer/Footer";
import PopUp from "./components/popup/PopUp";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "1st May to 30th May",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse aperiam commodi voluptatum, odio soluta repellat ea amet odit harum.",
  bgColor: " #f42c37",
};
const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "1st May to 30th May",
  image: smartwatch2,
  title2: "Smart Solos",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse aperiam commodi voluptatum, odio soluta repellat ea amet odit harum.",
  bgColor: " #2dcc6f",
};
const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  const handlePopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden px-4">
      <NavBar handlePopup={handlePopup} />
      <Hero handlePopup={handlePopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blog />
      <Partner />
      <Footer />
      <PopUp orderPopup={orderPopup} handlePopup={handlePopup} />
    </div>
  );
};

export default App;
