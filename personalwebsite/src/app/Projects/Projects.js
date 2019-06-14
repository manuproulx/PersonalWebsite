import React from 'react';
import GitHub from './GitHub/GitHub';
import { Container } from 'semantic-ui-react';
import './Projects.scss';
import ProjectsGrid from './ProjectsGrid/ProjectsGrid';

class Projects extends React.Component {
    render() {
        return (
            <div>
                <Container className="Projects">
                    <GitHub />
                </Container>
                <div style={{  backgroundColor: 'rgba(243, 243, 243, 0.88)' }}>
                    <Container>
                        <ProjectsGrid />
                    </Container>
                </div>
            </div>
        )
    }
}

export default Projects;