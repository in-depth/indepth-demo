import React from 'react'
import RtSlider from 'react-toolbox/lib/slider'

class SliderSnaps extends React.Component {
  constructor(props) {
    super(props)
    this.state = { time: 4 }
  }

  handleChange(slider, value) {
    const newState = {}
    newState[slider] = value
    this.setState(newState)
    this.props.action(this.state.time)
  }

  render() {
    return (
      <RtSlider
        pinned
        snaps
        editable
        value={this.state.time}
        min={this.props.min}
        max={this.props.max}
        step={this.props.step}
        onChange={this.handleChange.bind(this, 'time')}
      />
    )
  }
}

SliderSnaps.propTypes = {
  min: React.PropTypes.number.isRequired,
  max: React.PropTypes.number.isRequired,
  step: React.PropTypes.number.isRequired,
  value: React.PropTypes.number.isRequired,
  action: React.PropTypes.func.isRequired,
}

export default SliderSnaps
