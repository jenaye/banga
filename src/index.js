import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import { Layout } from './components/Layout';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Layout>
          {
            routes.map((item, key) => (
              <Route exact strict {...item}/>
            ))
          }
        </Layout>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
