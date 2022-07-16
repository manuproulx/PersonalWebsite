import React from 'react';
import { Container, Image, Header } from 'semantic-ui-react';
import './PersonalIntro.scss';

class PersonalIntro extends React.Component {
    render() {
        return (
            <Container className="PersonalIntro">
                <div className="PersonalIntro__Card">
                    <div>
                        <Image className="PersonalIntro__Card__Image" src={require('../../../assets/me.jpg')} />
                    </div>
                    <div className="PersonalIntro__Card__Text">
                        <Header as="h1">Nice to meet you.</Header>
                        <p>I'm a 24 year-old software engineering graduate from Montréal, Canada. As a product-oriented full-stack developer, I have been able to work in many fast-paced start-up environments while acquiring experience in web technologies such as Ruby on Rails, React, Angular and more. You'll find on this website some of the work I had the chance to do in the past years, with a bit more insight on my professional experience. Feel free to reach out!</p>
                    </div>

                </div>
            </Container>
        )
    }
};

export default PersonalIntro;