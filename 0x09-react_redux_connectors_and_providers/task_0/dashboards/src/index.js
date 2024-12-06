import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App/App';
import uiReducer from './reducers/uiReducer'; // Adjust the import path based on your project structure

// Create the Redux store
const store = createStore(uiReducer);

// Wrap the App component with the Provider and pass the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
