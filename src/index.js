import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'; // eslint-disable-line no-unused-vars
import searchReducer from './search/searchReducer';
import customerInfoReducer from './customerOverview/customerInfoReducer';
import contactHistoryReducer from './contactHistory/contactHistoryReducer';
import {Router, Route, hashHistory} from 'react-router'; // eslint-disable-line no-unused-vars
import SearchPage from './search/SearchPage';
import MainDashboard from './dashboard/MainDashboard';
import ContactHistory from './contactHistory/ContactHistory';
import ContactRecordPage from './contactEntry/ContactRecordPage';

import 'babel-polyfill';

let store = createStore(
  combineReducers({
    search: searchReducer,
    customer: customerInfoReducer,
    contactRecords: contactHistoryReducer
  }),
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={SearchPage} />
      <Route path="/:customerId" component={MainDashboard}/>
      <Route path="/:customerId/contact-history" component={ContactHistory}/>
      <Route path="/:customerId/contact-record/input" component={ContactRecordPage} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
