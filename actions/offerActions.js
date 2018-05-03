import { SET_ACTIVE, SET_OFFER_ITEMS, CLEAR_OFFER_ITEMS } from '../constants/Offer'

//const HOST = "http://192.168.0.107:3000"
const HOST = "http://92.53.90.154"

export function setActiveOffer(offerId) {
  return {
    type: SET_ACTIVE,
    offerId: offerId
  }
}

export function clearItems() {
  return {
    type: CLEAR_OFFER_ITEMS
  }
}

function getOffer() {
  return fetch(`${HOST}/v1/items/rand`).then((response) => response.json())
}

function setOffer(response) {
  return {
    type: SET_OFFER_ITEMS,
    items: response.items
  }
}

export function actionGetOffer(offerId) {
  return function (dispatch) {
    return getOffer().then(
      response => dispatch(setOffer(response))
    )
  }
}