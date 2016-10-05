import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as planActions from '../PlanActions'
import Plan from './Plan'

const mapStateToProps = (state) => ({
  preferences: state.plans.preferences,
  planType: state.plans.planType,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(planActions, dispatch),
})

const PlanContainer = connect(mapStateToProps, mapDispatchToProps)(Plan)

export default PlanContainer
