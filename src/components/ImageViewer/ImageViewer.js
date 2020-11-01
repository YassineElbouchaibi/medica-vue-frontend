import React from 'react';
import CornerstoneViewport from 'react-cornerstone-viewport'
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListState } from '../../state/cornerstone/tools'
import { currentImageState } from '../../state/imageLibrary/images';
import { Loading } from '../Loading';
import { ImageOverlay } from './Overlay';

export function ImageViewer() {
  const [tools] = useRecoilState(todoListState)
  const currentImage = useRecoilValue(currentImageState);

  return (
      <CornerstoneViewport
          tools={tools}
          imageIds={[
            currentImage.displayedImage,
          ]}
          viewportOverlayComponent={ImageOverlay}
          loadingIndecatorComponent={Loading}
      />
  );
}