import React from 'react';
import { Container } from 'semantic-ui-react';
import SocialMedia from './SocialMedia/SocialMedia';
import './Contact.scss';
import Email from './Email/Email';

class Contact extends React.Component {

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

export default Contact;