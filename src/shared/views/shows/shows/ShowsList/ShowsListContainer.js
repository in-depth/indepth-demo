import { connect } from 'react-redux'

import ShowsList from './ShowsList'

const mapStateToProps = (state) => ({
  shows: state.shows.shows,
  order: state.shows.defaultOrder,
})

const ShowsListContainer = connect(mapStateToProps)(ShowsList)

export default ShowsListContainer
