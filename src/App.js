import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Grid from './components/Grid';
import ControlPanel from './components/ControlPanel';
import DEFAULTS from './defaults';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      age: 0,
      size: DEFAULTS.size,
      grid: this.getEmptyGrid(DEFAULTS.size)
    };

    this.time = null;
  }

  getEmptyGrid(size) {
    return Array(size).fill(0).map(()=>{
      return Array(size).fill(0);
    });
  }

  getCellBasedOnRules(gen, i, j) {
    function getNeighbourCount(count = 0) {
      if (i !== 0) {
        count += gen[i - 1][j - 1] === 1 ? 1: 0;
        count += gen[i - 1][j] === 1 ? 1: 0;
        count += gen[i - 1][j + 1] === 1 ? 1: 0;
      }
      if (i !== gen.length - 1) {
        count += gen[i + 1][j - 1] === 1 ? 1: 0;
        count += gen[i + 1][j] === 1 ? 1: 0;
        count += gen[i + 1][j + 1] === 1 ? 1: 0;
      }
      count += gen[i][j - 1] === 1 ? 1: 0;
      count += gen[i][j + 1] === 1 ? 1: 0;
      return count;
    }

    let count = getNeighbourCount();
    if (gen[i][j] === 0){
      return count === 3 ? 1 : 0;
    }

    return count === 2 || count === 3 ? 1 : 0;
  }

  getNextGen(gen, fn) {
    return gen.map((row, i) => {
      return row.map((cell, j) => {
        return fn(gen, i, j);
      })
    });
  }

  calculate() {
    this.setState(function(state){
      return {
        age: state.age + 1,
        grid: this.getNextGen(state.grid, this.getCellBasedOnRules)
      }
    });
  }

  generate() {
    this.handleStop();
    this.setState(function(state){
      return {
        age: 0,
        grid: this.getNextGen(state.grid, () => (Math.round(Math.random())))
      }
    });
  }

  handleRun() {
    this.handleStop();
    this.time = setInterval(this.calculate.bind(this), DEFAULTS.speed);
  }

  handleStop() {
    clearInterval(this.time);
  }

  handleChangeSize(event) {
    this.handleStop();
    this.setState({
      size: +event.target.value,
      grid: this.getEmptyGrid(+event.target.value)
    });
  }

  handleGenerate() {
    this.handleStop();
    this.generate();
  }

  render() {
    return (
      <Content>
        <header>
          <H1>The Game of Life</H1>
        </header>
        <Main>
          <Field>
            <Grid grid={this.state.grid} size={this.state.size} />
          </Field>
          <ControlPanel
            age={this.state.age}
            size={this.state.size}
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

export default App;
