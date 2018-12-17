import React from 'react';

class Areal extends React.Component {
  componentDidMount() {
    this.needRedraw = true;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.drawCanvas();
  }

  componentDidUpdate() {
    if(this.needRedraw) {
      this.drawCanvas();
    }
    this.updateCanvas();
  }

  drawCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    let { size } = this.props;

    this.refs.canvas.width = this.width;
    this.refs.canvas.height = this.height;

    ctx.clearRect(0, 0, this.width, this.height);

    for (let x = 0; x <= this.width; x += size) {
        ctx.moveTo(0.5 + x, 0);
        ctx.lineTo(0.5 + x, this.height);
    }

    for (let y = 0; y <= this.height; y += size) {
        ctx.moveTo(0, 0.5 + y);
        ctx.lineTo(this.width, 0.5 + y);
    }

    ctx.strokeStyle = "#808080";
    ctx.stroke();

    this.needRedraw = false;
  }

  componentWillReceiveProps(newProps){
    if (this.props.size !== newProps.size) {
      this.needRedraw = true;
    }
  }

  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    let { life, size } = this.props;

    ctx.clearRect(0, 0, this.width, this.height);

    ctx.strokeStyle = "#808080";
    ctx.fillStyle = "#666";
    ctx.lineWidth = 1;
    for (let cell in life) {
      ctx.fillRect((life[cell][0])*size, (life[cell][1])*size, size, size);
    }

    ctx.stroke();
  }

  render() {
    return (
      <canvas ref="canvas" onClick={this.props.onClick}/>
    );
  }
}

export default Areal;
