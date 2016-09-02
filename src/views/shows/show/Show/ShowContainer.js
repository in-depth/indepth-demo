import React from 'react'
import { connect } from 'react-redux'

import Show from './Show'

const mapStateToProps = (state, ownProps) => ({
  shows: state.shows.shows,
})

const ShowContainer = connect(mapStateToProps)(Show)

export default ShowContainer
