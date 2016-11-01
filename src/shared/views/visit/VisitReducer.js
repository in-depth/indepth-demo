import { UPDATE_FEATURED_LINKS, UPDATE_PRIMARY_LINKS, TOGGLE_INLINE_EDITING } from './VisitActions'

const visitState = {
  featuredLinks: [
    {
      title: 'DEMO FEATURES',
      path: '/demo',
      backgroundUrl: '/static/images/simon-denny.jpg',
    },
    {
      title: 'OUR COLLECTION',
      path: '/collection',
      backgroundUrl: '/static/images/gallipoli-westmacott.jpg',
    },
    {
      title: 'GUIDED TOURS',
      path: '/plan',
      backgroundUrl: '/static/images/guided-tours.jpg',
    },
    {
      title: 'EUROPEAN SPLENDOR',
      path: '/page-unavailable',
      backgroundUrl: '/static/images/fan.jpg',
    },
  ],
  primaryLinks: [
    {
      title: 'EVENTS',
      path: '/events',
      icon: 'event',
    },
    {
      title: 'PLAN',
      path: '/plan',
      icon: 'directions_walk',
    },
    {
      title: 'INFO',
      path: '/page-unavailable',
      icon: 'info_outline',
    },
    {
      title: 'HOURS',
      path: '/page-unavailable',
      icon: 'hourglass_empty',
    },
  ],
  inlineEditing: false,
}

export const VisitReducer = (state = visitState, action) => {
  switch (action.type) {
    case UPDATE_FEATURED_LINKS:
      return Object.assign({}, state, {
        featuredLinks: state.featuredLinks.map((link, index) => {
          if (index === action.index) {
            return Object.assign({}, link, {
              title: action.text,
            })
          }
          return link
        }),
      })
    case UPDATE_PRIMARY_LINKS:
      return Object.assign({}, state, {
        primaryLinks: state.primaryLinks.map((link, index) => {
          if (index === action.index) {
            return Object.assign({}, link, {
              title: action.text,
            })
          }
          return link
        }),
      })
    case TOGGLE_INLINE_EDITING:
      return Object.assign({}, state, {
        inlineEditing: !state.inlineEditing,
      })
    default:
      return state
  }
}
