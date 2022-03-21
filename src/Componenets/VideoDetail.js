import React from "react";

const VideoDetail = ({video}) =>{
    
    if(!video){
        return <div>Loading..</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe title="Video Player" src={videoSrc}/>
            </div>
            <div className="ui segment">
                <h2 className="ui header">{video.snippet.title}</h2>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoDetail;