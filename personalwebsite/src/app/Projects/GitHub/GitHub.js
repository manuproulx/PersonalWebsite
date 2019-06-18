import React from 'react';
import { Header, Placeholder, Segment, Statistic, Icon, Card, Button } from 'semantic-ui-react';
import CountUp from 'react-countup';
import { connect } from 'react-redux';
import { fetchGitHubAPI } from '../../../actions/github';
import './GitHub.scss';

const colorPalette = {
    Kotlin: '#00AA55',
    Swift: '#E65722',
    JavaScript: '#BF6EE0',
    HTML: '#9D8319',
    CSS: '#3498DB',
    Ruby: '#FF00FF',
    Dart: '#005031',
    'Objective-C': '#1C2833' 
}

const easingFn = function(t, b, c, d) {
	var ts=(t/=d)*t;
	var tc=ts*t;
	return b+c*(tc*ts + -5*ts*ts + 10*tc + -10*ts + 5*t);
}

class GitHub extends React.Component {

    state = {
        githubData: null,
        animationStarted: false
    }

    startAnimationMethods = [];

    componentDidMount() {
        const { onFetchGitHub } = this.props;
        onFetchGitHub();
    }
    
    constructor(props) {
        super(props);
        this.animationRef = React.createRef();
    }

    checkForAnimationStart = () => {
        if (this.animationRef.current && this.animationRef.current.getBoundingClientRect().y < (window.outerHeight - 200) && !this.state.animationStarted) {
            this.startAnimationMethods.map(startMethod => startMethod())
            this.setState({ animationStarted: true })
        }
    }

    render() {
        window.addEventListener('scroll', this.checkForAnimationStart.bind(this), true)
        this.startAnimationMethods = []
        const { githubData } = this.props;
        return (
            <div className="GitHub">
                <Header as="h1"><Icon name="github" />GitHub</Header>
                    {githubData ? (
                        <div ref={this.animationRef}>
                            <Segment.Inline style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
                                <Statistic.Group>
                                    
                                    <Statistic>
                                        <Statistic.Value text>
                                            <CountUp duration={4} easingFn={easingFn} delay={0.5} start={0} end={githubData.commitsCount}>
                                            {({ countUpRef, start }) => {
                                               this.startAnimationMethods.push(start);
                                                return (
                                                <div>
                                                    <span ref={countUpRef} />
                                                    </div>    
                                                )
                                            } }
                                            </CountUp>
                                        </Statistic.Value>
                                        <Statistic.Label>Commits</Statistic.Label>
                                    </Statistic>
                                    <Statistic>
                                        <Statistic.Value text>
                                            <CountUp duration={4} easingFn={easingFn} delay={0.5} start={0} end={githubData.repositoriesCount}>
                                            {({ countUpRef, start }) => {
                                               this.startAnimationMethods.push(start);
                                                return (
                                                <div>
                                                    <span ref={countUpRef} />
                                                    </div>    
                                                )
                                            } }
                                            </CountUp>
                                            
                                        </Statistic.Value>
                                        <Statistic.Label>Repositories</Statistic.Label>
                                    </Statistic>
                                    <Statistic>
                                        <Statistic.Value text>
                                            <CountUp duration={4} easingFn={easingFn} delay={0.5} start={0} end={githubData.issuesCount}>
                                            {({ countUpRef, start }) => {
                                               this.startAnimationMethods.push(start);
                                                return (
                                                <div>
                                                    <span ref={countUpRef} />
                                                    </div>    
                                                )
                                            } }
                                            </CountUp>
                                            
                                        </Statistic.Value>
                                        <Statistic.Label>Issues</Statistic.Label>
                                    </Statistic>
                                    <Statistic>
                                        <Statistic.Value text>
                                            <CountUp duration={4} easingFn={easingFn} delay={0.5} start={0} end={githubData.starCount}>
                                                {({ countUpRef, start }) => {
                                                this.startAnimationMethods.push(start);
                                                    return (
                                                        <div>
                                                            <span ref={countUpRef} />
                                                        </div>    
                                                    )
                                                } }
                                            </CountUp>
                                            <Icon style={{ marginLeft: '5px' }} name="star outline" size="small" color="yellow" />
                                        </Statistic.Value>
                                        <Statistic.Label>Starred repositories</Statistic.Label>
                                    </Statistic> 
                                </Statistic.Group>
                                                
                            </Segment.Inline>
                            <Header as="h4">Pinned repositories</Header>
                            <Segment.Inline>
                                <Card.Group style={{ justifyContent: 'center', marginBottom: '30px' }}>
                                {githubData.pinnedItems.map(item => (
                                    <Card key={item.name} link href={item.url}>
                                        <Card.Content>
                                            <Card.Header><p style={{ color: 'gray' }}>{item.owner.login}/</p>{item.name}</Card.Header>
                                            <Card.Description>
                                                {item.description && (
                                                <p>"{item.description}"</p> 
                                                )} 
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content>
                                            <span style={{ display: 'flex', justifyContent: 'center' }}>{item.languages.nodes.map((language, index) => (
                                                <p key={language.name + item.name} style={{ color: colorPalette[language.name], marginLeft: '5px' }}>
                                                    {language.name}
                                                    {index < item.languages.nodes.length - 1 &&(' /')}
                                                </p>
                                            ))}</span>
                                            
                                        </Card.Content>
                                    </Card>
                                ))}
                                </Card.Group>
                                
                            </Segment.Inline>
                            <Segment.Inline>
                                <Button basic href={githubData.url}>
                                    <Icon name="github" />
                                    See my profile on GitHub
                                </Button>
                            </Segment.Inline>                      
                        </div>
                    ): (
                        <Segment loading>
                            <Placeholder>
                                <Placeholder.Header>
                                    <Placeholder.Line length="full"/>
                                    <Placeholder.Line />
                                    <Placeholder.Line length="long"/>
                                </Placeholder.Header>
                            </Placeholder>
                        </Segment>
                    )
                    }
            </div>
        )
    }
};

const mapStateToProps = state => ({
    githubData: state.github.gitHubData
});

const mapDispatchToProps = dispatch => ({
    onFetchGitHub: () => dispatch(fetchGitHubAPI())
});

export default connect(mapStateToProps, mapDispatchToProps)(GitHub);