import React from 'react';
import { Responsive } from 'semantic-ui-react';
import TopMenuMobile from './TopMenuMobile';
import TopMenuDesktop from './TopMenuDesktop';

class TopMenu extends React.Component {
    state = {
      visible: false
    };
  
    handlePusher = () => {
      const { visible } = this.state;
      if (visible) this.setState({ visible: false });
    };
  
    handleToggle = () => this.setState({ visible: !this.state.visible });
  
    render() {
      const { children, leftItems } = this.props;
      const { visible } = this.state;
  
      return (
        <div>
          <Responsive {...Responsive.onlyMobile}>
            <TopMenuMobile
              leftItems={leftItems}
              onPusherClick={this.handlePusher}
              onToggle={this.handleToggle}
              visible={visible}
            >
              {children}
            </TopMenuMobile>
          </Responsive>
          <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <TopMenuDesktop leftItems={leftItems}/>
            {children}
          </Responsive>
        </div>
      );
    }
  }

  export default TopMenu;