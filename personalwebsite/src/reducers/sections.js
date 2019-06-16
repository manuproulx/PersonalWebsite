import * as types from '../actions/actionTypes';

const sections = (state = {
    aboutme: null,
    mywork: null,
    contact: null
}, action) => {
    switch (action.type) {
        case types.SET_REF_TO_SECTION: 
            return {
                ...state,
               [action.section]: action.ref
            };
        default: return state;
    }
};

export default sections;