import React, { useState, useRef, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Paper, ListItem, makeStyles, Zoom } from '@material-ui/core';
import { FixedSizeList as List } from "react-window";
import { imagesState, currentImageState } from '../../state/imageLibrary/images';
import { useWindowSize } from '../../hooks/useWindowSize';
import { UploadArea } from './UploadButton';

const useThumbnailListStyles = makeStyles((theme) => ({
    rootAbove: {
        margin: "0.25em 0 0 0.25em",
        height: "15%",
        padding: 0,
        overflow: "hidden",
    },
    rootBelow: {
        margin: "0.25em 0 0 0.25em",
        padding: 0,
        height: "82%",
        overflow: "hidden",
    },
    imgContainer: {

    },
    img: {
        borderRadius: "4%",
        width: "100%",
        transition: "all 0.3s ease 0s",
        "&:hover": {
            transform: "scale(1.1)",
            zIndex: 1e4,
        },
    },

}));

const Row = ({ data, index, style }) => {
    const classes = useThumbnailListStyles();
    const [, setCurrentImage] = useRecoilState(currentImageState);

    return (
        <ListItem
            button
            key={index}
            style={style}
            onClick={() => {
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