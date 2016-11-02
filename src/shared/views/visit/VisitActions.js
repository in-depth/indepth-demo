export const UPDATE_FEATURED_LINKS = 'UPDATE_FEATURED_LINKS'
export const UPDATE_PRIMARY_LINKS = 'UPDATE_PRIMARY_LINKS'
export const TOGGLE_INLINE_EDITING = 'TOGGLE_INLINE_EDITING'

export function updateFeaturedLinks(text, index) {
  return {
    type: UPDATE_FEATURED_LINKS,
    text,
    index,
  }
}

export function updatePrimaryLinks(text, index) {
  return {
    type: UPDATE_PRIMARY_LINKS,
    text,
    index,
  }
}

export function toggleInlineEditing() {
  return {
    type: TOGGLE_INLINE_EDITING,
  }
}
