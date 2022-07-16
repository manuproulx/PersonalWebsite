import React from 'react';
import { Header, Icon, Card } from 'semantic-ui-react';
import SocialMediaLink from './SocialMediaLink/SocialMediaLink';

const socialMedia = [
    {
        platform: 'LinkedIn',
        link: 'https://www.linkedin.com/in/emmanuel-proulx-546853155/',
        icon: 'linkedin',
        handle: 'Emmanuel Proulx',
        color: '#0077B5'
    }
];

const SocialMedia = () => (
    <div className="SocialMedia">
        <Header as="h1">
            <Icon name="user circle" />
            Social media
        </Header>
        <Card.Group centered>
           {socialMedia.map(link => (
               <SocialMediaLink {...link} key={link.platform} />
           ))}
        </Card.Group>

    </div>
);

export default SocialMedia;