import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { createStructuredSelector } from 'reselect';

import {
  selectQuestionnaire,
  selectLoading,
  selectError,
} from 'containers/Questionnaire/selectors';


import { loadQuestionnaire } from './actions';

import Button from 'components/Button';
import H2 from 'components/H2';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';

//import styles from './styles.css';

export class Questionnaire extends React.Component {
  componentDidMount() {
    this.props.onPageLoad();
  }

  render() {
    const {questionnaire, params} = this.props;
    return (
      <article>
        <Link to="/">Up</Link>
        {questionnaire ?
          <table>
            <tbody>
            <tr>
              <td>Questionnaire list</td>
              <td></td>
            </tr>
            <tr>
              <td>
                This questionnaire has {questionnaire.questions.length} questions. <br/>
                The questions are spread over {questionnaire.sections.length} sections
                and {questionnaire.subsections.length} sub sections.
              </td>
              <td></td>
            </tr>
            { questionnaire.sections.map(function (section, index) {
              return (
                <tr key={index}>
                  <td><Link to={`/q/${params.id}/sections/${section.name}`}>{section.name}</Link></td>
                  <td></td>
                </tr>
              )
            }) }
            </tbody>
          </table>
          : null
        }
      </article>
    );
  }
}

Questionnaire.propTypes = {
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
      dispatch(loadQuestionnaire());
    },
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  questionnaire: selectQuestionnaire(),
  loading: selectLoading(),
  error: selectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
