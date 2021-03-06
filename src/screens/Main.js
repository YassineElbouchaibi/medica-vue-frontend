import React from 'react';
import { makeStyles, Grid, MuiThemeProvider, CssBaseline, createMuiTheme, responsiveFontSizes, useMediaQuery, useTheme } from '@material-ui/core';
import '../initCornerstone';
import { ModalProvider } from "react-modal-hook";
import { ThumbnailList } from '../components/ThumbnailList/ThumbnailList';
import { ImageViewer } from '../components/ImageViewer/ImageViewer';
import { ModeSwitcher } from '../components/ModeSwitcher';
import { TopBar } from '../components/Topbar';
import { ToolsSidebar } from '../components/ToolsSideBar';
import { isDarkThemeState } from '../state/theme';
import { useRecoilValue } from 'recoil';
import { darken } from '@material-ui/core/styles/colorManipulator';
import { grey } from '@material-ui/core/colors';
import { LoadingOverlay } from '../components/LoadingOverlay';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './ErrorFallback';
import { packagesInfoState } from '../state/packagesInfo';

function MainOuter() {
  const isDarkTheme = useRecoilValue(isDarkThemeState);

  const theme = responsiveFontSizes(createMuiTheme({
    palette: {
      type: isDarkTheme ? "dark" : "light",
      background: {
        default: isDarkTheme ? darken('#26a69a', 0.81) : darken('#26a69a', 0.3),
        paper: isDarkTheme ? darken('#424242', 0) : grey[300],
      },
      primary: {
        main: isDarkTheme ? '#26a69a' : darken('#26a69a', 0.2),
      },
      secondary: {
        main: isDarkTheme ? '#009688' : darken('#009688', 0.2),
      },
    },
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
      },
    },
  }));

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <React.Suspense fallback={<LoadingOverlay isFunMode={true}/>}>
          <ModalProvider>
            <Main />
          </ModalProvider>
        </React.Suspense>
      </MuiThemeProvider>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
  },
}));

function Main() {
  const classes = useStyles();
  useRecoilValue(packagesInfoState); // Force load
  const theme = useTheme();
  const isScreenWideEnough = useMediaQuery(theme.breakpoints.up('md'));

  if (!isScreenWideEnough) {
    return (
      <div className={classes.root}>
        <ErrorFallback error={{message: `Your device must be at least 960px wide. Try rotating your device.`}}/>
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
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
            <Grid item xs={12} style={{ height: "10%" }}><ModeSwitcher /></Grid>
          </Grid>
        </Grid>
      </ErrorBoundary>
    </div>
  );
}

export default MainOuter;
