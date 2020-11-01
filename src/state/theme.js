import { atom, selector } from 'recoil';

export const isDarkThemeState = atom({
    key: 'isDarkThemeState',
    default: true,
});