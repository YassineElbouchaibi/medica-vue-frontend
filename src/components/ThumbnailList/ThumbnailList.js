import React, { useState, useRef, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Paper, ListItem, makeStyles, Zoom } from '@material-ui/core';
import { FixedSizeList as List } from "react-window";
import { imagesState, currentImageState, isCurrentLoadingState } from '../../state/imageLibrary/images';
import { useWindowSize } from '../../hooks/useWindowSize';
import { UploadArea } from './UploadButton';

const useThumbnailListStyles = makeStyles((theme) => ({
    rootAbove: {
        margin: "0.25rem 0 0 0.25rem",
        height: "15%",
        padding: 0,
        overflow: "hidden",
    },
    rootBelow: {
        margin: "0.25rem 0 0 0.25rem",
        padding: 0,
        height: "calc(85% - 1rem)",
        overflow: "hidden",
    },
    imgContainer: {

    },
    img: {
        borderRadius: "4%",
        height: "100%",
        transition: "all 0.3s ease 0s",
    },

}));

const Row = ({ data, index, style }) => {
    const classes = useThumbnailListStyles();
    const [isCurrentLoading, setIsCurrentLoading] = useRecoilState(isCurrentLoadingState);
    const [currentImage, setCurrentImage] = useRecoilState(currentImageState);



    return (
        <ListItem
            button
            key={index}
            style={{
                ...style,
                justifyContent: "center",
            }}
            disabled={isCurrentLoading}
            onClick={() => {
                if (currentImage.uuid === data[index].uuid) return;
                setIsCurrentLoading(true)
                setCurrentImage(data[index]);
            }}
        >
            <Zoom in={true} mountOnEnter unmountOnExit>
                <img alt={`image_${index}`} src={data[index].thumbnail} className={classes.img} />
            </Zoom>
        </ListItem>
    );
}

export function ThumbnailList() {
    const windowSize = useWindowSize();
    const classes = useThumbnailListStyles();
    const tileData = useRecoilValue(imagesState);

    const [leftElemHeight, setLeftElemHeight] = useState(0);
    const [leftElemWidth, setLeftElemWidth] = useState(0);
    const leftColumnRef = useRef(null);

    useEffect(() => {
        setLeftElemHeight(leftColumnRef.current.clientHeight);
        setLeftElemWidth(leftColumnRef.current.clientWidth);
    }, [windowSize.width, windowSize.height]);

    return (
        <>
            <Paper className={classes.rootAbove}>
                <UploadArea />
            </Paper>
            <Paper className={classes.rootBelow} ref={leftColumnRef}>
                <List
                    className="List"
                    height={leftElemHeight}
                    itemSize={leftElemWidth * 0.7}
                    width={leftElemWidth}
                    itemCount={tileData.length}
                    itemData={tileData}
                >
                    {Row}
                </List>
            </Paper>
        </>
    );
}