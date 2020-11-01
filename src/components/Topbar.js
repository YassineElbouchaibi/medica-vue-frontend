import React from 'react';
import { makeStyles, ButtonGroup, Button, Paper } from '@material-ui/core';
import { PlayArrow, GetApp } from '@material-ui/icons';
import { useRecoilState } from 'recoil';
import { currentImageState } from '../state/imageLibrary/images';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        maxHeight: "80%",
        overflow: "hidden",
        margin: "0.25em 0.25em 0 0.25em",
        height: "6rem",
    },
    buttonGroup: {
    },
    button: {
        height: "3rem",
        minWidth: "7rem",
    },
    label: {
        // Aligns the content of the button vertically.
        flexDirection: 'column',
        fontSize: '0.6rem !important',
    },
    icon: {
        fontSize: '2rem !important',
    }
}));

export function TopBar() {
    const classes = useStyles();
    const [currentImage, setCurrentImage] = useRecoilState(currentImageState);

    return (
        <Paper className={classes.root}>
            <ButtonGroup classes={classes.buttonGroup} color="primary" variant="text" aria-label="Mode Selector">
                <Button classes={{ root: classes.button, label: classes.label }}><PlayArrow className={classes.icon} />Detect Polyps</Button>
                <Button classes={{ root: classes.button, label: classes.label }}><GetApp className={classes.icon} />Download</Button>
            </ButtonGroup>
        </Paper>
    );
}