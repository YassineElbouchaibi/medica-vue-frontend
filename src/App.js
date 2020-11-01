import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { RecoilRoot } from 'recoil';

// Local imports
import Main from './screens/Main';

function App() {
  return (
    <RecoilRoot>
      <CssBaseline />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Main/>
      </React.Suspense>
    </RecoilRoot>
  );
}

export default App;
