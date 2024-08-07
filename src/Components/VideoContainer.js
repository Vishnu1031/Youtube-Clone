import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API } from "../constant";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    getYouTubeVideo();
  }, []);

  const getYouTubeVideo = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideo(json.items);
    console.log(json);
  };

  return (
    <div className="flex flex-wrap">
      {video.map((v) => (
       <Link to={`/watch?v=${v.id}`}> <VideoCard key={v.id} videoInfo={v} /></Link>
      ))}
    </div>
  );
};

export default VideoContainer;
