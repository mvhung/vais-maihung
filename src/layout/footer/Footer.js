import "./style.scss";
import logo from "../../images/logo2.svg";
import facebook from '../../images/icon-facebook.svg'
import instagram from '../../images/icon-instagram.svg'
import pinterest from '../../images/icon-pinterest.svg'
import twitter from '../../images/icon-twitter.svg'
import { Row, Col } from "antd";
function Footer() {
  return (
    <div className="wrap-footer">
      <Row className="container">
        <Col xs={24} md={4}>
          <img src={logo} alt="" />
        </Col>
        <Col xs={24} md={4}></Col>
        <Col xs={24} md={4}>
          <div className="footer-col-link">
            <h3>Features</h3>
            <div>
              <a href="/"> Link Shortening</a>
              <a href="/"> Branded Links</a>
              <a href="/"> Analytics</a>
            </div>
          </div>
        </Col>
        <Col xs={24} md={4}>
          <div className="footer-col-link">
            <h3>Resources</h3>
            <div>
              <a href="/"> Blog</a>
              <a href="/"> Developers</a>
              <a href="/"> Support</a>
            </div>
          </div>
        </Col>
        <Col xs={24} md={4}>
          <div className="footer-col-link">
            <h3>Company</h3>
            <div>
              <a href="/"> About</a>
              <a href="/"> Our Team</a>
              <a href="/"> Careers</a>
              <a href="/"> Contact</a>
            </div>
          </div>
        </Col>
        <Col xs={24} md={4}>
          <div className="footer-col-icon">
            <img src={facebook} alt=""/>
            <img src={instagram} alt=""/>
            <img src={pinterest} alt=""/>
            <img src={twitter} alt=""/>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
