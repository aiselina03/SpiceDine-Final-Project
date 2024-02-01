import React, { useEffect, useState } from "react";
import "./style.scss";
import SliderImage from "../../components/SliderImage";

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  return (
    <>
    {loading ? (
        <div className="loaderCenter">
          <div className="loader">
            <img src="/src/images/loadingimage.webp" alt="" />
          </div>
        </div>
      ) : (
       <>
        <div className="homePage"> 
        <SliderImage/>
         </div>
       </>
      )}
    </>
  );
}

export default Home;
