import { combineReducers } from 'redux'

import catalog from './catalog'
import group from './group'
import cart from './cart'
import offer from './offer'

export default combineReducers({
  catalog: catalog,
  group: group,
  cart: cart,
  offer: offer
})
