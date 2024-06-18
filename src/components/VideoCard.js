import React from "react";

const VideoCard = ({ info }) => {
  // Destructuring info object
  
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  // Logging channelTitle inside the return statement
  

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        className="rounded-lg w-full"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        {statistics && statistics.viewCount && (
          <li>{statistics.viewCount} views</li>
        )}
      </ul>
    </div>
  );
};

export default VideoCard;
