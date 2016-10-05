import React from 'react'
import RtCheckbox from 'react-toolbox/lib/checkbox'

class Checkbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { checked: false }
  }

  handleChange(field, value) {
    this.setState({ checked: value })
    this.props.action(this.state, this.props.index)
  }

  render() {
    return (
      <RtCheckbox
        checked={this.state.checked}
        label={this.props.label}
        onChange={this.handleChange.bind(this, 'checked')}
      />
    )
  }
}

Checkbox.propTypes = {
  checked: React.PropTypes.bool.isRequired,
  label: React.PropTypes.string.isRequired,
  action: React.PropTypes.func.isRequired,
  index: React.PropTypes.number.isRequired,
}

export default Checkbox
