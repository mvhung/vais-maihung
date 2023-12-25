import "./style.scss";
import bgShort from "../../images/bg-shorten-desktop.svg";
import { Form, Button,Input } from "antd";
import LinkItem from "../../components/linkItem/LinkItem";
import { useState } from "react";
function ShortLink() {
  const [form] = Form.useForm();
  const [coping ,setCoping] = useState(0);
  const validateLink = (rule, value, callback) => {
    const pattern = /\b((?:https?:\/\/|www\.)\S+)\b/;
    if (value && !pattern.test(value)) {
      callback('Link Invalid');
    } else {
      callback();
    }
  };

  
  return (
    <div className="container">
      <Form id="short-link" form={form}>
        <img src={bgShort} alt="" />
        <div className="InputLink">
          <Form.Item
            name="link"
            rules={[{ required: true, message: "Please add a link" },{ validator: validateLink },]}
            className="Input"
          >
            <Input placeholder="Shorten a link here..." />
          </Form.Item>
          <Form.Item className="btn-short">
            <Button type="primary" htmlType="submit" >
              Shorten It!
            </Button>
          </Form.Item>
        </div>
      </Form>
      <div className="result-link">
        <LinkItem origin={'https://poe.com/chat/2uzxp7t9psov5alfv1l'} result={'https://www.photopea.com/'} copied={coping === 1} setCoping={()=>setCoping(1)}/>
        <LinkItem origin={'https://poe.com/chat/2uzxp7t9psov5alfv1l'} result={'https://www.photopea.com/'} copied={coping === 2} setCoping={()=>setCoping(2)}/>
        <LinkItem origin={'https://poe.com/chat/2uzxp7t9psov5alfv1l'} result={'https://www.photopea.com/'} copied={coping === 3} setCoping={()=>setCoping(3)}/>
      </div>
    </div>
  );
}

export default ShortLink;
