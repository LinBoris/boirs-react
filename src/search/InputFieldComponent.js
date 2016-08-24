import React from 'react';

const InputFieldComponent = React.createClass({
  getValue: function() {
    return this.refs.input.value;
  },

  render: function() {
    return (
      <label>
        {this.props.label}
        <input type="text" ref="input" name={this.props.name}/>
      </label>
    );
  }
});

export default InputFieldComponent;
