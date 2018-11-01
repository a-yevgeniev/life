import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './actions/appAction';

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
    this.props.start();
  }

  handleStop() {
    clearInterval(this.time);
    this.props.stop();
  }

  handleChangeSize(event) {
    this.handleStop();
    this.props.changeSize(+event.target.value);
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
            isRunning={this.props.isRunning}
            run={this.handleRun.bind(this)}
            stop={this.handleStop.bind(this)}
            generate={this.props.generate.bind(this)}
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
  size: store.grid.size,
  age: store.app.age,
  speed: store.app.speed,
  isRunning: store.app.isRunning
}), dispatch => ({
  generate: () => dispatch(action.generate()),
  calculate: () => dispatch(action.calculate()),
  changeSize: (size) => dispatch(action.changeSize(size)),
  start: (size) => dispatch(action.start(size)),
  stop: (size) => dispatch(action.stop(size)),
}))(App);
