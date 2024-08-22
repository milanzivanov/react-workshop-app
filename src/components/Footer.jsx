import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="container py-5">
      <nav className="nav align-items-center">
        <Link className="me-5" to="/">
          <img src={logo} alt="" />
        </Link>
        <Link className="nav-link" aria-current="page" to="/">
          Home
        </Link>
        <Link to="/products" className="nav-link">
          Products
        </Link>
        <Link to="/shop" className="nav-link">
          Shop
        </Link>
      </nav>
    </footer>
  );
}
export default Footer;
