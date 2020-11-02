import { atom } from 'recoil';

export const imageActiveToolState = atom({
    key: 'imageActiveToolState',
    default: "Wwwc"
});

export const allTools = [
    { name: "Angle", mode: 'passive' },
    { name: "ArrowAnnotate", mode: 'passive' },
    { name: "Bidirectional", mode: 'passive' },
    { name: "CircleRoi", mode: 'passive' },
    { name: "CobbAngle", mode: 'passive' },
    { name: "EllipticalRoi", mode: 'passive' },
    { name: "FreehandRoi", mode: 'passive' },
    { name: "Length", mode: 'passive' },
    { name: "Probe", mode: 'passive' },
    { name: "RectangleRoi", mode: 'passive' },
    { name: "TextMarker", mode: 'passive', props: { configuration: { markers: ['Double click to edit'], current: 'Double click to edit', loop: true } } },
    { name: "Brush", mode: 'passive' },
    { name: "SphericalBrush", mode: 'passive' },
    { name: "RectangleScissors", mode: 'passive' },
    { name: "FreehandScissors", mode: 'passive' },
    { name: "CircleScissors", mode: 'passive' },
    { name: "CorrectionScissors", mode: 'passive' },
    { name: "Crosshairs", mode: 'passive' },
    { name: "DoubleTapFitToWindow", mode: 'active' },
    { name: "DragProbe", mode: 'passive' },
    { name: "Eraser", mode: 'passive' },
    { name: "FreehandRoiSculptor", mode: 'passive' },
    { name: "Magnify", mode: 'passive' },
    { name: "Overlay", mode: 'passive' },
    { name: "OrientationMarkers", mode: 'passive' },
    { name: "PanMultiTouch", mode: 'active' },
    { name: "Pan", mode: 'active', modeOptions: { mouseButtonMask: 2 } }, // Mouse right
    { name: "ReferenceLines", mode: 'passive' },
    { name: "Rotate", mode: 'passive' },
    { name: "RotateTouch", mode: 'active' },
    { name: "ScaleOverlay", mode: 'passive' },
    { name: "StackScrollMouseWheel", mode: 'passive' },
    { name: "StackScrollMultiTouch", mode: 'active' },
    { name: "StackScroll", mode: 'passive' },
    { name: "WwwcRegion", mode: 'passive' },
    { name: "Wwwc", mode: 'passive' },
    { name: "ZoomMouseWheel", mode: 'active' },
    { name: "Zoom", mode: 'passive' },
    { name: "ZoomTouchPinch", mode: 'active' },
];