import React from 'react';
import _ from 'lodash';
import { Menu, Header } from 'semantic-ui-react';

const TopMenuDesktop = ({ leftItems }) => (
    <Menu fixed="top" inverted style={{ height: '75px', opacity: '0.9' }}>
      <Menu.Item>
        <Header as="h1" style={{ color: 'white' }}>
            Emmanuel Proulx
        </Header>
      </Menu.Item>
      {_.map(leftItems, item => <Menu.Item {...item} style={{ padding: '0 100px', textAlign: 'center', fontSize: '1.25rem' }} />)}
    </Menu>
  );

  export default TopMenuDesktop;