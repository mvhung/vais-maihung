import "./style.scss";
import boost from "../../images/bg-boost-desktop.svg";
function BoostLink() {
  return (
    <div id="boost-link">
      <img src={boost} alt="" />
      <div className="container">
        <h2>Boost your links today</h2>
        <button>Get started</button>
      </div>
    </div>
  );
}

export default BoostLink;
