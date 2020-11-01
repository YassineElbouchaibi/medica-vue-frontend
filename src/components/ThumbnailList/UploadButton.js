import React, { useState } from 'react'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { DropzoneAreaBase } from 'material-ui-dropzone'

const theme = createMuiTheme({
    overrides: {
        MuiDropzoneArea : {
            root: {
                maxHeight: "15vh",
                minHeight: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            },
            textContainer: {
                transform: "scale(0.5)",
            }
        }
    }
});

export function UploadArea({}) {
    const [files, setFiles] = useState([]);

    return (
        <MuiThemeProvider theme={theme}>
            <DropzoneAreaBase
                acceptedFiles={['image/*']}
                dropzoneText={"Drag and drop an image here or click"}
                onChange={(pfiles) => setFiles(pfiles)}
                filesLimit={1}
            />
        </MuiThemeProvider>
    )
}