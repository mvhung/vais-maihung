import "./style.scss";
import logo from "../../images/logo.svg";
import Menu from "./Menu";
function Header() {
  return (
    <div id="header" className="container">
      <div className="header-left">
        <img src={logo} alt="" className="logo" />
        <div className="header-link">
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Resources</a>
        </div>
      </div>
      <div className="header-account">
        <div className="login">Login</div>
        <div className="signup">Sign Up</div>
      </div>
      <div className="nav-mobile">
        <Menu/>
       
      </div>
    </div>
  );
}

export default Header;
