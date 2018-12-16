import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Main from './components/Main';

import GlobalStyle, { theme } from './components/styles/Global';

class App extends Component {
  render() {
    return (
      <Fragment>
        <ThemeProvider theme={theme}>
          <Fragment>
            <Navigation />
            <Switch>
              <Route path='/' component={Main} />
            </Switch>
          </Fragment>
        </ThemeProvider>
        <GlobalStyle />
      </Fragment>
    );
  }
}

export default withRouter(App);
