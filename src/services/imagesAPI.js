import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '29605366-6e90110b2388a1c27ba35efcd',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: '12',
};

async function getImagePixabay(pageNamber, keyword) {
  try {
    const { data } = await axios.get(``, {
      params: {
        page: pageNamber,
        q: keyword,
      },
    });
    // console.log('data', data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default getImagePixabay;
