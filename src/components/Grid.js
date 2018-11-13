import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cell from './Cell';
import styled from 'styled-components';
import AgeCounter from './AgeCounter';

class Grid extends Component {
  constructor(props) {
    super(props);

    this.area = React.createRef();

    this.state = {
      elSize: 0
    };

    this.handleClick = this.handleClick.bind(this);
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

  handleClick(e) {
    if (this.props.isRunning || e.target.dataset.i === undefined || e.target.dataset.j === undefined) {
      return;
    }
    this.props.revertCell(e.target.dataset.i, e.target.dataset.j);
  }

  render() {
    return (
      <>
        <GridWrap innerRef={this.area} onClick={this.handleClick}>
          {this.props.grid.map((row, i) => {
            return row.map((cell, j) => {
              return <Cell
                key={`${i}${j}`}
                alive={cell}
                i={i}
                j={j}
                size={this.state.elSize} />
            })
          })}
        </GridWrap>
        <AgeCounter count={this.props.age}/>
      </>
    );
  }
}

export default Grid;


const GridWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`
