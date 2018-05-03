import React from 'react'

import { View, Text, FlatList, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import CartItems from '../../components/CartItems'
import gStyles from '../../lib/globalStyles'
import * as cartActions from '../../actions/cartActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class CartScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {state} = navigation;
    return {
      title: "Корзина",
      headerTitleStyle: {
              fontWeight: '400',
            },
      headerStyle: { backgroundColor: 'white', borderWidth: 0, borderBottomColor: 'white', elevation: 0, shadowOpacity: 0 },
    };
  };
  componentDidMount() {
    this.props.cartActions.actionGetCartItems(Object.keys(this.props.cart.orderList))
  }
  shouldComponentUpdate() {
    return false
  }
  render() {
    console.log("render")
  return ( <View style={gStyles.container}>
          <View style={gStyles.content}>
          <CartItems />
          </View>
          <View style={gStyles.footer}>
          <View style={{height:50, width: 200, borderColor: '#2b3849', borderWidth:1, display: "flex", justifyContent:'center', alignItems: 'center', backgroundColor: '#2b3849'}}>
            <Text style={{fontSize: 18, fontWeight: '600', color: "#eee" }}>Оформить заказ</Text>
          </View>
          </View>
      </View>
      );
  }
}

export default connect(
  state=>{
    return{ cart: state.cart}
  },
  dispatch => {
    return {
      cartActions: bindActionCreators(cartActions, dispatch)
    }
  })(CartScreen)