import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const YOUTUBE_API_KEY = 'AIzaSyB0_07uMsqs33LLbjBbQaJqoRJwR26Ugtw';

// create a new component
const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
  );
}
// take the generated html and place it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
