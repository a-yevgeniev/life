import React from 'react';
import styled from 'styled-components';

import './App.css';
import Space from './containers/GridCnt';
import ControlPanel from './containers/ControlPanelCnt';
import Header from './components/Header';
import Grid from '@material-ui/core/Grid';

const App = () => (
  <Content>
    <Header />
    <Grid container alignItems="center" justify="space-around" style={{ overflow: 'hidden' }}>
      <Grid item lg={6}>
        <Space />
      </Grid>
      <Grid item lg={6}>
        <ControlPanel />
      </Grid>
    </Grid>
  </Content>
)

export default App;

const Content = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  padding-top: 20px;
`
