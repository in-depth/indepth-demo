import React from 'react'
import { connect } from 'react-redux'

import { ShowsList } from '../index'

const Shows = (props) => {
  return (
    <div>
      <ShowsList shows={props.shows.shows} order={props.shows.defaultOrder} />
    </div>
  )
}

Shows.propTypes = {
  events: React.PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  shows: state.events,
})

const ShowsContainer = connect(mapStateToProps)(Shows)

export default ShowsContainer
export { Shows }
