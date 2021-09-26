const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '20731913-04720c2299aa0ca3b12520f7d';

export const getImages = (query, page) => {
  return fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    {
      metod: 'GET',
    },
  )
    .then(res => res.json())
    .then(res => res)
    .catch(e => console.log(e));
};
