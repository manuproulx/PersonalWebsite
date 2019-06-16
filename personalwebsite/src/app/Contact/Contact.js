import React from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import SocialMedia from './SocialMedia/SocialMedia';
import './Contact.scss';
import Email from './Email/Email';
import { setRefToSection } from '../../actions/sections';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        const { onSetRefToSection } = this.props;
        onSetRefToSection(this.ref.current.offsetTop + 2000);
    }

    render() {
        return (
            <div ref={this.ref} className="Contact">
                <Container>
                    <SocialMedia />
                    <Email />
                </Container>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onSetRefToSection: ref => dispatch(setRefToSection(ref, 'contact'))
});

export default connect(() => ({}), mapDispatchToProps)(Contact);