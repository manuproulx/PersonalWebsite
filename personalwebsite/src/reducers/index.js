import { combineReducers } from 'redux';
import github from './github';
import sections from './sections';

const buildApp = combineReducers({
    github,
    sections
});

export default buildApp;