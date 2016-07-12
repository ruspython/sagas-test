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
  constructor(props) {
    super(props);

    this.state = {
      lang: 'en'
    }
  }
  componentDidMount() {
    var lang = this.getCookie('lang');
    this.setState({lang});
    this.props.onPageLoad();
  }


  setLang(e) {
    var lang = e.target.value;
    this.setCookie('lang', lang, 360*24*60*60);
    this.setState({lang});
    location.reload();
  }


  setCookie(name, value, days) {
    var expires;
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toGMTString();
    }
    else expires = "";
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
  }


  getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }


  deleteCookie(name) {
    this.set(name, "", -1);
  }

  render() {
    let mainContent = null;
    const {lang} = this.state;

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
        <select value={lang} onChange={this.setLang.bind(this)}>
          <option value="en-US">En</option>
          <option value="de">De</option>
        </select>
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
