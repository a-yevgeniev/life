import React from 'react';
import styled from 'styled-components';
import AgeCounter from './AgeCounter';

const ControlPanel = ({ age, size, generate, run, stop, changeSize }) => (
  <Panel>
    <Button onClick={generate}>generate</Button>
    <Button onClick={run}>run</Button>
    <Button onClick={stop}>stop</Button>
    <div>
      <label>Size {size}</label>
      <Input type="range" onChange={changeSize} value={size} min="1" max="100" />
    </div>
    <AgeCounter count={age}/>
  </Panel>
)

export default ControlPanel;


const Panel = styled.div`
  /* background: #ccc; */
`

const Button = styled.button`
  width: 100%;
  margin-bottom: 30px;
`

const Input = styled.input`
  width: 100%;
  margin-bottom: 30px;
`
