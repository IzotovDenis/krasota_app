import { TOUGLE_ITEM, DELETE_ITEM, SET_CART_ITEMS } from '../constants/Cart'

//const HOST = "http://192.168.0.107:3000"
const HOST = "http://92.53.90.154"

export function tougleItem(itemId, count) {
  return {
    type: TOUGLE_ITEM,
    itemId: itemId,
    count: count
  }
}

export function deleteItem(itemId) {
  return {
    type: DELETE_ITEM,
    itemId: itemId
  }
}

function getCartItems(ids) {
  return fetch(`${HOST}/v1/orders/getOrderItems`, {
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({items: ids})
}).then(response=>response.json())
}

function setCartItems(items) {
  return {
    type: SET_CART_ITEMS,
    items: items
  }
}

export function actionGetCartItems(ids) {
  return function (dispatch) {
    return getCartItems(ids).then(
      response => {dispatch(setCartItems(response.items))}
    )
  }
}


