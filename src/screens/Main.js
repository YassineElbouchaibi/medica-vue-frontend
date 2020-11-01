import React from 'react';
import './Main.css';
import { Grid } from '@material-ui/core';
import '../initCornerstone';
import { ThumbnailList } from '../components/ThumbnailList/ThumbnailList';
import { ImageViewer } from '../components/ImageViewer/ImageViewer';
import { ModeSwitcher } from '../components/ModeSwitcher';

function Main() {
  return (
    <div className="Main">
      <Grid container>
        <Grid item xs={2}>
          <ThumbnailList />
        </Grid>
        <Grid item xs={10}>
          <Grid item xs={12} style={{ height: "10%" }}></Grid>
          <Grid container style={{ height: "80%" }}>
            <Grid item xs={1} style={{}}></Grid>
            <Grid item xs={10} style={{ height: "100%" }}>
              <ImageViewer/>
            </Grid>
            <Grid item xs={1} style={{}}></Grid>
          </Grid>
          <Grid item xs={12} style={{ height: "10%" }}><ModeSwitcher/></Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
