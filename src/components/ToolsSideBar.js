import React from 'react';
import { makeStyles, ButtonGroup, Button, Paper } from '@material-ui/core';
import { Exposure, RotateLeft, Edit, Delete } from '@material-ui/icons';
import { imageActiveToolState } from '../state/cornerstone/tools';
import { useRecoilState } from 'recoil';
import { currentImageState, isCurrentLoadingState } from '../state/imageLibrary/images';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
        margin: "0 0.25rem 0 0.25rem",
        padding: "0.25rem 0 0.25rem 0",
        minHeight: "100%",
        flexDirection: "column",
    },
    buttonGroup: {
        height: "100%",
        width: "80%",
    },
    button: {
        padding: "10% 0 10% 0",
        maxHeight: "20%",
    },
    label: {
        // Aligns the content of the button vertically.
        flexDirection: 'column',
        fontSize: theme.spacing(1.4) + "px !important",
    },
    icon: {
        fontSize: theme.spacing(3.5) + "px !important",
    }
}));

export function ToolsSidebar() {
    const classes = useStyles();
    const [currentToolName, setCurrentToolName] = useRecoilState(imageActiveToolState);
    const [isCurrentLoading, setIsCurrentLoading] = useRecoilState(isCurrentLoadingState);
    const [currentImage, setCurrentImage] = useRecoilState(currentImageState);

    const resetImage = () => {
        setIsCurrentLoading(true);
        setCurrentImage({
            ...currentImage,
            _resetCounter: currentImage._resetCounter + 1,
        });
    };

    const setTool = (toolName) => () => {
        setCurrentToolName(toolName);
    }

    const isToolSet = (toolName) => (toolName === currentToolName);
    const getToolColor = (toolName) => (isToolSet(toolName) ? "default" : "primary");

    return (
        <Paper className={classes.root}>
            <ButtonGroup color="primary" variant="text" aria-label="Mode Selector" orientation="vertical" className={classes.buttonGroup}>
                <Button classes={{ root: classes.button, label: classes.label }} onClick={setTool("Wwwc")} color={getToolColor("Wwwc")}><Exposure className={classes.icon}/>Levels</Button>
                <Button classes={{ root: classes.button, label: classes.label }} onClick={setTool("Rotate")} color={getToolColor("Rotate")}><RotateLeft className={classes.icon}/>Rotate</Button>
                <Button classes={{ root: classes.button, label: classes.label }} onClick={setTool("TextMarker")} color={getToolColor("TextMarker")}><Edit className={classes.icon}/>Text</Button>
                <Button disabled classes={{ root: classes.button, label: classes.label }}></Button>
            </ButtonGroup>
            <ButtonGroup color="primary" variant="text" aria-label="Mode Selector" orientation="vertical" className={classes.buttonGroup}>
                <Button disabled classes={{ root: classes.button, label: classes.label }}></Button>
                <Button disabled={isCurrentLoading} classes={{ root: classes.button, label: classes.label }} onClick={resetImage}><Delete className={classes.icon} />Delete</Button>
            </ButtonGroup>
        </Paper>
    );
}