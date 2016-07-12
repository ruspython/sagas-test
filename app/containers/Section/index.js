import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import _ from 'lodash';

import { createStructuredSelector } from 'reselect';

import {
  selectSection,
  selectCurrentSubsectionIndex,
} from 'containers/Section/selectors';


import { loadSection, openNextSubsection, openPrevSubsection } from './actions';

export class Section extends React.Component {
  componentDidMount() {
    this.props.onPageLoad();
  }

  saveAndNext() {
    this.props.goToNext();
  }

  saveAndPrev() {
    this.props.goToPrev();
  }

  render() {
    const {section, currentSubsectionIndex, params} = this.props;
    var currentSubsection = section && section.subsections[currentSubsectionIndex];

    return (
      <article>
        <Link to={`/q/${params.id}`}>Up</Link>
        {currentSubsection &&
        <table>
            <caption>{currentSubsection.name} section has {section.questionsLength} questions. The questions are spread
              over {section.subsections.length} subsections. There are 0 remarks and 0 questions are approved.
              {_.filter(currentSubsection.questions, {answer: ''}).length} question(s) are unanswered in this section.
            </caption>

          <tbody>
          {currentSubsection.questions.map(function (q, index) {
            return <tr key={index}>
              <td>
                <div>{q.sQuestion}</div>
                <textarea defaultValue={q.answer} rows="4"></textarea>
              </td>
            </tr>
          })}
          <tr>
            <td>
              <button onClick={this.saveAndPrev.bind(this)}>&larr; Prev</button>
              <button onClick={this.saveAndNext.bind(this)}>Next &rarr;</button>
            </td>
          </tr>
          </tbody>
        </table>
        }
      </article>
    );
  }
}

Section.propTypes = {
  changeRoute: React.PropTypes.func,
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  onPageLoad: React.PropTypes.func,
  goToNext: React.PropTypes.func,
  goToPrev: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    onPageLoad: () => {
      dispatch(loadSection());
    },
    goToPrev: () => {
      dispatch(openPrevSubsection());
    },
    goToNext: () => {
      dispatch(openNextSubsection());
    },
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  section: selectSection(),
  currentSubsectionIndex: selectCurrentSubsectionIndex()
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Section);
