import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';
import config from './config';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import storeSeats from './src/reducers';

let store = createStore(storeSeats);

const serverRender = () => {
  return (
  axios.get(`${config.serverUrl}/api/constituency`)
  .then(resp => {
    const initialData = resp.data.data || [];
    return {
      initialMarkup: ReactDOMServer.renderToString(
        <Provider store={store}>
        <App initialData={initialData} />
        </Provider>,
      ),
      initialData
    };
  })
  .catch(err => {
    //console.log(err);
    return err;
  })
  );
}


export default serverRender;
