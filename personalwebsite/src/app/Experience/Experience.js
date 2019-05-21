import React from 'react';
import { Container } from 'semantic-ui-react';
import './Experience.scss';
import Education from './Education/Education';
import WorkExperience from './WorkExperience/WorkExperience';

const Experience = () => (
    <Container className="Experience">
        <Education/>
        <WorkExperience />
    </Container>
);

export default Experience;