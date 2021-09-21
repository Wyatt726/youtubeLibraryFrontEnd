import React, {Component} from "react";


class CreateComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video_id: props.selectedVideoId,
            comment: '',
            likes: 0,
            dislikes: 0,
            replies: null,
         }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.createNewComment(this.state)
    }
   

    render() { 
        return ( 
            // Shouldn't need Input's for videoId and Replies, but keeping them in atm since we can't submit comment otherwise. Looking into.
            <form className='comment-section' onSubmit={this.handleSubmit}>
                <label>Video Id</label>
                <input name="video_id" onChange={this.handleChange} value={this.state.video_id} />
                <label>Comment Section</label>
                <input type='text' name="comment" onChange={this.handleChange} value={this.state.comment} />
                <label>Replies</label>
                <input type='text' name="replies" onChange={this.handleChange} value={this.state.replies} />
                <button type="submit">Comment</button>
            </form>
         );
    }
}
 
export default CreateComment;