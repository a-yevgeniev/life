import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cell from './Cell';
import styled from 'styled-components';

class Grid extends Component {
  constructor(props) {
    super(props);

    this.area = React.createRef();

    this.state = {
      elSize: 0
    };
  }

  calculateElSize () {
    this.setState({
      elSize: ReactDOM.findDOMNode(this.area.current).getBoundingClientRect().width / this.props.size
    });
  }

  componentDidMount() {
    this.calculateElSize();
  }

  componentDidUpdate(prevProps) {
    if (this.props.size !== prevProps.size) {
      this.calculateElSize();
    }
  }

  render() {
    return (
      <GridWrap innerRef={this.area}>
        {this.props.grid.map((row, i) => {
          return row.map((cell, j) => {
            return <Cell key={`${i}${j}`} alive={cell} size={this.state.elSize} />
          })
        })}
      </GridWrap>
    );
  }
}

export default Grid;


const GridWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`
