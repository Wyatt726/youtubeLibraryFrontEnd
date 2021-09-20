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
                    {props.allComments.map((comment) => {
                        return(
                            <tr className='rows' key={comment.id}>
                                <td>{comment.comment}</td>
                                {/* <td><button className='delete'type="button" onClick={() => props.deleteSong(song.id)}>Delete</button></td> */}
                        </tr>
                        )
                    })}
            </tbody>
        </table>
    )
}


export default DisplayComments;