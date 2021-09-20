import React from "react";
import "./video.css"
function selectVideo(videoIdObj, onVideoSelected) {
  onVideoSelected(videoIdObj.videoId);
}
function getCss(imageurl) {
  const _styles = {
    backgroundImage: `url(${imageurl})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "180px",
    position: "relative"
  };
  return _styles;
}
function constructVideoTitles(vidoesData, onVideoSelected) {
  return vidoesData.map(({ snippet, id }, index) => {
    return (
      <div
        className="video"
        key={index}
        onClick={() => selectVideo(id, onVideoSelected)}
      >
        <div style={getCss(snippet.thumbnails.high.url)} key={index} />
        <p className="title">{snippet.title}</p>
      </div>
    );
  });
}
const Video = ({ data, onVideoSelected }) => {
  return <>{constructVideoTitles(data, onVideoSelected)}</>;
};

export default Video;



// import React from "react";
// // import axios from "axios";
// import "./VideoDisplay.css";


// const DisplayVideo = ({videoId}) => {
//     return (
//         <div className='video-player'>
//             <h1>This is Video Location</h1>
//             <iframe
//             title="{videoId}"
//             id="ytplayer"
//             type="text/html"
//             width="640"
//             height="360"
//             src={`https://www.youtube.com/embed/${videoId}`}
//             frameBorder="0"
//           ></iframe>
//         </div>
//     )
// }


// export default DisplayVideo;