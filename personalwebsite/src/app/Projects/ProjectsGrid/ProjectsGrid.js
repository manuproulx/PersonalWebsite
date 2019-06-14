import React from 'react';
import { Card, Image, Header, Icon } from 'semantic-ui-react';
import './ProjectsGrid.scss';

const ProjectsGrid = () => (
    <div className="ProjectsGrid" >
        <Header style={{ paddingTop: '50px' }} as="h1">Projects <Icon name="book" /></Header>
        <Card.Group style={{ display: 'flex', justifyContent: 'center'}}>
            <Card>
                <Image src={require('../../../assets/etsmobile.PNG')} />
                <Card.Content>
                    <Card.Header>Project name</Card.Header>
                    <Card.Meta>Project language</Card.Meta>
                    <Card.Description>
                        Project description
                    </Card.Description>
                </Card.Content>
                <Card.Content >
                    <a href="/">
                        <Icon name="github"/>
                        Project repository
                    </a>
                </Card.Content>
            </Card>
        </Card.Group>
    </div>
);

export default ProjectsGrid;