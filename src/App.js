import React from 'react';
import styled from 'styled-components';

import './App.css';
import Grid from './containers/GridCnt';
import ControlPanel from './containers/ControlPanelCnt';

const App = () => (
  <Content>
    <Grid />
    <ControlPanel />
  </Content>
)

export default App;

const Content = styled.div`
  background-color: #282c34;
  /* min-height: 100vh; */
`
