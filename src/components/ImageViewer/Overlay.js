import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

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
        backgroundColor: theme.palette.text.hint,
        borderRadius: theme.spacing(1)
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
                <Grid item xs={1.5} className={classes.infoBlock}>
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