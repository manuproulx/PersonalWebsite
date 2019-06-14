import React from 'react';
import { Image } from 'semantic-ui-react';
import Typewriter from 'typewriter-effect';
import './Home.scss';
import PersonalIntro from './PersonalIntro/PersonalIntro';

class Home extends React.Component {
    state = {
        filter: 0,
        profileFilter: 100,
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = e => {
        this.setState({filter: Math.min(window.pageYOffset * 100 / (window.innerHeight / 3), 100),
            profileFilter: Math.max(0, (window.pageYOffset) * 100 / (window.innerHeight))});
    }
    render() {
        const { filter, profileFilter } = this.state;
        return (
            <React.Fragment>
            <div style={{ position: 'relative', boxShadow: '0px 6px 13px 0px rgba(0,0,0,0.49)' }}>     
                <div className="TypewriterContainer">
                    <Typewriter 
                        onInit={typewriter => {
                            typewriter
                            .pauseFor(1500)
                            .typeString('<')
                            .typeString('I like to build')
                            .pauseFor(300)
                            .typeString(' ')
                            .pauseFor(500)
                            .typeString('great things')
                            .pauseFor(200)
                            .typeString('/>')
                            .start()
                        }}
                    />
                </div>
                <Image src={require("../../assets/mtl.jpg")} style={{ filter: `grayscale(${filter}%)`, objectFit: 'cover',minHeight: '100vh', minWidth: '100vw' }}/>
            </div>
            <PersonalIntro filter={profileFilter}/>
            </React.Fragment>

            
        );
    }
}

export default Home;