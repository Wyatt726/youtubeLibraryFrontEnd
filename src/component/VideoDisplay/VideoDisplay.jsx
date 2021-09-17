import React from "react";
// import axios from "axios";
import "./VideoDisplay.css";


function DisplayVideo (props){
    return (
        <div>
            <h1>This is Video Location</h1>
            <iframe
            title="videoViewer"
            id="ytplayer"
            type="text/html"
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/OwdQFi3GR7g`}
            frameBorder="0"
          ></iframe>
        </div>
    )
}


export default DisplayVideo;