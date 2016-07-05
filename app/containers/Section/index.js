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
debugger;
    return (
      <article>
        I'm a section {this.props.section && this.props.section.name}
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
