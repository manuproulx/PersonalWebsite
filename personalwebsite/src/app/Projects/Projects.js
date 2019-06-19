import React from 'react';
import { Container } from 'semantic-ui-react';
import GitHub from './GitHub/GitHub';
import ProjectsGrid from './ProjectsGrid/ProjectsGrid';
import './Projects.scss';

class Projects extends React.Component {


    render() {
        return (
            <div ref={this.ref}>
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
};

export default Projects;