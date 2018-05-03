import { TOUGLE_CATALOG_ITEM, SET_CATALOG} from '../constants/Catalog'

const initialState = {
  tree: [],
  list: {}
}

export default function catalog (state = initialState, action) {
  switch (action.type) {
    case TOUGLE_CATALOG_ITEM:
      return {...state, list: {...state.list, [action.itemId]: {...state.list[action.itemId], opened: !state.list[action.itemId].opened }}}
    case SET_CATALOG:
      return {...action.catalog}
    default:
      return { ...state }
  }
}
