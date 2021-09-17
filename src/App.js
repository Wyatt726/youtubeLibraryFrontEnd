import './App.css';
import React,{Component} from 'react';
import axios from 'axios';
import SearchBar from './component/SearchBar/SearchBar';
import DisplayVideo from './component/VideoDisplay/VideoDisplay';

class App extends Component {
    state = { 
      videosInfo: [],
      selectedVideo: null
     }

  componentDidMount(){
    this.getAllComments();
  }

  getAllComments = async () => {
    let response = await axios.get('');
    this.setState({
      comments: response.data
    })
    console.log(response.data);
  }

  getSingleVideo = async () => {
    let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=car&key=AIzaSyClUkhCkXxYf5EoTPLEjZwldyMI_r0xnyI');
    this.setState({
      video: response.data
    })
    console.log(response.data);
  }

  // AddNewComment = async (newComment) => {
  //   try{
  //     let response = await axios.post('', newComment)
  //     console.log(response.data)
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  //   this.getAllComments();
  // }

  // DeleteComment = async (comment) => {
  //   try{
  //     let response = await axios.delete('' +comment);
  //     console.log('This is working')
  //   }
  //   catch(err){
  //     console.log("error in Delete Comment")
  //   }
  //   this.getAllComments();
  // }

  filterVideos = async (video) => {
    let result = await axios.get("/search", {
      params: {
        q: video
      }
    })
  }

  render() { 
    return ( 
    <div>
      <SearchBar filterVideos = {this.filterVideos}></SearchBar>
      <DisplayVideo getSingleVideo={this.state.video}/>
    </div> );
  }
}
 




export default App;
