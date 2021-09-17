import './App.css';
import React,{Component} from 'react';
import axios from 'axios';
import SearchBar from './component/SearchBar/SearchBar';
import DisplayVideo from './component/VideoDisplay/VideoDisplay';
import DisplayComments from './component/DisplayComments/DisplayComments';
import CreateComment from './component/CreateComment/CreateComment';

class App extends Component {
    state = { 
      videosInfo: [],
      selectedVideo: null
     }

  componentDidMount(){
    this.getSingleVideo();
  }

  

  // getAllComments = async () => {
  //   let response = await axios.get('');
  //   this.setState({
  //     comments: response.data
  //   })
  //   console.log(response.data);
  // }

  getSingleVideo = async () => {
    let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=string&key=AIzaSyDwesMV6eY9pgHWVav1WEqJL_C4vwvNzb4');
    this.setState({
      video: response.data
    })
    console.log(response.data);
  }


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
      <DisplayVideo getSingleVideo={this.getSingleVideo}/>
      <CreateComment />
      <DisplayComments />
    </div> );
  }
}
 




export default App;

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