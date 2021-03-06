import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


import App from './components/app';
import ThankYou from './components/ThankYou';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
     <Router>
       <Switch>
         <Route path="/thankYou" component={ThankYou}/>
         <Route exact path="/" component={App}/>
       </Switch>
     </Router>
  </Provider>
  , document.querySelector('.container'));
