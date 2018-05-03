import React from 'react'

import { View, Text, Image, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import CartItemForm from '../CartItemForm'
import ItemForm from '../ItemForm'
import ItemImage from '../ItemImage'

import styles from './styles'

const win = Dimensions.get("window")
const WIDTH = win.width
const HEIGHT = win.height

class CartItem extends React.Component {
  render() {
    const { item } = this.props
    return (<View style={styles.container}>
      <View style={{display: 'flex', width: 90, height: 90}}>
        <ItemImage item={item} />
      </View>
        <View style={styles.itemView}>
          <View style={styles.titleView}>
            <Text>
            {item.title}
            </Text>
          </View>

          <View style={styles.orderView}>
            <View style={styles.priceView}>
              <Text style={{fontSize: 14, fontWeight: '500'}}>
                {item.price} РУБ
              </Text>
            </View>
            <View style={styles.countFormView}>
              <ItemForm itemId={item.id}/>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default CartItem