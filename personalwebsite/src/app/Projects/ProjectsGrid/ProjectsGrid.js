import React from 'react';
import { Card, Container, Header, Icon } from 'semantic-ui-react';
import './ProjectsGrid.scss';
import ProjectCard from './ProjectCard/ProjectCard';

const projects = [
    {
        name: 'NFTicket',
        platform: 'React app with Material UI library, Nest.js API and backend hosted on Appwrite',
        description: 'NFT ticket marketplace platform hosted on the EOS blockchain that lets users create and customize their own events, and purchase tickets from any events. Event organizers could use app to scan QR codes and verify NFT authenticity.',
        image: 'nfticket.png',
        github: 'https://github.com/LOG795-Equipe-2/NFTicket-Frontend'
    },
    {
        name: 'ÉTSMobile',
        platform: 'iOS (Swift) and Android (Kotlin) app',
        description: 'Open-source mobile application available to all university students to check their grades, schedule, read school news, etc.',
        image: 'etsmobile.PNG',
        github: 'https://github.com/ApplETS/Notre-Dame'
    },
    {
        name: 'ApplETS club website',
        platform: 'Static front-end website hosted on Netlify',
        description: 'Open-source website for a mobile development student club. The students can discover our projects and apply to join the club through the website.',
        github: 'https://github.com/ApplETS/Site-Web-App-ETS',
        image: 'clubapplets.png',
        website: 'https://clubapplets.ca/'
    },
    {
        name: 'GuideFinder',
        platform: 'Multiplatform mobile app made with Flutter',
        description: 'Proof of concept app made during StarterHacks 2018 at UWaterloo. Lets the user look for guides at specific locations, and plan a trip with them. Aims to connect the locals with tourists - to humanize travelling.',
        image: 'travelguide.png',
        github: 'https://github.com/GuideFinder/guide_finder_app',
        website: 'https://guidefinder.github.io/'
    },
    {
        name: 'Portfolio website',
        platform: 'React app with static content, GitHub GraphQL API fetching',
        description: 'Small single-page portfolio website for yarnpresentation of personal projects.',
        image: 'portfoliowebsite.jpg',
        website: 'https://emmanuelproulx.com',
        github: 'https://github.com/manuproulx/PersonalWebsite'
    }
]

const ProjectsGrid = () => (
    <div className="ProjectsGrid" >
        <Header as="h1"><Icon name="book" />Projects</Header>
        <Container className="onlyMobile">
            <Card.Group style={{ display: 'flex', justifyContent: 'center'}}>
                {projects.map(project => (
                    <ProjectCard  key={project.name} {...project} />
                ))}
            </Card.Group>
        </Container>
        <Container className="onlyDesktop">
            <Card.Group itemsPerRow={2} style={{ display: 'flex', justifyContent: 'center'}}>
                {projects.map(project => (
                    <ProjectCard  key={project.name} {...project} />
                ))}
            </Card.Group>
        </Container>

    </div>
);

export default ProjectsGrid;