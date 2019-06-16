import React from 'react';
import { Card, Image, Icon, Divider } from 'semantic-ui-react';

const ProjectCard = ({
    name, platform, description, image, github, website
}) => (
    <Card>
            {image && (
                <Image src={require(`../../../../assets/${image}`)} />
            )}
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>{platform}</Card.Meta>
                <Card.Description>{description}</Card.Description>
            </Card.Content>
            {(github || website) && (
                <Card.Content extra style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
                    {github && (
                        <a href={github}>
                            <Icon name="github"/>
                            Project repository
                        </a>
                    )}
                    {github && website && (
                        <Divider horizontal hidden />
                    )}

                    {website && (
                        <a href={website}>
                            <Icon name="linkify"/>
                            Website
                        </a>
                    )}          
                </Card.Content>
            )}
           

        </Card>
);

export default ProjectCard;