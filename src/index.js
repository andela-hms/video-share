import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YOUTUBE_API_KEY = 'AIzaSyB0_07uMsqs33LLbjBbQaJqoRJwR26Ugtw';

// update to class based component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };
    
    YTSearch({key: YOUTUBE_API_KEY, term: 'surfboards'}, (videos)=> {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      })
      // Non ES6 syntax = this.setState({ videos: videos })      
    });
  }

  render () {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
        onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
      </div>
    );
  }
}

// take the generated html and place it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
