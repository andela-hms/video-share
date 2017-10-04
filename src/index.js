import React from 'react';
import ReactDOM from 'react-dom';

// create a new component
const App = () => {
  return <div>Hi!</div>;
}
// take the generated html and place it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
