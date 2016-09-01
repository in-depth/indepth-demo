import React from 'react'
import { connect } from 'react-redux'

import { ShowDetails } from '../index'

const Show = (props) => {
  console.log(props)
  return (
    <div>
      <EventDetails />
    </div>
  )
}

Show.propTypes = {
  show: React.PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  state,
})

const ShowContainer = connect(mapStateToProps)(Show)

export default ShowContainer
export { Show }
