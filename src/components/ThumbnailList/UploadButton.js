import React from 'react'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { DropzoneAreaBase } from 'material-ui-dropzone'
import { imagesState, currentImageState, nullImage } from '../../state/imageLibrary/images';
import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

const theme = createMuiTheme({
    overrides: {
        MuiDropzoneArea: {
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

export function UploadArea() {
    const [images, setImages] = useRecoilState(imagesState);
    const [, setCurrentImage] = useRecoilState(currentImageState);

    return (
        <MuiThemeProvider theme={theme}>
            <DropzoneAreaBase
                acceptedFiles={['image/*']}
                dropzoneText={"Drag and drop an image here or click"}
                onAdd={async (pImages) => {
                    if (pImages.length !== 1) { return; }

                    const cloudName = 'medica-vue';
                    const unsignedUploadPreset = 'crba6jrq';

                    const form = new FormData();

                    form.append('file', pImages[0].data);
                    form.append('upload_preset', unsignedUploadPreset);

                    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
                        method: "POST",
                        body: form,
                    });
                    const result = await response.json();
                    console.log(result);

                    const image = {
                        thumbnail: result.secure_url,
                        customImage: true,
                        uuid: uuidv4(),
                        images: {
                            original: result.secure_url,
                            mask: nullImage,
                            highlight: nullImage,
                            annotation: nullImage,
                        },
                        displayedImage: result.secure_url,
                        selectedMode: "original",
                    };

                    setImages([image, ...images]);
                    setCurrentImage(image);
                }}
                filesLimit={1}
            />
        </MuiThemeProvider>
    )
}