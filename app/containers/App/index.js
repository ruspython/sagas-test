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

var locale = getCookie('lang') || 'en-US';
var messages = require('./../../intl/' + locale).default.messages;

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

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
