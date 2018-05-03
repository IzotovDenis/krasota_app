import React from 'react'
import { View, Text, FlatList, StyleSheet, Image, Dimensions, PixelRatio, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation';
import ItemForm from '../ItemForm'
import CartItem from '../CartItem'
import { connect } from 'react-redux'

const win = Dimensions.get("window")
const pixelRatio = PixelRatio.getFontScale()

const styles = StyleSheet.create({
  container: {
    width: win.width/2,
    flex: 1,
    padding: win.width/40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  MainContainer: {
    width: win.width
  },
  Item: {
    textAlign: 'center',
    fontSize: win.width/30/pixelRatio
  },
  Price: {
    fontSize: win.width/24
  },
  Padding: {
    paddingLeft: 10
  },
  titleContainer: {
    backgroundColor: "#fff",
    height: win.width/5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
    buttonBuy: {
    borderColor: '#2b384b',
    borderWidth: 1,
    backgroundColor: "#fff",
    padding: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50
  },
  buttonBuyLabel: {
    color: "#2b384b" 
  }
});


class CartItems extends React.PureComponent {
  constructor(props) {
    super(props)
  this._renderItem = this._renderItem.bind(this)
  }
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({item}) => {
    return (<CartItem item={item} />)
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.props.cart.items}
          keyExtractor={this._keyExtractor}
          numColumns={1}
          renderItem={this._renderItem}
          ItemSeparatorComponent={() => <View
        style={{
          height: 1,
          marginTop: 3,
          marginBottom: 3,
          width: "100%",
          backgroundColor: "#fafafa",
        }}
      />}
        />
      </View>
    )
  }
}

export default connect(state=> {return { cart: state.cart}})(CartItems)