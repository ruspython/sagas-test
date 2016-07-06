import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { createStructuredSelector } from 'reselect';

import {
  selectSection,
} from 'containers/Section/selectors';


import { loadSection } from './actions';

export class Section extends React.Component {
  componentDidMount() {
    this.props.onPageLoad();
  }

  render() {
    return (
      <article>
        {this.props.section && this.props.section.subsections.map(function (subsection) {
          return <table>
            <caption>{subsection.name}</caption>
            {subsection.questions.map(function (q) {
              return <tr>
                <td>
                  <div>{q.sQuestion}</div>
                  <textarea name="" id="" rows="4"></textarea>
                </td>
              </tr>
            })}
          </table>
        })}
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
      dispatch(loadSection());
    },
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  section: selectSection(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Section);
