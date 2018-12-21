import React from 'react';
import styled from 'styled-components';

import './App.css';
import Grid from './containers/GridCnt';
import Header from './containers/HeaderCnt';
import ControlPanel from './containers/ControlPanelCnt';

const App = () => (
  <Content>
    <Header />
    <Grid />
    <ControlPanel />
  </Content>
)

export default App;

const Content = styled.div`
  background-color: #282c34;
`
