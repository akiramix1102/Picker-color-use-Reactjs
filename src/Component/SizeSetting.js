import React, { Component } from 'react';

class SizeSetting extends Component {
  changeSize(value)
  {
    this.props.onChangeSize(value)
  }
    render() {
        return (
            <div>
                <div className="title">
              <span>Size:{this.props.fontSize} px</span>
            </div>
            <div className="group-btn">
              <button type="button"  className="btn btn-success" onClick={()=>this.changeSize(2)}>Tăng</button>
              <button type="button" className="btn btn-danger" onClick={()=>this.changeSize(-2)}>Giảm</button>
            </div>
            </div>
        );
    }
}

export default SizeSetting;