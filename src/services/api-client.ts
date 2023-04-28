import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '4fc927697eb24fe4a43a33581ad515b3',
  },
});
