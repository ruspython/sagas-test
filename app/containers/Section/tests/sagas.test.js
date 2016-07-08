import expect from 'expect';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';

import { parseQuestionnaire, loadSection } from '../sagas';
import GetTestData from './../../../../testreact-master/TestData';

import { sectionLoaded } from 'containers/App/actions';

import request from 'utils/request';

describe('getRepos Saga', () => {
  let loadSectionGenerator;

  beforeEach(() => {
    loadSectionGenerator = loadSection();

    const delayDescriptor = loadSectionGenerator.next().value;
    expect(delayDescriptor).toEqual(delay(500));
  });

  //it('should dispatch the sectionLoaded action if it requests the data successfully', () => {
  //  var
  //    data = parseQuestionnaire(GetTestData().oQuestionList),
  //    section = {},
  //    sectionName = 'Private';
  //  section.subsections = _.filter(data[0].subsections, {'sectionName': sectionName});
  //  section.name = sectionName;
  //
  //  const putDescriptor = loadSectionGenerator.next().value;
  //  expect(putDescriptor).toEqual(put(sectionLoaded({})));
  //});
});
