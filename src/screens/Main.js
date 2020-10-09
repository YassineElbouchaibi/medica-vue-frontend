import React from 'react';
import CornerstoneViewport from 'react-cornerstone-viewport'
import { useRecoilState } from 'recoil';
import './Main.css';
import { todoListState } from '../state/Cornerstone/tools'
import { Paper } from '@material-ui/core';

function Main() {
    const [tools, setTools] = useRecoilState(todoListState)

    return (
        <div className="Main">
            <Paper className="CornerstoneContainer" elevation={2}>
                <CornerstoneViewport
                    tools={tools}
                    imageIds={[
                        'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini.jpg',
                    ]}
                />
            </Paper>
        </div>
    );
}

export default Main;
