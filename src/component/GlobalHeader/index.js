//全局首页
//lsy
//2-19-9-4
import React from 'react';
import { Menu } from 'antd';
import { Link } from 'dva/router';
import styles from './index.less';


const GlobalHeader = props => {

    const { headerRoutes, pathname } = props;
    const HeaderMenu = headerRoutes.map(child => {
        return <Menu.Item key={child.path}> <Link to={child.path}>{child.name}</Link> </Menu.Item>
    })
    return (
        <div className={styles.header}>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[pathname]}
                style={{ lineHeight: '64px' }}
            >
                {HeaderMenu}
            </Menu>
        </div>
    )
}

export default GlobalHeader;