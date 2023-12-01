import axios from 'axios';

const fetchjobs = async (boardToken, platform = 'greenhouse') => {
  let response;
  if (platform === 'greenhouse') {
    response = await axios.get(
      `https://boards-api.greenhouse.io/v1/boards/${boardToken}/jobs`
    );
    // TODO: need authorization to use this URL(they changed it)
  } else if (platform === 'lever') {
    response = await axios.get(
      `https://api.lever.co/v1/v1/postings/${boardToken}?mode=json`
    );
  }

  return response.data;
};

export default fetchjobs;
