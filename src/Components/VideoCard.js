import React from "react";

const VideoCard = ({ videoInfo }) => {

  const { snippet, statistics } = videoInfo;
  const { channelTitle, title, thumbnails } = snippet;

  return <div className="p-2 m-2  w-72 h-full shadow-lg rounded-lg">
    <img className="rounded-lg" src={thumbnails.medium.url}/>
    <ul>
      <li className="font-bold my-1">{title}</li>
      <li>{channelTitle}</li>
      <li>{statistics.viewCount} views</li>
    </ul>
  </div>;
};

export default VideoCard;
