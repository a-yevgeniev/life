import React from 'react';
import styled from 'styled-components';

import './App.css';
import Grid from './containers/GridCnt';
import ControlPanel from './containers/ControlPanelCnt';

const App = () => (
  <Content>
    <header>
      <H1>The Game of Life</H1>
    </header>
    <Main>
      <Grid />
      <ControlPanel />
    </Main>
  </Content>
)

export default App;

const Content = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`

const H1 = styled.h1`
  margin: 0;
  padding: 1em;
`
