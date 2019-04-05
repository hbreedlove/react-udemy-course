import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  //passing store as props
  //provider tag is a react component that knows how to read changes from our redux store and updates all children with new state
  <Provider store = {store}><App/></Provider>, 
  document.querySelector('#root')
);