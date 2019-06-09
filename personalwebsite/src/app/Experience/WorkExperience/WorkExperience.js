import React from 'react';
import { Header, Step, Segment, Grid, Image } from 'semantic-ui-react';
import './WorkExperience.scss';

class WorkExperience extends React.Component {
    state = {
        selectedExperience: null
    }
    selectDiploma = index => {
        const { selectedExperience } = this.state;
        this.setState({ selectedExperience: index === selectedExperience ? null : index })
    }
    render() {
        const experienceData = [
            {
                company: 'Safran Landing Systems',
                location: 'Mirabel, QC, Canada',
                year: 'Summer 2018',
                website: 'https://www.safran-landing-systems.com/',
                techUsed: 'Javascript, HTML5, CSS3, Bootstrap',
                mainTasks: 'Development of front-end applications for internal usage; analysis of user needs.'
            },
            {
                company: 'Paragon Faction',
                location: 'Montréal, QC, Canada',
                year: 'Winter 2019',
                website: 'https://linkedin.com/company/paragonfaction',
                techUsed: 'Javascript (ES6), React, Semantic UI, FabricJS, GraphQL, MongoDB',
                mainTasks: 'Work on new and existing features of Decksign, a business-oriented presentation software. Develop those features on the front-end (React) app, and back-end modules (FabricJS, GraphQL).'
            }
        ]
        const { selectedExperience } = this.state;
        const selectedWork = experienceData[selectedExperience];
        return (
            <div className="WorkExperience">
                <Header as="h1">Professional experience</Header>
                <Step.Group attached="top" widths={2}>
                    <Step link onClick={() => this.selectDiploma(0)} active={selectedExperience === 0}>
                        <Image src={require('../../../assets/safran.png')} style={{ width: '75px', margin: '0 20px' }} />
                        <Step.Content>
                            <Step.Title>Safran Landing Systems</Step.Title>
                            <Step.Description>Web developer [internship]</Step.Description>
                        </Step.Content>
                    </Step>
                    <Step link onClick={() => this.selectDiploma(1)} active={selectedExperience === 1}>
                        <Image src={require('../../../assets/paragonfaction.png')} style={{ width: '90px', margin: '0 20px' }} />
                        <Step.Content>
                            <Step.Title>Paragon Faction</Step.Title>
                            <Step.Description>Web developer [internship]</Step.Description>
                        </Step.Content>
                    </Step>
                </Step.Group>
                {selectedExperience !== null && <Segment attached>
                        <Grid columns={2} divided>
                            <Grid.Column computer={12} mobile={16}>
                                <Header style={{ marginBottom: '-15px' }} as="h2">{selectedWork && selectedWork.company} <a href={selectedWork && selectedWork.website}>[website]</a></Header>
                                <Header as="h4">{selectedWork && selectedWork.location}</Header>
                                <p><b>Technologies used: </b>{selectedWork && selectedWork.techUsed}</p>
                                <p><b>Main tasks: </b>{selectedWork && selectedWork.mainTasks}</p>
                            </Grid.Column>
                            <Grid.Column mobile={16} computer={4}>
                                <Header as="h3">{selectedWork && selectedWork.year}</Header>
                            </Grid.Column>
                        </Grid>

                    </Segment>}

            </div>
        )
    }
}

export default WorkExperience;