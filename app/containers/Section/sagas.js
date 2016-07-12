import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOAD_SECTION } from 'containers/Section/constants';
import { sectionLoaded } from 'containers/Section/actions';
import { takeEvery, delay } from 'redux-saga'
import request from 'utils/request';
import { selectUsername } from 'containers/HomePage/selectors';
import GetTestData from './../../../testreact-master/TestData';
import _ from 'lodash';
import {
  selectSectionName,
} from 'containers/Section/selectors';

//TODO: move to utils
export function parseQuestionnaire(questions) {
  var questionnaires = [],
    sections = [],
    subsections = [];
  questions.forEach(function (item) {
    var
      section = {questionsLength: 0, answeredLength: 0},
      subsection = {};

    item.answer = ['answer', 'not an answer', ''][parseInt(Math.random() * 3)];
    if (!_.find(sections, {name: item.oSection.sMainSection})) {
      section.name = item.oSection.sMainSection;
      sections.push({...section});
      section.questionsLength += 1;
    }

    if (!_.find(subsections, {name: item.oSection.sSubSection})) {
      subsection.name = item.oSection.sSubSection;
      subsection.sectionName = item.oSection.sMainSection;
      subsection.questions = [];
      subsection.questions.push({...item});
      subsections.push(subsection);
    } else {
      subsection = _.find(subsections, {name: item.oSection.sSubSection});
      subsection.questions.push({...item});
    }

  });
  questionnaires.push({sections, subsections, questions});

  return questionnaires;
}

export function* loadSection() {
  var
    data = parseQuestionnaire(GetTestData().oQuestionList),
    section = {};

  var sectionName = window.location.pathname.split('/').slice(-1)[0];
  yield delay(500);
  section.subsections = _.filter(data[0].subsections, {'sectionName': sectionName});
  section.name = sectionName;
  yield put(sectionLoaded(section));
}

export function* loadSectionWatcher() {
  while (yield take(LOAD_SECTION)) {
    yield call(loadSection);
  }
}

// Bootstrap sagas
export default [
  loadSectionWatcher
];
