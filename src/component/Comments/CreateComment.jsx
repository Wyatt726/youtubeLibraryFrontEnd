import React, {Component} from "react";


class CreateComment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            video_id: '',
            comment: '',
            likes: '',
            dislikes: '',
            replies: '',
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
            <form className='comment-section' onSubmit={this.handleSubmit}>
                <label>Video Id</label>
                <input type='number' name="video_id" onChange={this.handleChange} value={this.state.video_id} />
                <label>Comment Section</label>
                <input type='text' name="comment" onChange={this.handleChange} value={this.state.comment} />
                <label>likes</label>
                <input type='number' name="likes" onChange={this.handleChange} value={this.state.likes} />
                <label>dislikes</label>
                <input type='number' name="dislikes" onChange={this.handleChange} value={this.state.dislikes} />
                <label>Replies</label>
                <input type='text' name="replies" onChange={this.handleChange} value={this.state.replies} />
                <button type="submit">Comment</button>
            </form>
         );
    }
}
 
export default CreateComment;