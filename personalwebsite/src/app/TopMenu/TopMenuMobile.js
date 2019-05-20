import React from 'react';
import _ from "lodash";
import { Sidebar, Menu, Icon, Header } from 'semantic-ui-react';

const TopMenuMobile = ({
    children,
    leftItems,
    onPusherClick,
    onToggle,
    visible
  }) => (
    <React.Fragment>
    <Menu fixed="top" inverted style={{ height: '75px', opacity: '0.9' }}>>
          <Menu.Item>
          <Header as="h1" style={{ color: 'white' }}>
            Emmanuel Proulx
        </Header>
          </Menu.Item>
          <Menu.Item onClick={onToggle} position="right">
            <Icon name="sidebar" />
          </Menu.Item>
        </Menu>
        <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible={visible}
      >
      {_.map(leftItems, item => <Menu.Item {...item}  style={{ padding: '25px 100px', textAlign: 'center', fontSize: '1.5rem' }} />)}
      </Sidebar>
        <Sidebar.Pushable>
      

      <Sidebar.Pusher
        dimmed={visible}
        onClick={onPusherClick}
        style={{ minHeight: "100vh" }}
      >
        
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
    </React.Fragment>

  );

  export default TopMenuMobile;