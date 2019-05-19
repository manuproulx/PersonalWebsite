import React from 'react';
import { Image } from 'semantic-ui-react';
import Typewriter from 'typewriter-effect';
import './Home.scss';

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
        this.setState({filter: Math.min(window.pageYOffset * 100 / (window.innerHeight / 3), 100)});
    }
    render() {
        const { filter } = this.state;
        return (
            <div style={{ position: 'relative', boxShadow: '0px 6px 13px 0px rgba(0,0,0,0.49)' }}>     
            <div style={{ position: 'absolute', top: '250px', zIndex: '2', width: '100%', textAlign: 'center'}}>
                <Typewriter 
                    onInit={typewriter => {
                        typewriter
                        .pauseFor(2500).typeString('<I like to build great things')
                        .typeString('/>')
                        .start()
                    }}
                />
            </div>
            <Image src={require("../../assets/mtl.jpg")} style={{ filter: `grayscale(${filter}%)`, objectFit: 'cover',minHeight: '100vh', minWidth: '100vw' }}/>
            </div>
            
        );
    }
}

export default Home;