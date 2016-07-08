/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';
// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';


import styles from './styles.css';

addLocaleData([...en, ...de]);

var locale = navigator.language || 'de';
var messages = require('./../../intl/' + locale).default.messages;

function App(props) {
  return (
    <IntlProvider locale={locale}
                  messages={messages}>
      <div className={styles.wrapper}>
        {props.children}
      </div>
    </IntlProvider>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
