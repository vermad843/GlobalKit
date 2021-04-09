import React from 'react';
import './Home.css';
import Left from './Left';
import Right from './Right';

function Home() {
    return (
    <div className = "home">
        <img
          className = "home_image" 
          src  = "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/AugOffers/GW22Aug/DesktopHero_1500x600._CB407658174_.jpg" alt = ""/>
         <div className = "home__sides">
          <Left className = "home__sides__left"/>
          <Right className = "home__sides__right"/> 
        </div> 
     </div> 
    )
}

export default Home;
