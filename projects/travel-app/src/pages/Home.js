import './home.css';

const Home = () => {
  return (
  <>
  <div className="default">
    <div className="page">
      <div className="home">
        <div className="search">
          <div className="page-title">Destinations that are <span className="emphasis">made for you</span>.</div>
          <div className="page-button"><a href="#slice">Search Destinations</a></div>
        </div>
      </div>
      <div className="slice" id="slice">
        <div className="slice-title">Destinations</div>
        <div className="destination">
          <div className="dest-info">
            <div className="dest-name">
              Milan, Italy<span className="dest-airport">Milan Intl Airport</span>
            </div>
            <div className="dest-price">
              $1390
            </div>
          </div>
          <div className="dest-image-container">
            <img className="dest-image" src={require("../images/rome-italy.jpg")}/>
          </div>
        </div>
        <div className="destination">
          <div className="dest-info">
            <div className="dest-name">
              Fuji, Japan<span className="dest-airport">Shizuoka Airport</span>
            </div>
            <div className="dest-price">
              $1150
            </div>
          </div>
          <div className="dest-image-container">
            <img className="dest-image" src={require("../images/fuji-japan.jpg")}/>
          </div>
        </div>
        <div className="destination">
          <div className="dest-info">
            <div className="dest-name">
              Cancun, Mexico<span className="dest-airport">Cancun Intl Airport</span>
            </div>
            <div className="dest-price">
              $1220
            </div>
          </div>
          <div className="dest-image-container">
            <img className="dest-image" src={require("../images/cancun-mexico.jpg")}/>
          </div>
        </div>
        <div className="destination">
          <div className="dest-info">
            <div className="dest-name">
              Miami, Florida<span className="dest-airport">Miami Airport</span>
            </div>
            <div className="dest-price">
              $430
            </div>
          </div>
          <div className="dest-image-container">
            <img className="dest-image" src={require("../images/miami-florida.jpg")}/>
          </div>
        </div>
        <div className="destination">
          <div className="dest-info">
            <div className="dest-name">
              Newport, California<span className="dest-airport">John Wayne Airport</span>
            </div>
            <div className="dest-price">
              $350
            </div>
          </div>
          <div className="dest-image-container">
            <img className="dest-image" src={require("../images/newport-california.jpg")}/>
          </div>
        </div>
        <div className="destination">
          <div className="dest-info">
            <div className="dest-name">
              Alaska<span className="dest-airport">Ted Stevens Anchorage Intl Airport</span>
            </div>
            <div className="dest-price">
              $600
            </div>
          </div>
          <div className="dest-image-container">
            <img className="dest-image" src={require("../images/alaska.jpg")}/>
          </div>
        </div>
        <div className="destination">
          <div className="dest-info">
            <div className="dest-name">
              Rio de Janeiro, Brazil<span className="dest-airport">Galeao Intl Airport</span>
            </div>
            <div className="dest-price">
              $1500
            </div>
          </div>
          <div className="dest-image-container">
            <img className="dest-image" src={require("../images/rio-brazil.jpg")}/>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="footer-title"><a href="https://github.com/BryceCoop99/CS260">Bryce's Github</a></div>
    </div>
    </div>
  </>
  );
};

export default Home;