import React, { Component } from 'react';
//How to specifically set it so it uses pencil when u select pencil and how to fill when u select fill

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.endPaintEvent = this.endPaintEvent.bind(this);


  }
  isPainting = false;
  StrokeStyle = "#FC0000";
  line = [];
  prevPos = { offsetX: 0, offsetY: 0 };

  onMouseDown({ nativeEvent }) {
    //if thjs.prob is pencil
    // do what it has now
    //
    this.StrokeStyle = this.props.selectedColor.hex;
    console.log(this.props.selectedTool);
    console.log(this.StrokeStyle)
    console.log(this.props.selectedColor.hex);
    const { offsetX, offsetY } = nativeEvent;
    this.isPainting = true;
    this.prevPos = { offsetX, offsetY };
  }

  onMouseMove({ nativeEvent }) {
    if (this.isPainting) {
      //console.log(this.props.selectedColor.hex);
      const { offsetX, offsetY } = nativeEvent;
      const offSetData = { offsetX, offsetY };
      this.position = {
        start: { ...this.prevPos },
        stop: { ...offSetData },
      };
      this.line = this.line.concat(this.position);
      this.paint(this.prevPos, offSetData, this.StrokeStyle);
    }
  }

  endPaintEvent() {
    if (this.isPainting) {
      this.isPainting = false;
    }
  }

  paint(prevPos, currPos, strokeStyle) {
    const { offsetX, offsetY } = currPos;
    const { offsetX: x, offsetY: y } = prevPos;

    this.ctx.beginPath();
    this.ctx.strokeStyle = strokeStyle;
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(offsetX, offsetY);
    this.ctx.stroke();
    this.prevPos = { offsetX, offsetY };
  }



  componentDidMount() {
    console.log(this.props.selectedTool)
    this.canvas.width = 800;
    this.canvas.height = 800;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
    this.ctx.lineWidth = 5;


  }

  render() {
    return (
      <canvas
        ref={(ref) => (this.canvas = ref)}
        style={{ background: 'black' }}
        onMouseDown={this.onMouseDown}
        onMouseLeave={this.endPaintEvent}
        onMouseUp={this.endPaintEvent}
        onMouseMove={this.onMouseMove}
      />
    );
  }
}

export default Canvas;
