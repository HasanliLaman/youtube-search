import React from "react";
import Video from "./Video";
import "./VideoContainer.css";

const VideoContainer = (props) => {
  let list = "";

  if (!Array.isArray(props.data)) {
    list = props.data.items.map((el) => (
      <Video
        key={el.id.videoId}
        title={el.snippet.title}
        videoId={el.id.videoId}
        channel={el.snippet.channelTitle}
        thumbnail={el.snippet.thumbnails.high.url}
        channelId={el.snippet.channelId}
        date={el.snippet.publishTime}
      />
    ));
  }
  return (
    <section className="video-container">
      {list}
      {props.isExceed && <h1>You have exceeded the daily search quote!</h1>}
    </section>
  );
};

export default VideoContainer;
