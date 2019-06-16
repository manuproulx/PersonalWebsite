import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import GitHub from './GitHub/GitHub';
import ProjectsGrid from './ProjectsGrid/ProjectsGrid';
import { setRefToSection } from '../../actions/sections';
import './Projects.scss';

class Projects extends React.Component {

    constructor(props){
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        const { onSetRefToSection } = this.props;
        onSetRefToSection(this.ref.current.offsetTop);
    }

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

const mapDispatchToProps = dispatch => ({
    onSetRefToSection: ref => dispatch(setRefToSection(ref, 'mywork'))
});

export default connect(() => ({}), mapDispatchToProps)(Projects);