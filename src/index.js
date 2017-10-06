import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const YOUTUBE_API_KEY = 'AIzaSyB0_07uMsqs33LLbjBbQaJqoRJwR26Ugtw';

// update to class based component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
    
    YTSearch({key: YOUTUBE_API_KEY, term: 'musonye'}, (videos)=> {
      this.setState({ videos })
      // Non ES6 syntax = this.setState({ videos: videos })      
    });
  }

  render () {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// take the generated html and place it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
