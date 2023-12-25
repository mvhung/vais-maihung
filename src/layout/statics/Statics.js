import StaticItem from "../../components/static-item/StaticItem";
import "./style.scss";
import item1 from "../../images/icon-brand-recognition.svg";
import item2 from "../../images/icon-detailed-records.svg";
import item3 from "../../images/icon-fully-customizable.svg";

function Statics() {
  return (
    <div className="container">
      <div id="statics">
        <div className="heading">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="statics-list">
          <StaticItem
            src={item1}
            description={
              " Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
            }
            title={" Brand Recognition"}
          />
          <StaticItem
            src={item2}
            description={
              " Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            }
            title={"Detailed Records"}
          />
          <StaticItem
            src={item3}
            description={
              "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            }
            title={"Fully Customizable"}
          />
          <span className="line" />
        </div>
      </div>
    </div>
  );
}

export default Statics;
