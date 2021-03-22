import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import { composeWithDevTools} from 'redux-devtools-extension';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';
import reducer from './reducers';
import EventsIndex from './components/event_index';
import EventsNew from './components/event_new';
import EventsShow from './components/event_show';
// import reportWebVitals from './reportWebVitals';

const enhancer = process.env.NODE_ENV === 'development' ? 
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk);

const store = createStore(reducer, enhancer);

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/events/:id" component={EventsShow} ></Route>
          <Route path="/event/new" component={EventsNew} ></Route>
          <Route path="/" component={EventsIndex} ></Route>
          <Route path="/events" component={EventsIndex} ></Route>
        </Switch>
      </BrowserRouter>
      {/* <EventsIndex /> */}
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
