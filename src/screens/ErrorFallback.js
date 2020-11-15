import React from 'react';
import { Divider, makeStyles, Paper, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "90vh",
        alignSelf: "center",
        width: "85%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
  }));

export function ErrorFallback({ error }) {
    const classes = useStyles();

    return (
      <Paper classes={classes}>
        <Typography variant="h4">Something went wrong</Typography>
        <Box m={1}/>
        <Divider variant="middle" orientation="horizontal" style={{width: "50%"}}/>
        <Box m={1}/>
        <Typography variant="body1">{error.message}</Typography>
      </Paper>
    )
  }