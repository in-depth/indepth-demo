import { createSelector } from 'reselect'
import _sortBy from 'lodash/sortBy'

const collectionItemState = {
  collectionItems: {
    1: {
      id: '1',
      title: 'Rowan\'s Mohawk',
      mainImage: {
        url: 'https://avatars3.githubusercontent.com/u/9244507?s=250',
        title: 'Rowan with his mohawk in the 70s',
      },
      date: '1974',
    },
    2: {
      id: '2',
      title: 'Nick the professional',
      mainImage: {
        url: 'https://avatars0.githubusercontent.com/u/15827526?s=250',
        title: 'Nick with his professional Mahuki photo',
      },
      date: '2016',
    },
    3: {
      id: '3',
      title: 'Craig the rebel',
      mainImage: {
        url: 'https://avatars0.githubusercontent.com/u/6902746?s=250',
        title: 'Craig in the style of cubism',
      },
      date: '2014',
    },
  },
  defaultOrder: ['2', '3', '1'],
}

export const CollectionItemsReducer = (state = collectionItemState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

// Selectors
const getCollectionItems = (state) => state.collectionItems
const getDefaultOrder = (state) => state.defaultOrder
const getSecondParam = (state, param) => param

export const getOrderedByTitle = createSelector(
  [getCollectionItems, getDefaultOrder, getSecondParam],
  (collectionItems, defaultOrder, orderedBy) => {
    if (orderedBy === 'default') return defaultOrder

    // Options 1
    // const listOfObjects = Object.keys(collectionItems).map(id => collectionItems[id])
    // const sortedListOfObjects = _sortBy(listOfObjects, 'title')
    // const sortedList = []
    // sortedListOfObjects.forEach((item) => sortedList.push(item.id))

    // Faster option, assumes we have a list of all items already.
    const sortedObjects = _sortBy(defaultOrder, (id) => collectionItems[id][orderedBy])

    return sortedObjects
  }
)
