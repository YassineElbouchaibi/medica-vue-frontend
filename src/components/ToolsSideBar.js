import React from 'react';
import { makeStyles, ButtonGroup, Button, Paper, Box } from '@material-ui/core';
import { PlayArrow, GetApp, School, RotateLeft } from '@material-ui/icons';
import { useRecoilState } from 'recoil';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        overflow: "hidden",
        margin: "0 0.25rem 0 0.25rem",
        padding: "0.25rem 0 0.25rem 0",
        minHeight: "100%",
    },
    buttonGroup: {
    },
    button: {
    },
    label: {
        // Aligns the content of the button vertically.
        flexDirection: 'column',
        fontSize: '0.5rem !important',
    },
    icon: {
        fontSize: '1.9rem !important',
    }
}));

export function ToolsSidebar() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <ButtonGroup classes={classes.buttonGroup} color="primary" variant="text" aria-label="Mode Selector" orientation="vertical">
                <Button classes={{ root: classes.button, label: classes.label }}><PlayArrow className={classes.icon} />Detect Polyps</Button>
                <Button classes={{ root: classes.button, label: classes.label }}><GetApp className={classes.icon} />Download</Button>
                <Box style={{height: "55vh", width: "100%"}}/>
                <Button classes={{ root: classes.button, label: classes.label }}><School className={classes.icon} />About</Button>
            </ButtonGroup>
        </Paper>
    );
}