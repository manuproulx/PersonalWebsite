import * as types from '../actions/actionTypes';

const github = (state = {
    gitHubData: null
}, action) => {
    switch (action.type) {
        case types.FETCH_GITHUB_STATS: 
            return {
                ...state,
                gitHubData: action.gitHubData
            };
        default: return state;
    }
};

export default github;