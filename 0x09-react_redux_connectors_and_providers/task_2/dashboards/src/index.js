import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; // Import redux-thunk
import uiReducer from './reducers/uiReducer';
import App from './App/App';

// Create the store with thunk middleware
const store = createStore(uiReducer, applyMiddleware(thunk));

// Wrap the App component with the Provider and pass the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);




