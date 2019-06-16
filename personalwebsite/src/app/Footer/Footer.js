import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import './Footer.scss';

const Footer = () => (
    <div className="Footer">
        <Container>
            <Header as="h4">©Emmanuel Proulx</Header>
            <p>Made with <span style={{ color: 'red' }}>❤</span> with React and Semantic UI</p>
        </Container>
    </div>

);

export default Footer;