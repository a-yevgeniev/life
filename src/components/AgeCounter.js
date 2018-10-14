import React from 'react';
import styled from 'styled-components';

const AgeCounter = ({className, count}) => (
  <Counter className={className}>Age {count}</Counter>
)

export default AgeCounter;


const Counter = styled.div`
  margin: 20px 0;
  text-align: center;
`
