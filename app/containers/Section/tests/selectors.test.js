import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectSection,
  selectCurrentSubsectionIndex,
} from '../selectors';

describe('selectUsername', () => {
  const indexSelector = selectCurrentSubsectionIndex();
  it('should select the current subsection index', () => {
    var index = 0;
    const mockedState = fromJS({
      section: {
        currentSubsectionIndex: 0,
      },
    });
    expect(indexSelector(mockedState)).toEqual(index);
  });
});
