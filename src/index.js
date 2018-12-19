import './index.css';
import 'semantic-ui-react'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const store = createStore(rootReducer,applyMiddleware(thunk));


ReactDOM.render(

  <BrowserRouter basename={baseUrl}>
    <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
  ,document.getElementById('root'));

registerServiceWorker();
