import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import storeSeats from './reducers'
import App from './components/App';

let store = createStore(storeSeats)

ReactDOM.render(
  <Provider store={store}>
    <App initialData={window.initialData} />
  </Provider>,
  document.getElementById('root')
)