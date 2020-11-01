import {atom, selector} from 'recoil';
import { v4 as uuidv4 } from 'uuid';

const imagesURI = "http://localhost:5000/storage";
export const nullImage = "https://res.cloudinary.com/medica-vue/image/upload/v1604237843/no_image_available_x1lq9w.jpg";

const imagesDefaultState = selector({
  key: 'imagesDefaultState',
  get: async () => {
    const response = await fetch(imagesURI);
    const images = await response.json();

    return images.map((image) => ({
      thumbnail: image.thumbnail,
      customImage: false,
      uuid: uuidv4(),
      images: {
        original: image.image,
        mask: nullImage,
        highlight: nullImage,
        annotation: nullImage,
      },
      displayedImage: image.image,
      selectedMode: "original",
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