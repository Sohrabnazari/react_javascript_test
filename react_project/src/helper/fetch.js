import { BASE_URL } from '../constants';

const fetchData = async (url) => {
  try {
    const apiURL = BASE_URL + url;
		console.log(apiURL);
    const response = await fetch(apiURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default fetchData;
