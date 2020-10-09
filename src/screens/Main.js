import React from 'react';
import CornerstoneViewport from 'react-cornerstone-viewport'
import { useRecoilState } from 'recoil';
import './Main.css';
import { todoListState } from '../state/Cornerstone/tools'

function Main() {
    const [tools, setTools] = useRecoilState(todoListState)

    return (
        <div className="Main">
            <div className="CornerstoneContainer">
                <CornerstoneViewport
                    tools={tools}
                    imageIds={[
                        'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini.jpg',
                    ]}
                />
            </div>
        </div>
    );
}

export default Main;
