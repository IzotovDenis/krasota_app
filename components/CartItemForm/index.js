import React from 'react'

import { View, Text, TouchableNativeFeedback } from 'react-native'

import styles from './styles'

class CartItemForm extends React.Component {
  render() {
    return (
      <View>
        <Btn>
          <Text> PLUS </Text>
        </Btn>
        <Btn>
          <Text> work </Text>
        </Btn>
      </View>
    )
  }
}

const Btn = (props) => {
  return (
    <TouchableNativeFeedback onPress={(e) => console.log('CLISKC')} onLongPress={(e) => console.log("longPress")} onPressOut={(e) => console.log('press out')}>
    <View>
      {props.children}
    </View>
    </TouchableNativeFeedback>
  )
}

export default CartItemForm