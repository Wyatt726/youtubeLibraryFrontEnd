import "./styles.css"
import React from "react";
import Search from "./component/VideoDisplay/Search";
import youtubeApi from './component/api_youtube/Youtube'
import VideoList from "./component/VideoDisplay/VideoList";
import Videoplayer from "./component/VideoDisplay/VideoPlayer";
import CreateComment from "./component/Comments/CreateComment";
import DisplayComments from "./component/Comments/DisplayComment"
import axios from "axios";

export default class App extends React.Component {
  state = {
    videoMetaInfo: [],
    selectedVideoId: null,
    comments: []
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

  componentDidMount(){
    this.getAllComments();
  }

  getAllComments = async() => {
    let response = await axios.get('http://127.0.0.1:8000/youtube/');
    this.setState({
      comments: response.data
    });
    console.log(response.data)
  }

  addNewComment = async (newComment) => {
    try{
      let response = await axios.post('http://127.0.0.1:8000/youtube/', newComment);
      console.log(response.data)
    }
    catch(err){
      console.log("Error in addNewComment")
    }
    this.getAllComments();
  }

  render() {
    return (
      <div className="App">
        <Search onSearch={this.onSearch} />
        <VideoList
          onVideoSelected={this.onVideoSelected}
          data={this.state.videoMetaInfo}
        />
        <Videoplayer videoId={this.state.selectedVideoId} />
        <CreateComment createNewComment ={this.addNewComment}/>
        <DisplayComments allComments={this.state.comments}/>
        </div>
        
    );
    }
}