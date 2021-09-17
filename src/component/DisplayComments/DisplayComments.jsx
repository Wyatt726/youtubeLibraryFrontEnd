import React, {Component} from "react";

let commentCounter = 1;

class DisplayComments extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            commentValue: '',
            commentLine:[{ commentId:'', text:'',}]
         };
    }
    render() { 
        return ( 
            <div>
                <h1>This is a comment</h1>
            </div>
         );
    }
}

export default DisplayComments;