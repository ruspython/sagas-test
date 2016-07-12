import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { FormattedMessage, intlShape, injectIntl, defineMessages } from 'react-intl';

import { createStructuredSelector } from 'reselect';

import {
  selectQuestionnaires,
  selectLoading,
  selectError,
} from 'containers/App/selectors';

import { loadQuestions, addQuestionnaire } from '../App/actions';

import styles from './styles.css';

export class HomePage extends React.Component {
  componentDidMount() {
    this.props.onPageLoad();
  }

  render() {
    let mainContent = null;

    if (this.props.questionnaires) {
      mainContent = (
        <div>
          <table>
            <tbody>
            <tr>
              <td>
                <FormattedMessage
                  id="app.customer"
                  defaultMessage=""
                />
              </td>
              <td>
                <FormattedMessage
                  id="app.sectionCount"
                  defaultMessage=""
                />
              </td>
              <td>
                <FormattedMessage
                  id="app.subSectionCount"
                  defaultMessage=""
                />
              </td>
              <td>
                <FormattedMessage
                  id="app.questionCount"
                  defaultMessage=""
                />
              </td>
              <td>
                <FormattedMessage
                  id="app.remarkCount"
                  defaultMessage=""
                />
              </td>
              <td>
                <FormattedMessage
                  id="app.todoCount"
                  defaultMessage=""
                />
              </td>
            </tr>
            {this.props.questionnaires.map(function (item, index) {
              return (
                <tr key={index}>
                  <td><Link to={`/q/${index}`}>Customer {index}</Link></td>
                  <td>{item.sections.length}</td>
                  <td>{item.subsections.length}</td>
                  <td>{item.questions.length}</td>
                  <td></td>
                  <td></td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
      );
    }

    return (
      <article>
        <div>
          <section className={styles.textSection}>
            {mainContent}
          </section>
          <button onClick={this.props.addQuestionnaire}>Add new</button>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  changeRoute: React.PropTypes.func,
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onPageLoad: React.PropTypes.func,
  addQuestionnaire: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    onPageLoad: () => {
      dispatch(loadQuestions());
    },
    addQuestionnaire: () => {
      dispatch(addQuestionnaire())
    },

    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  questionnaires: selectQuestionnaires(),
  loading: selectLoading(),
  error: selectError(),
});

HomePage.propTypes = {
  intl: intlShape.isRequired,
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(HomePage));
