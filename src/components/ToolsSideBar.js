import React from 'react';
import { makeStyles, ButtonGroup, Button, Paper, MenuItem, Menu, useTheme } from '@material-ui/core';
import { Exposure, RotateLeft, Edit, Delete, Menu as MenuIcon, HighlightOff as Remove } from '@material-ui/icons';
import { allTools, imageActiveToolState } from '../state/cornerstone/tools';
import { useRecoilState } from 'recoil';
import { currentImageState, isCurrentLoadingState } from '../state/imageLibrary/images';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
        margin: "0 0.25rem 0 0.25rem",
        padding: "0.25rem 0 0.25rem 0",
        minHeight: "100%",
        flexDirection: "column",
    },
    buttonGroup: {
        height: "100%",
        width: "80%",
    },
    button: {
        padding: "10% 0 10% 0",
        maxHeight: "20%",
    },
    label: {
        // Aligns the content of the button vertically.
        flexDirection: 'column',
        fontSize: theme.spacing(1.4) + "px !important",
    },
    icon: {
        fontSize: theme.spacing(3.5) + "px !important",
    }
}));

export function ToolsSidebar() {
    const theme = useTheme();
    const classes = useStyles();
    const [currentToolName, setCurrentToolName] = useRecoilState(imageActiveToolState);
    const [isCurrentLoading, setIsCurrentLoading] = useRecoilState(isCurrentLoadingState);
    const [currentImage, setCurrentImage] = useRecoilState(currentImageState);

    const resetImage = () => {
        setIsCurrentLoading(true);
        setCurrentImage({
            ...currentImage,
            _resetCounter: currentImage._resetCounter + 1,
        });
    };

    const setTool = (toolName) => () => {
        setCurrentToolName(toolName);
    }

    const isToolSet = (toolName) => (toolName === currentToolName);
    const getToolColor = (toolName) => (isToolSet(toolName) ? "default" : "primary");


    const [anchorMenuEl, setAnchorMenuEl] = React.useState(null);
    const openMenu = (event) => {
        setAnchorMenuEl(event.currentTarget);
    };
    const closeMenu = () => {
        setAnchorMenuEl(null);
    };
    const getMenuColor = () => (
        (isToolSet("Wwwc") || isToolSet("Rotate") || isToolSet("TextMarker") || isToolSet("Eraser")) ? "primary" : "default"
    );

    return (
        <>
            <Paper className={classes.root}>
                <ButtonGroup color="primary" variant="text" aria-label="Mode Selector" orientation="vertical" className={classes.buttonGroup}>
                    <Button classes={{ root: classes.button, label: classes.label }} onClick={setTool("Wwwc")} color={getToolColor("Wwwc")}><Exposure className={classes.icon} />Levels</Button>
                    <Button classes={{ root: classes.button, label: classes.label }} onClick={setTool("Rotate")} color={getToolColor("Rotate")}><RotateLeft className={classes.icon} />Rotate</Button>
                    <Button classes={{ root: classes.button, label: classes.label }} onClick={setTool("TextMarker")} color={getToolColor("TextMarker")}><Edit className={classes.icon} />Text</Button>
                    <Button classes={{ root: classes.button, label: classes.label }} aria-controls="extra-tools-menu" aria-haspopup="true" onClick={openMenu} color={getMenuColor()}><MenuIcon className={classes.icon} />More</Button>
                    <Button disabled classes={{ root: classes.button, label: classes.label }}></Button>
                </ButtonGroup>
                <ButtonGroup color="primary" variant="text" aria-label="Mode Selector" orientation="vertical" className={classes.buttonGroup}>
                    <Button disabled classes={{ root: classes.button, label: classes.label }}></Button>
                    <Button classes={{ root: classes.button, label: classes.label }} onClick={setTool("Eraser")} color={getToolColor("Eraser")}><Remove className={classes.icon} />Eraser</Button>
                    <Button disabled={isCurrentLoading} classes={{ root: classes.button, label: classes.label }} onClick={resetImage}><Delete className={classes.icon} />Delete</Button>
                </ButtonGroup>
            </Paper>
            <Menu
                id="extra-tools-menu"
                anchorEl={anchorMenuEl}
                keepMounted
                open={Boolean(anchorMenuEl)}
                onClose={closeMenu}
            >
                {
                    allTools
                    .filter((tool) => (tool.name.match(/(Wwwc)|(Rotate)|(TextMarker)|(eraser)|(pinch)|(touch)|(tap)|(pan)|(zoom)|(wheel)|(mouse)|(scissor)|(brush)|(referenceline)|(orientationmarkers)|(stack)|(overlay)|(sulptor)/gi) == null))
                    .map((tool) => {
                        const toolName = splitWords(tool.name).join(" ");

                        return (
                            <MenuItem
                            style={{
                                color: getToolColor(tool.name) === "default" ? theme.palette.primary.main : undefined,
                            }}
                            key={tool.name + "MenuItem"}
                            onClick={async () => {
                                setTool(tool.name)();
                                closeMenu();
                            }}>{toolName}</MenuItem>
                        );
                    })
                }
            </Menu>
        </>
    );
}

function splitWords(s) {
	var re, match, output = [];
	re = /([A-Za-z]?)([a-z]+)/g;

	match = re.exec(s);
	while (match) {
		// output.push(match.join(""));
		output.push([match[1].toUpperCase(), match[2]].join(""));
		match = re.exec(s);
	}

	return output;

}