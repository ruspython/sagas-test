import {
  OPEN_NEXT_SUBSECTION,
  OPEN_PREV_SUBSECTION,
  LOAD_SECTION,
  LOAD_SECTION_SUCCESS,
  LOAD_SECTION_ERROR
} from './constants';

import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  section: null,
  loading: false,
  error: false,
  currentSubsectionIndex: 0
});

function sectionReducer(state = initialState, action) {
  var currentSubsectionIndex, subsecLength;

  switch (action.type) {
    case LOAD_SECTION:
      return state
        .set('loading', true)
        .set('error', false)
        .set('section', null);
    case LOAD_SECTION_SUCCESS:
      return state
        .set('section', action.section)
        .set('loading', false);
    case LOAD_SECTION_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case OPEN_NEXT_SUBSECTION:
      subsecLength = state.get('section').subsections.length;
      currentSubsectionIndex = state.get('currentSubsectionIndex');

      if (currentSubsectionIndex + 1 > subsecLength - 1) {
        currentSubsectionIndex = subsecLength - 1;
      } else {
        currentSubsectionIndex++;
      }
      return state
        .set('currentSubsectionIndex', currentSubsectionIndex);
    case OPEN_PREV_SUBSECTION:
      subsecLength = state.get('section').subsections.length;
      currentSubsectionIndex = state.get('currentSubsectionIndex');

      if (currentSubsectionIndex - 1 < 0) {
        currentSubsectionIndex = 0;
      } else {
        currentSubsectionIndex--;
      }
      return state
        .set('currentSubsectionIndex', currentSubsectionIndex);
    default:
      return state;
  }
}

export default sectionReducer;
