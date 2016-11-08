import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as VisitActions from '../VisitActions'

import Visit from './Visit'

const mapStateToProps = (state, ownProps) => {
  const visit = state.visit
  return {
    primaryLinks: visit.primaryLinks,
    featuredLinks: visit.featuredLinks,
    inlineEditing: visit.inlineEditing,
    header: visit.header,
    subHeader: visit.subHeader,
    image: visit.image,
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(VisitActions, dispatch),
})

const VisitContainer = connect(mapStateToProps, mapDispatchToProps)(Visit)

export default VisitContainer
