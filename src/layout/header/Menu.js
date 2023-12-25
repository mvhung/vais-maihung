import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, Space } from 'antd';
import React from 'react';
const items = [
  {
    label: <a href="/">Features</a>,
    key: '0',
  },
  {
    label: <a href="/">Pricing</a>,
    key: '1',
  },
  {
    label: <a href="/">Resources</a>,
    key: '3',
  },
  {
    type: 'divider',
  },
  {
    label: <div className="login">Login</div>,
    key: '4',
  },
  {
    label:  <div className="signup">Sign Up</div>,
    key: '5',
  },
];
 
const Menu = () => (
  <Dropdown

    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <FontAwesomeIcon icon={faBars} style={{fontSize:'24px'}} />
      </Space>
    </a>
  </Dropdown>
);
export default Menu;