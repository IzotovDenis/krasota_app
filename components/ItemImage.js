import React from 'react'

import { View, TouchableWithoutFeedback, Image } from 'react-native'

class ItemImage extends React.Component {
  render() { 
  const { item } = this.props
  if (item.image.exist) {
    let number = (item.id%20).toString()
    let url = `http://92.53.90.154/uploads/items/${number}/${item.uid}.jpg`
    return <Image source={{ uri: url }} resizeMode="contain" style={{flex:1, height: undefined, width: undefined}} />
  }
  else {
    return <Image source={require('../assets/images/noimage.jpg')}  resizeMode="contain" style={{flex: 1, width: undefined, height: undefined}} />
  }}
}

export default ItemImage