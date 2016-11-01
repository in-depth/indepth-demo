import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as DemosActions from '../DemosActions'

import Demo from './Demo'

const mapStateToProps = (state, ownProps) => {
  return {
    fullscreen: state.demos,
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(DemosActions, dispatch),
})

const DemoContainer = connect(mapStateToProps, mapDispatchToProps)(Demo)

export default DemoContainer
