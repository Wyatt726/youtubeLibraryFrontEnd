import React, {Component} from "react";


class CreateComment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comment: '',
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
                <label>Comment Section</label>
                <input type='text' name="comment" onChange={this.handleChange} value={this.state.comment} />
                <button type="submit">Comment</button>

            </form>
         );
    }
}
 
export default CreateComment;