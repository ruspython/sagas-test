import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { createStructuredSelector } from 'reselect';

import {
  selectQuestionnaires,
  selectLoading,
  selectError,
} from 'containers/App/selectors';

import {
  selectUsername,
} from './selectors';

import { changeUsername } from './actions';
import { loadQuestions, addQuestionnaire } from '../App/actions';

import Button from 'components/Button';
import H2 from 'components/H2';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';

import styles from './styles.css';

export class HomePage extends React.Component {
  componentDidMount() {
    this.props.onPageLoad();
  }

  render() {
    let mainContent = null;

    // Show a loading indicator when we're loading
    if (this.props.loading) {
      mainContent = (<List component={LoadingIndicator}/>);

    }

    if (this.props.questionnaires) {
      mainContent = (
        <div>
          <table>
            <thead>
            <th>Customer</th>
            <th>Section count</th>
            <th>Sub-section count</th>
            <th>Question count</th>
            <th>Remark count</th>
            <th>ToDo count</th>
            </thead>
            {this.props.questionnaires.map(function (item, index) {
              return (
                <tr>
                  <td><Link to={`/q/${index}`}>Customer {index}</Link></td>
                  <td>{item.sections.length}</td>
                  <td>{item.subsections.length}</td>
                  <td>{item.questions.length}</td>
                  <td></td>
                  <td></td>
                </tr>
              )
            })}
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

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
