import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App color="Crimson" size="20" background="LightBlue"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// App works either as a plain function or as a component.
// As a simple component, there is no state.