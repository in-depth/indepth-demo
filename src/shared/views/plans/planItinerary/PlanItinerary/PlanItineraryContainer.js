import { connect } from 'react-redux'
import PlanItinerary from './PlanItinerary'

const mapStateToProps = (state) => ({
  intinerary: state.collectionItems.collectionItems,
})

const PlanItineraryContainer = connect(mapStateToProps)(PlanItinerary)

export default PlanItineraryContainer
