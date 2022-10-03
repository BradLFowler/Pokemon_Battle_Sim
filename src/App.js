import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Router from './Router';
import Header from './containers/Header';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <Header />
        <Router />
      </BrowserRouter>
    </Provider>
  )
}

export default App;