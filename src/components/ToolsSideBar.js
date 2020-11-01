import React from 'react';
import { makeStyles, ButtonGroup, Button, Paper } from '@material-ui/core';
import { Exposure, RotateLeft, Edit, Delete } from '@material-ui/icons';
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
            <ButtonGroup color="primary" variant="text" aria-label="Mode Selector" orientation="vertical">
                <Button classes={{ root: classes.button, label: classes.label }}><Exposure className={classes.icon} />Levels</Button>
                <Button classes={{ root: classes.button, label: classes.label }}><RotateLeft className={classes.icon} />Rotate</Button>
                <Button classes={{ root: classes.button, label: classes.label }}><Edit className={classes.icon} />Annotate</Button>
                <Button disabled style={{height: "50vh", width: "100%"}}/>
                <Button classes={{ root: classes.button, label: classes.label }}><Delete className={classes.icon} />Delete</Button>
            </ButtonGroup>
        </Paper>
    );
}