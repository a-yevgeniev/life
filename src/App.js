import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as grid from './actions/gridAction';

import './App.css';
import styled from 'styled-components';
import Grid from './components/Grid';
import ControlPanel from './components/ControlPanel';

class App extends Component {
  constructor(props){
    super(props);

    this.time = null;
  }

  calculate() {
    this.props.calculate();
  }

  handleRun() {
    this.handleStop();
    this.time = setInterval(this.calculate.bind(this), this.props.speed);
  }

  handleStop() {
    clearInterval(this.time);
  }

  handleChangeSize(event) {
    this.handleStop();
    this.props.changeSize(+event.target.value);
  }

  handleGenerate() {
    this.handleStop();
    this.props.generate();
  }

  render() {
    return (
      <Content>
        <header>
          <H1>The Game of Life</H1>
        </header>
        <Main>
          <Field>
            <Grid grid={this.props.grid} size={this.props.size} />
          </Field>
          <ControlPanel
            age={this.props.age}
            size={this.props.size}
            run={this.handleRun.bind(this)}
            stop={this.handleStop.bind(this)}
            generate={this.handleGenerate.bind(this)}
            changeSize={this.handleChangeSize.bind(this)}
          />
        </Main>
      </Content>
    );
  }
}

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
`

const Field = styled.div`
  width: 500px;
`

const H1 = styled.h1`
  margin: 0;
  padding: 1em;
`

export default connect(store => ({
  grid: store.grid.grid,
  age: store.grid.age,
  size: store.grid.size,
  speed: store.grid.speed,
}), dispatch => ({
  generate: () => dispatch(grid.generate()),
  calculate: () => dispatch(grid.calculate()),
  changeSize: (size) => dispatch(grid.changeSize(size))
}))(App);
