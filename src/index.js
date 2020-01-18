import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './Components/App';
import { storedData } from './Components/Form/FormSubmitReducer';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={createStore(storedData)}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
    ,
  </Provider>,
  rootElement
);
