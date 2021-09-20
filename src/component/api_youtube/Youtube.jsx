import axios from "axios";

const KEY = "AIzaSyDwesMV6eY9pgHWVav1WEqJL_C4vwvNzb4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
  headers: {}
});