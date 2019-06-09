import React from 'react';
import GitHub from './GitHub/GitHub';
import { Container } from 'semantic-ui-react';
import './Projects.scss';

class Projects extends React.Component {
    render() {
        return (
            <div>
                <Container className="Projects">
                    <GitHub />
                </Container>
            </div>
        )
    }
}

export default Projects;