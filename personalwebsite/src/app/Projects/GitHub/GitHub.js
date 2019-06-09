import React from 'react';
import { Header, Placeholder, Segment, Statistic, Icon, Card, Button } from 'semantic-ui-react';
import ApolloClient, { gql } from 'apollo-boost';
import CountUp from 'react-countup';
import './GitHub.scss';

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    headers: {
        authorization: `Bearer ${process.env.REACT_APP_GITHUB}`
    }
})

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

const GET_USER = gql`
{ 
    user(login:"kovy42") {
        url,
        contributionsCollection {
          totalIssueContributions,
          totalCommitContributions,
          totalRepositoryContributions
        },
        pinnedItems(last:4) {
          nodes {
            ... on Repository {
              name,
              languages(first:3) {
                nodes {
                  name
                }
              },
              url,
              description,
              owner{
                  login
              }
            }
          }
        },
        starredRepositories(first:100) {
          totalCount
        }
      }
  }
`;

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
       client.query({
           query: GET_USER
       }).then(result => this.setState({ githubData: {
           commitsCount: result.data.user.contributionsCollection.totalCommitContributions,
           issuesCount: result.data.user.contributionsCollection.totalIssueContributions,
           repositoriesCount: result.data.user.contributionsCollection.totalRepositoryContributions,
            pinnedItems: result.data.user.pinnedItems.nodes,
            starCount: result.data.user.starredRepositories.totalCount,
            url: result.data.user.url
       } }));
    }
    
    constructor(props) {
        super(props);
        this.animationRef = React.createRef();
    }

    checkForAnimationStart = () => {
        if (this.animationRef.current && this.animationRef.current.getBoundingClientRect().y < window.outerHeight && !this.state.animationStarted) {
            this.startAnimationMethods.map(startMethod => startMethod())
            this.setState({ animationStarted: true })
        }
    }

    render() {
        document.onscroll = () => this.checkForAnimationStart();
        this.startAnimationMethods = []
        const { githubData } = this.state;
        return (
            <div className="GitHub">
                <Header as="h1">GitHub <Icon name="github" /></Header>
                    {githubData ? (
                        <div ref={this.animationRef}>
                            <Segment.Inline style={{ display: 'flex', justifyContent: 'center' }}>
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
                                            {item.languages.nodes.map(language => (
                                                <p key={language.name + item.name} style={{ color: colorPalette[language.name] }}>{language.name}</p>
                                            ))}
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
}

export default GitHub;