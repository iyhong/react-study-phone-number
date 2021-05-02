import React, { Component } from 'react'

export default class PhoneInfo extends Component {

  handleRemove = () => {
    const {info, onRemove} = this.props;
    onRemove(info.id);
  }
  
  render() {
    
    const { name, phone, id } = this.props.info;

    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px', 
    }

    return (
      <div style={style}>
        <div>
          <b>{name}</b>
        </div>    
        <div>
          {phone}
        </div>
        <div>
          <button onClick={this.handleRemove}>삭제</button>
        </div>
      </div>
    )
  }
}
