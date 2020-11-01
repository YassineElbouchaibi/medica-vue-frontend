import React from 'react';
import './Main.css';
import { Grid, MuiThemeProvider, CssBaseline } from '@material-ui/core';
import '../initCornerstone';
import { ModalProvider } from "react-modal-hook";
import { ThumbnailList } from '../components/ThumbnailList/ThumbnailList';
import { ImageViewer } from '../components/ImageViewer/ImageViewer';
import { ModeSwitcher } from '../components/ModeSwitcher';
import { TopBar } from '../components/Topbar';
import { ToolsSidebar } from '../components/ToolsSideBar';
import { themeState } from '../state/theme';
import { useRecoilValue } from 'recoil';

function Main() {
  const themeValue = useRecoilValue(themeState);

  return (
    <>
      <CssBaseline />
      <React.Suspense fallback={<div>Loading...</div>}>
        <MuiThemeProvider theme={themeValue}>
          <ModalProvider>
            <div className="Main">
              <Grid container>
                <Grid item xs={2}>
                  <ThumbnailList />
                </Grid>
                <Grid item xs={10}>
                  <Grid item xs={12} style={{ height: "9%" }}><TopBar /></Grid>
                  <Grid container style={{ height: "80%" }}>
                    {/* <Grid item xs={1} style={{}}></Grid> */}
                    <Grid item xs={11} style={{ height: "100%", padding: "0 0 0 0.25rem" }}>
                      <ImageViewer />
                    </Grid>
                    <Grid item xs={1} style={{}}><ToolsSidebar /></Grid>
                  </Grid>
                  <Grid item xs={12} style={{ height: "9%" }}><ModeSwitcher /></Grid>
                </Grid>
              </Grid>
            </div>
          </ModalProvider>
        </MuiThemeProvider>
      </React.Suspense>
    </>
  );
}

export default Main;
