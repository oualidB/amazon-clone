import React from "react";
import "./Home.css";

const IMAGE_URL =
  "https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/gateway/placement/launch/BrutusVsCesar/BRUCE_2020_GWBleedingHero_COVIDUPDATE_ENG_XSite_1500x600_PV_fr-FR._CB403749904_.jpg";
function Home() {
  return (
    <div className="home">
      <img className="home__image" src={IMAGE_URL} alt="" />
    </div>
  );
}

export default Home;
