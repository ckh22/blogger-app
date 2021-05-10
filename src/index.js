import React from 'react';
import ReactDOM from 'react-dom';
import App from './Layout/App';

function render() {
  ReactDOM.render (<div>Build In Progress!</div>, document.getElementById('root'));
}

if (module.hot) {
  module.hot.accept("./Layout/App", function () {
    setTimeout(render);
  });
}

render()