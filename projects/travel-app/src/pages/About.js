import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <>
    <div className="page-other">
      <div className="default">
        <div className="container">
          <div className="container-title">About Travel Destiny</div>
          <div className="container-desc">
            &emsp; Since moving to the United States in 2016. Magdo has traveled to and from his home country, Brazil, paying high prices for his
            airline tickets. He spent almost 5 years coming up with a plan to start his own company to provide cheaper prices on airline tickets
            in the vast market.
            <br/><br/>
            &emsp; Magdo and his wife have 1 daughter and now live in Utah. They love to travel, explore new cities, and provide self-less service. Magdo
            worked as a Supervisor for Nature's Distribution, serving as the lead Supervisor for the company. He trained dozens of employees while preparing
            his future career of package airline ticketer.
            <br/><br/>
            &emsp; Despite the unfortunate price rises in the recent years, Magdo and his family now sell discounted airline prices that sell on a first-come
            first-server basis by email contact only! Magdo always says, "No matter your desired destination, your cheaper price is secured with us!"
            <br/><br/>
            &emsp; Contact Magdo now and receive the latest prices through Travel Destiny!!
          </div>
          
          <div className="container-button">
            <Link className="nav-link" to="/contact#page-other">Contact Us!</Link>
          </div>
        </div>
      </div>
    </div>
    
    <div className="footer">
      <div className="footer-title"><a href="https://github.com/BryceCoop99/CS260">Bryce's Github</a></div>
    </div>
    </>
  );
};

export default About;