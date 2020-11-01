import {atom, selector} from 'recoil';

const imagesURI = "http://localhost:5000/storage"

export const imagesSelector = selector({
  key: 'imagesQuery',
  get: async () => {
    const response = await fetch(imagesURI);
    return response.json();
  },
});

export const currentImageAtom = atom({
  key: 'currentImageAtom',
  default: null,
});

export const currentImageSelector = selector({
  key: 'currentImageSelector',
  get: ({get}) => {
    if (get(currentImageAtom) == null) {
      return get(imagesSelector)[0];
    }

    return get(currentImageAtom);
  },
});