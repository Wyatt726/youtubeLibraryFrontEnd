import React, {Component} from "react";


class CreateComment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comment: '',
            commentLine: [{commentID:'', text:'',}],
         }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.createNewComment(this.state)
    }

    render() { 
        const { commentValue, handleCommentValue, 
            enterCommentLine, submitCommentLine} = this.props;
            const enableCommentButton = () => {
            return (commentValue ? false : true);
            }
            const changeCommentButtonStyle = () => {
            return (commentValue ? "comments-button-enabled" : 
            "comments-button-disabled");
            }
        return ( 
            <form>
                <label>Comment Section</label>
                <input type='text' name="comment" onChange={this.handleChange} value={this.state.comment} />
                <button type="submit">Comment</button>

            </form>
         );
    }
}
 
export default CreateComment;