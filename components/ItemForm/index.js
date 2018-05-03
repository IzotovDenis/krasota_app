import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import * as cartActions from '../../actions/cartActions'

@connect( (state, ownProps) => {
    return {
      qty: state.cart.orderList[ownProps.itemId] || 0
    }
  })
class ItemFormVal extends React.PureComponent {
  render() {
    return (
      <View style={{height:10, flex: 1, display: "flex", justifyContent:'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>{this.props.qty}</Text>
      </View>
    )
  }
}

class ItemForm extends React.PureComponent {
  handlePress(count) {
    this.props.cartActions.tougleItem(this.props.itemId, count)
  }
  handleLongMinusPress(){
    this.props.cartActions.deleteItem(this.props.itemId)
  }
  render() {
    return (
    <View style={{display: "flex", justifyContent:'center', alignItems: 'center', flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => this.handlePress(-1)} onLongPress={() => this.handleLongMinusPress()}>
      <View style={{height:35, width: 35, borderColor: '#ddd', borderWidth:1, display: "flex", justifyContent:'center', alignItems: 'center'}}>
        <Text style={{fontSize: 18, fontWeight: '600'}}>-</Text>
      </View>
      </TouchableOpacity>
      <ItemFormVal itemId={this.props.itemId} />
      <TouchableOpacity onPress={() => this.handlePress(+1)}>
      <View style={{height:35, width: 35, borderColor: '#232d3d', borderWidth:1, display: "flex", justifyContent:'center', alignItems: 'center', backgroundColor: '#232d3d'}}>
        <Text style={{fontSize: 18, fontWeight: '600', color: "#eee" }}>+</Text>
      </View>
      </TouchableOpacity>
    </View>
    )
  }
}



export default connect(
  (state) => {
    return {
    }
  },
  dispatch => {
    return {
      cartActions: bindActionCreators(cartActions, dispatch)
    }
  }
)(ItemForm)