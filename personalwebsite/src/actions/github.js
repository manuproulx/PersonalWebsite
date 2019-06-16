import * as types from './actionTypes';
import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    headers: {
        authorization: `Bearer ${process.env.REACT_APP_GITHUB}`
    }
})


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

const fetchGitHubAPI = () => dispatch => client.query({
        query: GET_USER
    }).then(result => dispatch({ type: types.FETCH_GITHUB_STATS, gitHubData: {
        commitsCount: result.data.user.contributionsCollection.totalCommitContributions,
        issuesCount: result.data.user.contributionsCollection.totalIssueContributions,
        repositoriesCount: result.data.user.contributionsCollection.totalRepositoryContributions,
         pinnedItems: result.data.user.pinnedItems.nodes,
         starCount: result.data.user.starredRepositories.totalCount,
         url: result.data.user.url
    } }));

export {
    fetchGitHubAPI
};