import { atom } from 'recoil';

export const todoListState = atom({
    key: 'cornerstoneTools',
    default: [
        // Mouse
        {
            name: 'RectangleScissors',
            mode: 'active',
            modeOptions: { mouseButtonMask: 1 },
        },
        {
            name: 'Pan',
            mode: 'active',
            modeOptions: { mouseButtonMask: 3 },
        },
        // Scroll
        { name: 'ZoomMouseWheel', mode: 'active'},
        // Touch
        { name: 'PanMultiTouch', mode: 'active' },
        { name: 'ZoomTouchPinch', mode: 'active' },
        { name: 'StackScrollMultiTouch', mode: 'active' },
        { name: 'StackScrollMultiTouch', mode: 'active' },
    ],
});