import React from "react";
import { HomeStyle } from "../../Styles/StyledComponents";
import Product from "../Product";

function Home() {
  return (
    <HomeStyle>
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      {/*Product; id, title, price, rating, image */}
      <div className="home_row">
        <Product
          id="1"
          title="The Lean Startup: How Constain Innovation Create Radically Succesful Bussiness Paperback"
          price={11.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="2"
          title="Apple iPhone 8 Plus, 256GB, Gold - Fully Unlocked (Renewed)"
          price={441.6}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61yX3VKY7GL._AC_SX679_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="4"
          title="Fitbit Versa 2 Special Edition Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-in, Sleep and Swim Tracking, Smoke Woven/Mist Grey, One Size (S and L Bands Included)"
          price={199.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81-sbZTrBvL._AC_SL1500_.jpg"
        />
        <Product
          id="3"
          title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="5"
          title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red"
          price={64.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._SL1500_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="6"
          title="Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN)"
          price={278.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81Wt3h7-V2L._AC_SL1500_.jpg"
        />
      </div>
    </HomeStyle>
  );
}

export default Home;
