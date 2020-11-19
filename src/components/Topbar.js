import React from 'react';
import { makeStyles, ButtonGroup, Button, Paper } from '@material-ui/core';
import { GetApp, School, Brightness4 } from '@material-ui/icons';
import { useModal } from "react-modal-hook";
import { useRecoilState, useRecoilValue } from 'recoil';
import { isDarkThemeState } from '../state/theme';
import { AboutModal } from '../screens/AboutModal';
import { currentImageState, detectionModes } from '../state/imageLibrary/images';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        overflow: "hidden",
        margin: "0.25rem 0.25rem 0 0.25rem",
        padding: "0 0.25rem 0 0.25rem",
        height: "calc(100% - 0.25rem)",
    },
    buttonGroup: {
        height: "70%",
    },
    button: {
        padding: "0 3% 0 3%",
        maxWidth: "10%",
    },
    label: {
        // Aligns the content of the button vertically.
        flexDirection: 'column',
        fontSize: theme.spacing(1.4) + "px !important",
    },
    icon: {
        fontSize: theme.spacing(3.5) + "px !important",
    },
    logo: {
        objectFit: "contain",
        width: "25%",
        maxWidth: "14rem",
    }
}));

export function TopBar() {
    const classes = useStyles();
    const [isDarkTheme, setIsDarkTheme] = useRecoilState(isDarkThemeState);
    const currentImage = useRecoilValue(currentImageState);
    const [showModal, hideModal] = useModal(() => (<AboutModal hideModal={hideModal}/>));

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    const downloadCurrentImage = async () => {
        const link = document.createElement('a');
        var file = await fetch(`${currentImage.displayedImage}${currentImage.isGroundTruthEnabled ? '?groundTruth' : ''}`).then(r => r.blob());
        link.href = URL.createObjectURL(file);
        link.download = `${currentImage.selectedMode}${(currentImage.isGroundTruthEnabled && detectionModes.includes(currentImage.selectedMode)) ? "_ground_truth" : ""}_${currentImage.uuid.substring(0,5)}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <Paper className={classes.root}>
            <ButtonGroup color="primary" variant="text" aria-label="Mode Selector" fullWidth className={classes.buttonGroup}>
                {/* <Button classes={{ root: classes.button, label: classes.label }} onClick={runDetection}><PlayArrow className={classes.icon} />Detect Polyps</Button> */}
                <Button classes={{ root: classes.button, label: classes.label }} onClick={downloadCurrentImage}><GetApp className={classes.icon} />Download</Button>
                <Button disabled style={{width: "100%"}}>
                    <img alt="logo" src="../Logo.png" className={classes.logo}/>
                </Button>
                <Button classes={{ root: classes.button, label: classes.label }} onClick={toggleTheme}><Brightness4 className={classes.icon} />Theme</Button>
                <Button classes={{ root: classes.button, label: classes.label }} onClick={showModal}><School className={classes.icon} />About</Button>
            </ButtonGroup>
        </Paper>
    );
}