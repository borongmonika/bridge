//比赛详情页面
//lsy
//2018-9-4

import React, { Component, Fragment } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Input } from 'antd';
import DetailsHeader from '../component/DetailsHeader';
import GlobalFooter from '../component/GlobalFooter';
import logo from '../assets/57130611.jpg';
import * as routes from '../common/detailsroutes';

const { Header, Content, Footer, Sider } = Layout;
const { details: headerRoutes } = routes;

//面包屑

class DetailsLayout extends Component {

    render() {

        // 识别
        const { history: { location: { pathname } } } = this.props;

        return (
            <Layout style={{ minWidth: 780 }}>
                <div style={{ border: 'none' }}>
                    <img style={{ height: '80px', 'float': "left" }} src={logo} />
                </div>
                <Header >
                    <DetailsHeader
                        headerRoutes={headerRoutes}
                        pathname={pathname}
                    />
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout style={{ padding: '12px 0', background: '#fff' }}>

                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            {this.props.children}
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ padding: 0 }}>
                    <GlobalFooter
                        links={[
                            {
                                key: 'Pro 首页',
                                title: 'Pro 首页',
                                href: 'http://pro.ant.design',
                                blankTarget: true,
                            },
                            {
                                key: 'github',
                                title: <Icon type="github" />,
                                href: 'https://github.com/ant-design/ant-design-pro',
                                blankTarget: true,
                            },
                            {
                                key: 'Ant Design',
                                title: 'Ant Design',
                                href: 'http://ant.design',
                                blankTarget: true,
                            },
                        ]}
                        copyright={
                            <Fragment>
                                Copyright <Icon type="copyright" /> 2018 蚂蚁金服体验技术部出品
                </Fragment>
                        }
                    />
                </Footer>
            </Layout>
        )
    }
}




export default DetailsLayout;