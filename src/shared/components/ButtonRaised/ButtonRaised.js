import React from 'react'
import { Button } from 'react-toolbox/lib/button'

const ButtonRaised = ({ label, handlePress }) => (
  <Button raised primary label={label} onMouseUp={handlePress} />
)

ButtonRaised.propTypes = {
  label: React.PropTypes.string.isRequired,
  handlePress: React.PropTypes.func,
}

export default ButtonRaised
