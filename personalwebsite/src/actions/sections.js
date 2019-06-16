import * as types from './actionTypes';

const setRefToSection = (ref, section) => dispatch => dispatch({
    type: types.SET_REF_TO_SECTION,
    section,
    ref
});

export { setRefToSection };