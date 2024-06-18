 const GOOGLE_API_KEY = "Enter google API Key";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&regionCode=IN&chart=mostPopular&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULTS_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  GOOGLE_API_KEY +
  "&q="; 

export const LIVE_CHAT_COUNT = 10

