import React from 'react';
import { Container, Image, Header } from 'semantic-ui-react';
import './PersonalIntro.scss';

const PersonalIntro = ({ filter }) => (
    <Container className="PersonalIntro">
        <div className="PersonalIntro__Card">
            <div>
                <Image style={{ filter: `grayscale(${(100 - filter)}%)` }} className="PersonalIntro__Card__Image" src={require('../../../assets/me.jpg')}/>
            </div>
            <div className="PersonalIntro__Card__Text">
                <Header as="h1">Nice to meet you.</Header>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, inventore earum facere dolorum eos, adipisci mollitia quibusdam nemo aliquam iusto dicta obcaecati! Modi neque blanditiis quis nobis nihil excepturi consectetur?</p>
                <Image style={{ height: '80px' }} src={require('../../../assets/ep-signature.png')} />
            </div>

        </div>
    </Container>
);

export default PersonalIntro;