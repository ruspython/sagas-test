import expect from 'expect';

import {
  LOAD_SECTION,
  LOAD_SECTION_SUCCESS,
  LOAD_SECTION_ERROR,
} from '../constants';

import {
  loadSection,
  sectionLoaded,
} from '../actions';

describe('Section Actions', () => {
  describe('loadRepos', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_SECTION,
      };

      expect(loadSection()).toEqual(expectedResult);
    });
  });

  describe('reposLoaded', () => {
    it('should return the correct type and the passed repos', () => {
      const fixture = {test: 'test'};
      const expectedResult = {
        type: LOAD_SECTION_SUCCESS,
        section: fixture,
      };

      expect(sectionLoaded(fixture)).toEqual(expectedResult);
    });
  });

});
