import React, { Component } from 'react';

class Reset extends Component {
    onSettingDefault=()=>{
        this.props.settingDefault(true);
    }
    render() {
        return (
            <div className="reset">
            <button type="button" className="btn btn-warning" onClick={this.onSettingDefault}>Reset</button>
            </div>
        );
    }
}

export default Reset;