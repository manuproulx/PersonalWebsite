import React from 'react';
import Typewriter from 'typewriter-effect';
import './Home.scss';
import PersonalIntro from './PersonalIntro/PersonalIntro';

class Home extends React.Component {
    state = {
        filter: 0
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = e => {
        this.setState({
            filter: Math.min(window.pageYOffset * 100 / (window.innerHeight), 100)
        });
    }
    render() {
        const { filter } = this.state;
        return (
            <div>
                <div style={{ position: 'relative', zIndex: '2' , boxShadow: '0px 6px 13px 0px rgba(0,0,0,0.49)' }}>
 
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
                    <div className="Background" style={{ filter: `grayscale(${filter}%)` }} />
                </div>
                <PersonalIntro />
            </div>


        );
    }
}

export default Home;