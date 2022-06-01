import React from "react";
import "./Video.css";

const Video = (props) => {
  const generateDate = function (date) {
    const difference = new Date() - new Date(date);

    if (difference / 1000 < 1) return `right now`;
    if (difference / 1000 < 60)
      return `${parseInt(difference / 1000)} seconds ago`;
    if (difference / 1000 < 60 * 60)
      return `${parseInt(difference / (1000 * 60))} minutes ago`;
    if (difference / 1000 < 60 * 60 * 24)
      return `${parseInt(difference / (1000 * 60 * 60))} hours ago`;
    if (difference / 1000 < 60 * 60 * 24 * 30)
      return `${parseInt(difference / (1000 * 60 * 60 * 24))} days ago`;
    if (difference / 1000 < 60 * 60 * 24 * 30 * 12)
      return `${parseInt(difference / (1000 * 60 * 60 * 24 * 30))} months ago`;

    return `${parseInt(
      difference / (1000 * 60 * 60 * 24 * 30 * 12)
    )} years ago`;
  };

  return (
    <div className="video">
      <a
        href={"https://www.youtube.com/watch?v=" + props.videoId}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={props.thumbnail} alt="thumbnail" />
      </a>
      <a
        href={"https://www.youtube.com/watch?v=" + props.videoId}
        target="_blank"
        rel="noreferrer noopener"
      >
        <h2>{props.title}</h2>
      </a>
      <div className="video__details">
        <a
          href={"https://www.youtube.com/channel/" + props.channelId}
          target="_blank"
          rel="noreferrer noopener"
        >
          <p>{props.channel}</p>
        </a>
        <p>{generateDate(props.date)}</p>
      </div>
    </div>
  );
};

export default Video;
