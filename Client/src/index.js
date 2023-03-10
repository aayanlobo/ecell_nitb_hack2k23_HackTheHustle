import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignUp from './components/SignUp';
import LogIn from './components/LoginIn';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Switch>
          <Route exact  path="/" component={App} />
          <Route exact  path="/sigin" component={SignUp} />
          <Route  exact  path="/login" component={LogIn} />
        </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
