import { Outlet, Link } from "react-router-dom";
import './layout.css';

const Layout = () => {
  return (
    <>
    <div className="nav nav-other">
      <div className="title">
        <a href="./home.html">Travel Destiny</a>
      </div>
      <div className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </div>
      <div className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </div>
      <div className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </div>
      <div className="nav-item">
        <Link className="nav-link" to="/reviews">Reviews</Link>
      </div>
    </div>
    
    <Outlet />
    </>
  )
};

export default Layout;