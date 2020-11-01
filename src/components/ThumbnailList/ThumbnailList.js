import React, { useState, useRef, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { Paper, ListItem, makeStyles} from '@material-ui/core';
import { FixedSizeList as List } from "react-window";
import { imagesSelector } from '../../state/imageLibrary/images';
import { useWindowSize } from '../../hooks/useWindowSize';

const useThumbnailListStyles = makeStyles((theme) => ({
    root: {
        margin: "0.25em 0 0 0.25em",
        padding: 0,
        height: "98%",
        overflow: "hidden"
    },
}));

const Row = ({ data, index, style }) => (
    <ListItem key={index} style={style}>
        <img alt={`image_${index}`} src={data[index].thumbnail} style={{ width: "100%" }} />
    </ListItem>
);

export function ThumbnailList() {
    const windowSize = useWindowSize();
    const classes = useThumbnailListStyles();
    const tileData = useRecoilValue(imagesSelector);

    const [leftElemHeight, setLeftElemHeight] = useState(0);
    const [leftElemWidth, setLeftElemWidth] = useState(0);
    const leftColumnRef = useRef(null);

    useEffect(() => {
        setLeftElemHeight(leftColumnRef.current.clientHeight);
        setLeftElemWidth(leftColumnRef.current.clientWidth);
    }, [windowSize.width, windowSize.height]);

    return (
        <Paper className={classes.root} ref={leftColumnRef}>
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
    );
}