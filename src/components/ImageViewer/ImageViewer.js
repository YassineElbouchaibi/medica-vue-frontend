import React from 'react';
import CornerstoneViewport from 'react-cornerstone-viewport'
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListState } from '../../state/cornerstone/tools'
import { currentImageSelector } from '../../state/imageLibrary/images';

export function ImageViewer() {
  const [tools] = useRecoilState(todoListState)
  const currentImage = useRecoilValue(currentImageSelector);

  return (
      <CornerstoneViewport
          tools={tools}
          imageIds={[
            currentImage.image,
          ]}
      />
  );
}