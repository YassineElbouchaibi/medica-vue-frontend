import React from 'react';
import CornerstoneViewport from 'react-cornerstone-viewport'
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListState } from '../../state/cornerstone/tools'
import { currentImageState } from '../../state/imageLibrary/images';

export function ImageViewer() {
  const [tools] = useRecoilState(todoListState)
  const currentImage = useRecoilValue(currentImageState);

  return (
      <CornerstoneViewport
          tools={tools}
          imageIds={[
            currentImage.image,
          ]}
      />
  );
}