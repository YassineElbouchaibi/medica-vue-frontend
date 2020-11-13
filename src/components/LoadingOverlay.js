import React, { useEffect, useState } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Funnies from 'funnies';

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

export function LoadingOverlay({ message, isFunMode }) {
  const classes = useStyles();
  const funnies = new Funnies();
  const [localMessage, setLocalMessage] = useState(isFunMode ? funnies.message() : message);

  useEffect(() => {
    if (!isFunMode) return;
    
    const id = setInterval(() => {
      setLocalMessage(funnies.message());
    }, 4 * 1000);

    return () => clearInterval(id);
  }, [funnies, isFunMode]);

  return (
      <Backdrop open className={classes.backdrop}>
        <CircularProgress color="primary" />
        <Box m={1}/>
        {localMessage ? <Typography variant={"h6"}>{localMessage}</Typography> : null}
      </Backdrop>
  );
}