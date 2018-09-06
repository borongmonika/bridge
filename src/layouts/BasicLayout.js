//首页 
//lsy
//2018-9-4

import React, { Component, Fragment } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Input } from 'antd';
import GlobalHeader from '../component/GlobalHeader';
import GlobalFooter from '../component/GlobalFooter';
import GlobalSider from '../component/GlobalSider';
import router from 'umi/router';
import logo from '../assets/57130611.jpg';
import * as routes from '../common/routes';

const Search = Input.Search;
const { Header, Content, Footer, Sider } = Layout;
const { headerRoutes } = routes;

//面包屑


class BasicLayout extends Component {
  componentWillMount() {
    const { history: { location: { pathname } } } = this.props;
    if (pathname === '/') {
      router.push('/home');
    }
  }
  render() {

    // 识别
    const { history: { location: { pathname } } } = this.props;
    const headerRouter = '/' + pathname.split('/')[1];
    const siderData = () => {
      for (let route of headerRoutes) if (route.path === headerRouter) {
        return route;
      }
    }
    const siderRoute = siderData();
    return (
      <Layout style={{ minWidth: 780 }}>
        <div style={{ border: 'none' }}>
          <img style={{ height: '80px', 'float': "left" }} src={logo} />
          <div>
            <Search
              style={{ width: 200, float: 'right', right: 20, top: 20 }}
              placeholder="input search text"
              enterButton="搜索"
              size="large"
              onSearch={value => console.log(value)}
            />
          </div>
        </div>
        <Header >
          <GlobalHeader
            headerRoutes={headerRoutes}
            pathname={headerRouter}
          />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            {siderRoute.child.length > 0 ?
              <Sider style={{ background: '#fff', minHeight: "71vh" }} >
                <GlobalSider
                  siderRoute={siderRoute}
                />
              </Sider>
              : ''
            }
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


export default BasicLayout;
