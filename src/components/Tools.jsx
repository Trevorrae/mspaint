import React, { Component } from 'react';
import { PaintTools } from './Paint';

class Tools extends Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
    <div>
        <button onClick={() => this.props.setTool(PaintTools.Pencil)} className="user user">Pencil </button>
        <button onClick={() => this.props.setTool(PaintTools.Fill)} className="user guest">Fill </button>
    </div>
    );
  }
}

export default Tools;
