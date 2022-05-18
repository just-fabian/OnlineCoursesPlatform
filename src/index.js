import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import "./styles/styles.scss"
import store from './redux/store'
import { Provider } from 'react-redux'
import {getALLSpecialties} from './redux/actionCreators'

store.dispatch(getALLSpecialties())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
      <App />
   </Provider>
);
