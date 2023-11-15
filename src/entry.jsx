/*
  http://bit.ly/2DTXGpe - `@babel/polyfill` has been deprecated.
  If you need to polyfill certain JS features, uncomment the two imports below.
*/
// import 'core-js/stable'
// import 'regenerator-runtime/runtime' // Needed to polyfill async / await.
// Import our top-level sass file.
import './styles/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import NotFound from 'components/NotFound';
import Menu from './pages/Menu';
import Admin from './pages/Admin';
// import Admin from './pages/Admin';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Mount our app.
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/menu"component={Menu}/>
      <Route path="/admin" component={Admin}/>
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.querySelector('#app'),
);
