import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AppLayout from './AppLayout'
import * as VisitActions from '../visit/VisitActions'
import * as DemosActions from '../demos/DemosActions'

const mapStateToProps = (state) => {
  return {
    fullscreen: state.demos.fullscreen,
  }
}

const mapDispatchToProps = (dispatch) => ({
  visitActions: bindActionCreators(VisitActions, dispatch),
  fullscreenAction: bindActionCreators(DemosActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout)
