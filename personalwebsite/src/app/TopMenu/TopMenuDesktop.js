import React from 'react';
import _ from 'lodash';
import { Menu, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

class TopMenuDesktop extends React.Component {
  render() {
    const scrollToSection = section => {
      const { sections } = this.props;
      window.scrollTo(0, sections[section] || 0);
    }
    const { leftItems } = this.props;
    return (
      <Menu fixed="top" inverted style={{ height: '75px', opacity: '0.9' }}>
        <Menu.Item>
          <Header as="h1" style={{ color: 'white' }}>
            Emmanuel Proulx
          </Header>
        </Menu.Item>
        {_.map(leftItems, item => <Menu.Item onClick={() => scrollToSection(item.key)} {...item} style={{ padding: '0 100px', textAlign: 'center', fontSize: '1.25rem' }} />)}
      </Menu>
    )
  }
};

const mapStateToProps = state => ({
  sections: state.sections
});

export default connect(mapStateToProps, () => ({}))(TopMenuDesktop);