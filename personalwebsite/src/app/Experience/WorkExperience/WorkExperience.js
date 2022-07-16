import React from 'react';
import { Header, Step, Segment, Grid, Image, Icon } from 'semantic-ui-react';
import './WorkExperience.scss';

class WorkExperience extends React.Component {
    state = {
        selectedExperience: null
    }
    selectExperience = index => {
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
            },
            {
                company: 'Heyday',
                location: 'Montréal, QC, Canada',
                year: 'Winter 2020',
                website: 'https://www.linkedin.com/company/heyday.ai/',
                techUsed: 'Javascript (ES6), Angular, SASS',
                mainTasks: 'Implement front-end components and widgets for the client dashboard of Heyday. Add third-party onboarding platforms in the app like Shopify, Shopify Ping, Panier Bleu and Tailbase. Implement integrations like Google My Business, Facebook Messenger, and a chat widget configuration.'
            },
            {
                company: 'Stingray',
                location: 'Montréal, QC, Canada',
                year: 'Summer 2021 (internship)\nSeptember 2021 - Current',
                website: 'https://www.stingray.com/',
                techUsed: 'Ruby on Rails, React, PostgreSQL, Coffeescript, Slim, SASS',
                mainTasks: 'As a developer in the Chatter Research team, I worked on building new features in the client dashboard, and refactoring/redesigning existing code.'
            }
        ]
        const { selectedExperience } = this.state;
        const selectedWork = experienceData[selectedExperience];
        return (
            <div className="WorkExperience">
                <Header as="h1"><Icon name="briefcase"/> Professional experience</Header>
                <Step.Group attached="top" widths={4}>
                    <Step link onClick={() => this.selectExperience(0)} active={selectedExperience === 0}>
                        <Image src={require('../../../assets/safran.png')} style={{ width: '75px', margin: '10px 20px' }} />
                        <Step.Content>
                            <Step.Title>Safran Landing Systems</Step.Title>
                            <Step.Description>Web developer [internship]</Step.Description>
                        </Step.Content>
                    </Step>
                    <Step link onClick={() => this.selectExperience(1)} active={selectedExperience === 1}>
                        <Image src={require('../../../assets/paragonfaction.png')} style={{ width: '90px', margin: '10px 20px' }} />
                        <Step.Content>
                            <Step.Title>Paragon Faction</Step.Title>
                            <Step.Description>Front-end developer [internship]</Step.Description>
                        </Step.Content>
                    </Step>
                    <Step link onClick={() => this.selectExperience(2)} active={selectedExperience === 2}>
                        <Image src={require('../../../assets/heyday.jpeg')} style={{ width: '50px', margin: '10px 20px' }} />
                        <Step.Content>
                            <Step.Title>Heyday</Step.Title>
                            <Step.Description>Front-end developer [internship]</Step.Description>
                        </Step.Content>
                    </Step>
                    <Step link onClick={() => this.selectExperience(3)} active={selectedExperience === 3}>
                        <Image src={require('../../../assets/logo-stingray.png')} style={{ width: '90px', margin: '10px 20px' }} />
                        <Step.Content>
                            <Step.Title>Stingray</Step.Title>
                            <Step.Description>Full-stack developer</Step.Description>
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