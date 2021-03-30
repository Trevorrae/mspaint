import React from 'react'
import { SketchPicker } from 'react-color'

class Colour extends React.Component {
    state = {
        userStrokeStyle: '#000',
    };
  
    handleChangeComplete = (color) => {
        console.log(color)
      this.setState({ userStrokeStyle: color.hex });
    };
  
    render() {
      return (
        <SketchPicker
          color={ this.state.userStrokeStyle }
          onChangeComplete={ this.handleChangeComplete }
        />
      );
    }
  }
export default Colour