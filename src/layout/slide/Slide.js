import slide from "../../images/illustration-working.svg";
import "./style.scss";
function Slide() {
  return (
    <div id="slide" >
      <div className="container">
        <div className="slide-content">
          <h1 className="slide-heading">More than just shorter links</h1>
          <h3 className="slide-description">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </h3>
          <button className="slide-button">Get Started</button>
        </div>
      </div>
      <div className="slide-img">
        <img src={slide} alt="" />
      </div>
    </div>
  );
}

export default Slide;
