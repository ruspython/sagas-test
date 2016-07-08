import expect from 'expect';
import appReducer from '../reducer';
import {
  loadSection,
  sectionLoaded,
} from '../actions';
import { fromJS } from 'immutable';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      section: null,
      loading: false,
      error: false,
      currentSubsectionIndex: 0
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadSection action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .set('section', null);
    expect(appReducer(state, loadSection())).toEqual(expectedResult);
  });

  it('should handle the sectionLoaded action correctly', () => {
    const fixture = {
      name: 'Test',
      subsections: []
    };
    const expectedResult = state
      .set('section', fixture)
      .set('loading', false);

    expect(appReducer(state, sectionLoaded(fixture))).toEqual(expectedResult);
  });
});
