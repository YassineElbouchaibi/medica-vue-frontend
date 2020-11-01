import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
    },
    infoBlock: {
        margin: theme.spacing(2),
        backgroundColor: fade(theme.palette.background.paper, 0.5),
        borderRadius: theme.spacing(1),
    },
}));

export function ImageOverlay({
    scale,
    windowWidth,
    windowCenter,
    imageId,
    imageIndex,
    stackSize,
}) {
    const classes = useStyles();
    const scaleInPercent = Number(scale).toLocaleString(undefined, {style: 'percent', minimumFractionDigits:0});

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item className={classes.infoBlock}>
                    <Typography variant="h6" align="left">
                        {`Zoom: ${scaleInPercent}`}
                    </Typography>
                    <Typography variant="h6" align="left">
                        {`W: ${windowWidth} L: ${windowCenter}`}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}