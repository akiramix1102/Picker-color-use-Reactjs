import React, { Component } from 'react';

class Result extends Component {
  constructor(props) {
    super(props);
  }
  onSetColor(){
    return{
      color:this.props.color,
      borderColor:this.props.color,
      fontSize:this.props.fontSize
    }
  }
    render() {
        return (
            <div className="row">
            <div className="col-lg-12 block-box">
              <div className="title">
        <span>Color:red - Fontsize: {this.props.fontSize}px</span>
              </div>
              <div className="box" style={this.onSetColor()}>
                <span>Nội dung setting</span>
              </div>
            </div>
          </div>
        );
    }
}

export default Result;
