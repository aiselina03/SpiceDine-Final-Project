import React, { useEffect, useState } from "react";
import "./style.scss";
import SliderImage from "../../components/SliderImage";
import About from "../../components/About";
import AboutIcons from "../../components/AboutIcons";
import BookingTable from "../../components/BookingTable";
import Video from "../../components/Video";
import Menu from "../../components/Menu";
import Scroll from "../../components/Scroll";
import Mode from "../../components/Mode";
import FeedBack from "../../components/FeedBack";
import HomeChef from "../../components/HomeChef";
import Cursor from "../../components/Cursor";

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2300);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loaderCenter">
          <div className="loader">
            <img src="/src/images/loader.gif" alt="" />
            {/* <img src="/src/images/loadingimage.webp" alt="" /> */}
          </div>
        </div>
      ) : (
        <>
          <div className="homePage">
            <SliderImage />
            <About /> 
            <AboutIcons />
            <Menu />
            <BookingTable />
            <Video />
            <HomeChef/>
            <FeedBack />
          </div>
        </>
      )}
      <Mode />
      <Scroll />
      <Cursor/>
    </>
  );
}

export default Home;
