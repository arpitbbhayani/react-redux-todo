import React from 'react';
import ReactDOM from 'react-dom';

export default class HomeContainer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>Hello World from maincontainer!</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <HomeContainer />,
  document.getElementById('maincontainer')
);
