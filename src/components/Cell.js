import React from 'react';
import styled from 'styled-components';

const CellComponent = ({className, alive}) => (
  <div className={className}></div>
);

const Cell = styled(CellComponent)`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.alive ? '#666': 'white'};
  border: 1px solid #808080;
  /* background: ${props => props.alive ? '#fff': '#808080'};
  border: 1px solid #666; */
`

export default Cell;
