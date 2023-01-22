import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['x-api-key'] =
//   '31583377-fa4c6976355a1f179c9a11dc6';

export const fetchPictures = async () => {
  const response = await axios.get(
    '?q=cat&page=1&key=31583377-fa4c6976355a1f179c9a11dc6&image_type=photo&orientation=horizontal&per_page=12'
  );
  return response.data;
};
