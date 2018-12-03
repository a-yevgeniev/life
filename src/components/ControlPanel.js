import React from 'react';
import styled from 'styled-components';

const ControlPanel = ({ size, changeSize, isRunning, generate, run, stop}) => (
  <Panel>
    <Button onClick={generate} disabled={isRunning}>Generate</Button>
    <Button onClick={run} disabled={isRunning}>Run</Button>
    <Button onClick={stop} disabled={!isRunning}>Stop</Button>
    <div>
      <label>Size {size}</label>
      <Input type="range" onChange={changeSize} value={size} min="1" max="100" />
    </div>
    <Info>
      <p>To start the game press 'Generate' and then 'Run'</p>
      <p>Revert the cell by clicking on it</p>
    </Info>
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

const Info = styled.div`
  font-size: 14px;
`