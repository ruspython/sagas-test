import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOAD_SECTION } from 'containers/Section/constants';
import { sectionLoaded } from 'containers/Section/actions';
import { takeEvery, delay } from 'redux-saga'
import request from 'utils/request';
import { selectUsername } from 'containers/HomePage/selectors';
import GetTestData from '../../../testreact-master/TestData';
import _ from 'lodash';


export function parseQuestionnaire(questions) {
  var questionnaires = [],
    sections = [],
    subsections = [];
  questions.forEach(function (item) {
    var
      section = {},
      subsection = {};
    if (!_.find(sections, {name: item.oSection.sMainSection})) {
      section.name = item.oSection.sMainSection;
      sections.push(section);
    }

    if (!_.find(subsections, {name: item.oSection.sSubSection})) {
      subsection.name = item.oSection.sSubSection;
      subsection.questions = [];
      subsection.questions.push(item);
      subsections.push(subsection);
    } else {
      subsection = _.find(subsections, {name: item.oSection.sSubSection});
      subsection.questions.push(item);
    }

  });
  questionnaires.push({sections, subsections, questions});
  return questionnaires;
}

export function* loadSection() {
  var data = parseQuestionnaire(GetTestData().oQuestionList);
  yield delay(1000);
  yield put(sectionLoaded(data[0]));
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
