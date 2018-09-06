import styles from './gameseatch.css';
import { Menu, Dropdown, Button, Icon, message } from 'antd';

function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
    <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
    <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
  </Menu>
);
export default function() {
  return (
    <div className={styles.normal}>
    
      <Dropdown overlay={menu}>
      <Button style={{ marginLeft: 8 }}>
        Button&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请选择查询赛事&nbsp; <Icon type="down" />
      </Button>
    </Dropdown>
    
      <Dropdown overlay={menu}>
      <Button style={{ marginLeft: 8 }}>
       Button&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请选择查询类型&nbsp; <Icon type="down" />
      </Button>
    </Dropdown>
    
    <Dropdown overlay={menu}>
      <Button style={{ marginLeft: 8 }}>
       Button&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请选择举办时间&nbsp; <Icon type="down" />
      </Button>
    </Dropdown>
    <Button type="primary" icon="search">搜索</Button>
    
    </div>
  );
}
