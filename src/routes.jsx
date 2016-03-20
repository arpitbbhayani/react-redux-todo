import React from 'react';
import { Route } from 'react-router';

import TodoSnippetComponent from './components/todo-snippet/todo-snippet.jsx';

export default(
  <Route path="/" component={ TodoSnippetComponent } />
);
