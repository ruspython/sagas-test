import {
  LOAD_SECTION,
  LOAD_SECTION_SUCCESS,
  LOAD_SECTION_ERROR
} from './constants';

import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  section: null,
  loading: false,
  error: false
});

function sectionReducer(state = initialState, action) {
  switch (action.type) {
    //case LOAD_SECTION:
    //  return state
    //    .set('loading', true)
    //    .set('error', false)
    //    .setIn('section', null);
    //case LOAD_SECTION_SUCCESS:
    //  return state
    //    .setIn('section', action.section)
    //    .set('loading', false);
    //case LOAD_SECTION_ERROR:
    //  return state
    //    .set('error', action.error)
    //    .set('loading', false);
    default:
      return state;
  }
}

export default sectionReducer;
