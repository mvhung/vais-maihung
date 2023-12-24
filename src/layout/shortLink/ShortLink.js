import "./style.scss";
import bgShort from "../../images/bg-shorten-desktop.svg";
import { Form, Button } from "antd";
import LinkItem from "../../components/linkItem/LinkItem";
function ShortLink() {
  return (
    <div className="container">
      <Form id="short-link">
        <img src={bgShort} alt="" />
        <div className="InputLink">
          <Form.Item name="link" className="Input">
            <input placeholder="Shorten a link here..." />
          </Form.Item>
          <Button type="submit">Shorten It!</Button>
        </div>
      </Form>
      <div className="result-link">
            <LinkItem/>
            <LinkItem/>
            <LinkItem/>
      </div>
    </div>
  );
}

export default ShortLink;
