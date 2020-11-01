import { atom } from 'recoil';
import { createMuiTheme } from '@material-ui/core';

export const themeState = atom({
    key: 'themeState',
    default: createMuiTheme({
        palette: {
            type: "dark",
            primary: {
                main: '#26a69a',
            },
            secondary: {
                main: '#009688',
            },
        },
        overrides: {
            MuiDropzoneArea: {
                root: {
                    maxHeight: "15vh",
                    minHeight: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                },
                textContainer: {
                    transform: "scale(0.5)",
                }
            },
        },
    }),
});