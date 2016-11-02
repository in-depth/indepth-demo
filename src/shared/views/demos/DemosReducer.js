import { TOGGLE_FULLSCREEN } from './DemosActions'

const demoState = {
  fullscreen: false,
}

export const DemosReducer = (state = demoState, action) => {
  switch (action.type) {
    case TOGGLE_FULLSCREEN:
      return Object.assign({}, state, {
        fullscreen: !state.fullscreen,
      })
    default:
      return state
  }
}
