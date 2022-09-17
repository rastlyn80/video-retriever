import axios from 'axios';

const KEY  = 'AIzaSyDm3h2ljKFctNPpeSYzjg718a9kgo2OkGY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
