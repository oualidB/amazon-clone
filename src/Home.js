import React from "react";
import "./Home.css";
import Product from "./Product";

const IMAGE_URL =
  "https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/gateway/placement/launch/BrutusVsCesar/BRUCE_2020_GWBleedingHero_COVIDUPDATE_ENG_XSite_1500x600_PV_fr-FR._CB403749904_.jpg";
function Home() {
  return (
    <div className="home">
      <img className="home__image" src={IMAGE_URL} alt="" />
      <div className="home__row">
        <Product
          id="12344"
          title="Asus Laptop"
          price={999.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/08/acs/amazon-designer/2020/09/16/DURM-242E43B84FDE7BK0._AA210_.jpeg"
        />

        <Product
          id="123441"
          title="Casque Bluetooth"
          price={39.96}
          rating={3}
          image="https://www.amazon.fr/images/I/71DBS8i2OuL._AC_SL1500__AA210_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123442"
          title="LA PENSÉE POSITIVE"
          price={9.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51qmFlDc-VL._SX311_BO1,204,203,200_.jpg"
        />

        <Product
          id="12344"
          title="La PNL de A à Z"
          price={7.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51ihV3TnJeL._SX311_BO1,204,203,200_.jpg"
        />
        <Product
          id="12344"
          title="Le langage corporel"
          price={7.95}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51DjoyCVB4L._SX311_BO1,204,203,200_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
