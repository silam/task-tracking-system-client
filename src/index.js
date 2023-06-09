import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore , combineReducers} from '@reduxjs/toolkit';


import authReducers from './Controllers/Redux/authSlice';
import taskReducers from './Controllers/Redux/taskSlice';
import userReducers from './Controllers/Redux/userSlice';

const reducer = combineReducers({
  auth: authReducers,
  task: taskReducers,
  user: userReducers
})

const store = configureStore({reducer});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
       <App />
  </Provider>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
