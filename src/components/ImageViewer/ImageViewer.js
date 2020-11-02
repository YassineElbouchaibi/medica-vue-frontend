import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import CornerstoneViewport from 'react-cornerstone-viewport'
import { useRecoilValue } from 'recoil';
import { imageActiveToolState, allTools } from '../../state/cornerstone/tools';
import { currentImageState } from '../../state/imageLibrary/images';
import { Loading } from '../Loading';
import { ImageOverlay } from './Overlay';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "hidden",
    height: "inherit",
    padding: "0.25rem"
  },
}));

export function ImageViewer() {
  const classes = useStyles();
  const currentToolName = useRecoilValue(imageActiveToolState);
  const currentImage = useRecoilValue(currentImageState);

  return (
    <Paper classes={{ root: classes.root }}>
      <CornerstoneViewport
        tools={allTools}
        activeTool={currentToolName}
        imageIds={[
          currentImage.displayedImage,
        ]}
        viewportOverlayComponent={ImageOverlay}
        loadingIndecatorComponent={Loading}
      />
    </Paper>
  );
}