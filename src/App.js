import './App.css';
import React,{Component} from 'react';
import axios from 'axios';
import SearchBar from './component/SearchBar/SearchBar';

class App extends Component {
    state = { 
      videosInfo: [],
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

  AddNewComment = async (newComment) => {
    try{
      let response = await axios.post('', newComment)
      console.log(response.data)
    }
    catch(err){
      console.log(err)
    }
    this.getAllComments();
  }

  DeleteComment = async (comment) => {
    try{
      let response = await axios.delete('' +comment);
      console.log('This is working')
    }
    catch(err){
      console.log("error in Delete Comment")
    }
    this.getAllComments();
  }

  render() { 
    return ( 
    <div>
      <SearchBar filterVideos = {this.filterVideos}></SearchBar>
    </div> );
  }
}
 




export default App;
