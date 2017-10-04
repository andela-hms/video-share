import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';

const YOUTUBE_API_KEY = 'AIzaSyB0_07uMsqs33LLbjBbQaJqoRJwR26Ugtw';

// testing the API
YTSearch({key: YOUTUBE_API_KEY, term: 'musonye'}, (data)=>{
  console.log(data)
})
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
