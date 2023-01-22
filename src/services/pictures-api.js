import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const API_KEY = '31583377-fa4c6976355a1f179c9a11dc6';
// const options = 'image_type=photo&orientation=horizontal&per_page=12';

// export const fetchPictures = async (query, page) => {
//   const response = await axios.get(
//     `?q=${query}&page=${page}&key=${API_KEY}&${options}`
//   );
//   return response.data;
// };

axios.defaults.baseURL = 'https://pixabay.com/api/';
export const fetchPictures = async (query, page) => {
  const response = await axios.get('', {
    params: {
      key: '31583377-fa4c6976355a1f179c9a11dc6',
      q: query,
      page: page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return response.data;
};

// axios.defaults.baseURL = 'https://pixabay.com/api/';

// export const fetchPictures = async arg => {
//   const response = await axios.get('https://pixabay.com/api/', {
//     params: {
//       key: '31583377-fa4c6976355a1f179c9a11dc6',
//       q: arg,
//       page: 1,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       per_page: 12,
//     },
//   });
//   return response.data;
// };
