import {atom, selector} from 'recoil';

const imagesURI = "http://localhost:5000/storage"

const imagesDefaultState = selector({
  key: 'imagesDefaultState',
  get: async () => {
    const response = await fetch(imagesURI);
    const images = await response.json();

    return images.map((image) => ({
      image: image.image,
      thumbnail: image.thumbnail,
      customImage: false,
    }));
  },
});

export const imagesState = atom({
  key: 'imagesState',
  default: imagesDefaultState,
});

const currentImageDefaultState = selector({
  key: 'currentImageDefaultState',
  get: ({get}) => {
      return get(imagesState)[0];
  }
});

export const currentImageState = atom({
  key: 'currentImageState',
  default: currentImageDefaultState,
});