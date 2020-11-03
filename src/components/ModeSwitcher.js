import React from 'react';
import { makeStyles, ButtonGroup, Button, Paper } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { currentImageState, isCurrentLoadingState } from '../state/imageLibrary/images';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        margin: "0.25rem 0.35rem 0 0.25rem",
        height: "calc(100% - 0.25rem)",
    },
}));

export function ModeSwitcher() {
    const classes = useStyles();
    const [currentImage, setCurrentImage] = useRecoilState(currentImageState);
    const [isCurrentLoading, setIsCurrentLoading] = useRecoilState(isCurrentLoadingState);

    const isModeSelected = (modeName) => (() => (modeName === currentImage.selectedMode));
    const getVariant = (modeName) => {
        return isModeSelected(modeName)() ? "contained" : "outlined";
    };

    const switchToMode = (modeName) => {
        return () => {
            if (currentImage.selectedMode == modeName) {
                return;
            }

            if (currentImage.displayedImage != currentImage.images[modeName]) {
                setIsCurrentLoading(true);
            }

            setCurrentImage({
                ...currentImage,
                displayedImage: currentImage.images[modeName],
                selectedMode: modeName,
            });
        };
    }

    return (
        <Paper className={classes.root}>
            <ButtonGroup disabled={isCurrentLoading} color="primary" aria-label="Mode Selector">
                <Button variant={getVariant("original")} onClick={switchToMode("original")}>Original</Button>
                <Button variant={getVariant("mask")} onClick={switchToMode("mask")}>Mask</Button>
                <Button variant={getVariant("highlight")} onClick={switchToMode("highlight")}>Highlight</Button>
                <Button variant={getVariant("annotation")} onClick={switchToMode("annotation")}>Annotation</Button>
                <Button disabled={currentImage.customImage} variant={getVariant("groundTruth")} onClick={switchToMode("groundTruth")}>Ground Truth</Button>
            </ButtonGroup>
        </Paper>
    );
}