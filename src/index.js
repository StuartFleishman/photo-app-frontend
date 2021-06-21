import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import usersReducer from './reducers/usersReducer'
import categoriesReducer from './reducers/categoriesReducer';
import picturesReducer from './reducers/picturesReducer'
import authReducer from './reducers/authReducer'

const combineReducer = combineReducers({users: usersReducer, categories: categoriesReducer, pictures: picturesReducer, authReducer: authReducer})

const store = createStore(combineReducer, applyMiddleware(thunk))



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
