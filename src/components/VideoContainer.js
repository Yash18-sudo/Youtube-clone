import React from "react";
import { useEffect, useState } from "react";
import {
  YOUTUBE_SEARCH_RESULTS_API,
  YOUTUBE_VIDEO_API,
} from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);
  const searchText = useSelector((store) => store.search.searchResults);

 useEffect(() => {
   if (searchText) {
    console.log(searchText);
     getSearchVideos();
   } else {
     getVideos();
   }
 }, [searchText]);

  const getSearchVideos = async () => {
    const data = await fetch(YOUTUBE_SEARCH_RESULTS_API + searchText);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  if (videos == null) return;

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
