import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import CornerstoneViewport from 'react-cornerstone-viewport'
import { useRecoilValue, useRecoilState } from 'recoil';
import { imageActiveToolState, allTools } from '../../state/cornerstone/tools';
import { currentImageState, isCurrentLoadingState, detectionModes } from '../../state/imageLibrary/images';
import { ImageOverlay } from './Overlay';
import { LoadingOverlay } from '../LoadingOverlay';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "hidden",
    height: "inherit",
    padding: "0.25rem",
    position: "relative",
  },
}));

export function ImageViewer() {
  const classes = useStyles();
  const currentToolName = useRecoilValue(imageActiveToolState);
  const currentImage = useRecoilValue(currentImageState);
  const [isCurrentLoading, setIsCurrentLoading] = useRecoilState(isCurrentLoadingState);

  return (
    <Paper classes={{ root: classes.root }}>
      {isCurrentLoading ? <LoadingOverlay message={detectionModes.includes(currentImage.selectedMode) ? "Detecting Polyps..." : "Loading..."}/> : null}
      <CornerstoneViewport
        tools={allTools}
        activeTool={currentToolName}
        imageIds={[
          `${currentImage.displayedImage}${currentImage.isGroundTruthEnabled ? '?groundTruth' : ''}`,
        ]}
        viewportOverlayComponent={ImageOverlay}
        onNewImage={() => setIsCurrentLoading(false)}
      />
    </Paper>
  );
}