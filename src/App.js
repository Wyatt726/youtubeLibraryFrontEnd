import "./styles.css"
import React from "react";
import Search from "./component/VideoDisplay/Search";
import youtubeApi from './component/api_youtube/Youtube'
import VideoList from "./component/VideoDisplay/VideoList";
import Videoplayer from "./component/VideoDisplay/VideoPlayer";
import CreateComment from "./component/CreateComment/CreateComment";
import DisplayComments from "./component/DisplayComments/DisplayComments";

export default class App extends React.Component {
  state = {
    videoMetaInfo: [],
    selectedVideoId: null
  };

  onVideoSelected = (videoId) => {
    this.setState({
      selectedVideoId: videoId
    });
  };

  onSearch = async (keyword) => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword
      }
    });
    // console.log(response);
    this.setState({
      videoMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <Search onSearch={this.onSearch} />
        <VideoList
          onVideoSelected={this.onVideoSelected}
          data={this.state.videoMetaInfo}
        />
        <Videoplayer videoId={this.state.selectedVideoId} />
        <CreateComment/>
        <DisplayComments />
        </div>
        
    );
    }
}