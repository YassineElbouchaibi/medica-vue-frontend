import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    position: "absolute",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export function LoadingOverlay({ message }) {
  const classes = useStyles();

  return (
      <Backdrop open className={classes.backdrop}>
        <CircularProgress color="primary" />
        <Box m={1}/>
        {message ? <Typography variant={"h6"}>{message}</Typography> : null}
      </Backdrop>
  );
}