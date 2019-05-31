import React from 'react';
import { Header, Step, Segment, Grid, Transition } from 'semantic-ui-react';
import './Education.scss';

class Education extends React.Component {
    state = {
        selectedDiploma: null
    }
    selectDiploma = index => {
        const { selectedDiploma } = this.state;
        this.setState({ selectedDiploma: index === selectedDiploma ? null : index })
    }
    render() {
        const educationData = [
            {
                school: 'Collège Lionel-Groulx',
                location: 'Sainte-Thérèse, QC, Canada',
                year: '2015-2017',
                website: 'http://www.clg.qc.ca/'
            },
            {
                school: 'École de technologie supérieure',
                location: 'Montréal, QC, Canada',
                year: '2017-2022',
                website: 'https://www.etsmtl.ca/en/Home'
            }
        ]
        const { selectedDiploma } = this.state;
        const selectedSchool = educationData[selectedDiploma];
        return (
            <div className="Education">
                <Header as="h1">Education</Header>
                <Step.Group attached="top" widths={3}>
                    <Step>
                        <Step.Content>
                            <Step.Description>High-school diploma</Step.Description>
                        </Step.Content>
                    </Step>
                    <Step link onClick={() => this.selectDiploma(0)} active={selectedDiploma === 0}>
                        <Step.Content>
                            <Step.Title>Computer Science and Mathematics</Step.Title>
                            <Step.Description>Pre-universitary degree</Step.Description>
                        </Step.Content>
                    </Step>
                    <Step link onClick={() => this.selectDiploma(1)} active={selectedDiploma === 1}>
                        <Step.Content>
                            <Step.Title>Software Engineering</Step.Title>
                            <Step.Description>Bachelor's degree</Step.Description>
                        </Step.Content>
                    </Step>
                </Step.Group>
                <Transition visible={selectedDiploma !== null} animation="slide down">
                    <Segment attached>
                        <Grid columns={2} divided>
                            <Grid.Column width={12}>
                                <Header as="h2">{selectedSchool && selectedSchool.school} <a href={selectedSchool && selectedSchool.website}>[website]</a></Header>
                                <Header as="h4">{selectedSchool && selectedSchool.location}</Header>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Header as="h3">{selectedSchool && selectedSchool.year}</Header>
                            </Grid.Column>
                        </Grid>

                    </Segment>
                </Transition>

            </div>
        )
    }
}

export default Education;