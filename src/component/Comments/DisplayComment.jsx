import React from 'react';

function DisplayComments(props){
    return (
        <table className='center'>
            <thead>
                <tr>
                    <th>Comment</th>
                </tr>
            </thead>
            {/* allComments will need to be in the render on App.js behind Class name  */}
            <tbody className='word'>
                {console.log()}
                    {props.allComments.map((comment) => {
                        return(
                            <tr className='rows' key={comment.id}>
                                <td>{comment.comment}</td>
                                <td><button className='likes' type= "button" onlick={() => props.incrementMe(comment.id)}>likes</button></td>
                                <td><button className='dislikes' type= "button" onlick={() => props.decrementMe(comment.id)}>dislikes</button></td>

                        </tr>
                        )
                    })}
            </tbody>
        </table>
    )
}


export default DisplayComments;