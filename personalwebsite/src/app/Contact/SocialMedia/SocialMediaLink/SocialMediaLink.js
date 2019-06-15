import React from 'react';
import { Card, Divider, Icon, Header } from 'semantic-ui-react';

const SocialMediaLink = ({
    link, platform, handle, icon, color
}) => (
    <Card link href={link}>
        <Divider hidden horizontal />
        <Card.Header>
            <Icon style={{ color: color}} name={icon} size="massive" />
            <Header as="h1">{platform}</Header>
        </Card.Header>
        <Card.Meta>{handle}</Card.Meta>
        <Divider hidden horizontal />
    </Card>
);

export default SocialMediaLink;