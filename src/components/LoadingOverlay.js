import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    position: "absolute",
  },
}));

export function LoadingOverlay() {
  const classes = useStyles();

  return (
      <Backdrop open className={classes.backdrop}>
        <CircularProgress color="primary" />
      </Backdrop>
  );
}