import React from 'react';
import { makeStyles, ButtonGroup, Button } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { currentImageState } from '../state/imageLibrary/images';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
}));

export function ModeSwitcher() {
    const classes = useStyles();
    const [currentImage, setCurrentImage] = useRecoilState(currentImageState);

    const isModeSelected = (modeName) => (() => (modeName === currentImage.selectedMode));
    const getVariant = (modeName) => {
        return isModeSelected(modeName)() ? "contained" : "outlined";
    };

    const switchToMode = (modeName) => {
        return () => {
            setCurrentImage({
                ...currentImage,
                displayedImage: currentImage.images[modeName],
                selectedMode: modeName,
            });
        };
    }

    return (
        <div className={classes.root}>
            <ButtonGroup color="primary" aria-label="Mode Selector">
                <Button variant={getVariant("original")} onClick={switchToMode("original")}>Original</Button>
                <Button variant={getVariant("mask")} onClick={switchToMode("mask")}>Mode 1</Button>
                <Button variant={getVariant("highlight")} onClick={switchToMode("highlight")}>Mode 2</Button>
                <Button variant={getVariant("annotation")} onClick={switchToMode("annotation")}>Mode 3</Button>
            </ButtonGroup>
        </div>
    );
}