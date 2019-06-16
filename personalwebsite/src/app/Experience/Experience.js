import React from 'react';
import { Container } from 'semantic-ui-react';
import './Experience.scss';
import Education from './Education/Education';
import WorkExperience from './WorkExperience/WorkExperience';

const Experience = () => (
    <div style={{ backgroundColor: 'rgba(243, 243, 243, 0.88)',padding:'1px 0' }}>
        <Container className="Experience">
            <Education/>
            <WorkExperience />
        </Container>
    </div>
);

export default Experience;