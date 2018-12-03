import React from 'react';
import styled from 'styled-components';

import Cell from './Cell';
import AgeCounter from './AgeCounter';

const Grid = ({ grid, age, area, size, onClick }) => (
  <Field>
    <GridWrap onClick={onClick}>
      {grid.map((row, i) => {
        return row.map((cell, j) => {
          return <Cell
            key={`${i}${j}`}
            alive={cell}
            i={i}
            j={j}
            size={size} />
        })
      })}
    </GridWrap>
    <AgeCounter count={age}/>
  </Field>
);

export default Grid;


const Field = styled.div`
  max-width: 500px;
  flex: 1 0 auto;

  @media screen and (max-width: 500px) {
    transform: scale(0.5);
  }
`

const GridWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`
