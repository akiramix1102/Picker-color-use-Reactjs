import React, { Component } from 'react';



class Picker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'green', 'blue', '#ccc']
    };
  }

  setActiveColor(color) {
    this.props.receiveColor(color);
    // trả về giá trị của props receiveColor cho App.js
  }
  render() {
    var elementColor = this.state.colors.map((color, index) => {
      return <span
        key={index}
        style={{backgroundColor:color}}
        className={this.props.color===color?'active':''}
        onClick={() => this.setActiveColor(color)}
      ></span>
    })
    return (
      <div className="col-lg-6 block-box">
        <div className="title">
          <span>Color Picker</span>
        </div>
        <div className="box">
          {elementColor}
        </div>
      </div>
    );
  }
}

export default Picker;