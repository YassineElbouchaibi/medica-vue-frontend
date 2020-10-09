import React from 'react';
import { RecoilRoot } from 'recoil';

// Local imports
import Main from './screens/Main';

function App() {
  return (
    <RecoilRoot>
      <Main/>
    </RecoilRoot>
  );
}

export default App;
