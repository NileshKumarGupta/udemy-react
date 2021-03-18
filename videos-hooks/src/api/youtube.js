import axios from "axios";
const KEY = "AIzaSyCJirpBR_Ad8JgYGrtl9wHflS3S5K7l3do";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
