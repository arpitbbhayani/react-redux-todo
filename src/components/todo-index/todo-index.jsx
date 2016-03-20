import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { finalReducer } from '../../store/todoStore.js';
import routes from '../../routes.jsx';


export default class IndexView extends React.Component {
  constructor() {
    super();
    this.todoStore = createStore(finalReducer, window.__INITIAL_STATE__);
    this.state = this.todoStore.getState();
  }
  componentWillMount() {
  }

  render() {
    // const history = createBrowserHistory();
    // syncReduxAndRouter(history, this.todoStore);
    const history = syncHistoryWithStore(browserHistory, this.todoStore);
    return (
      <div>
        <Provider store={ this.todoStore }>
          <Router history={ history } onUpdate={() => window.scrollTo(0, 0)}>
            { routes }
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(
  <IndexView />,
  document.getElementById('root')
);
