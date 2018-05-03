import React from 'react'
import {connect} from 'react-redux'
import { View, Text, TouchableNativeFeedback, StyleSheet, ScrollView, FlatList, Animated } from 'react-native'
import * as catalogActions from '../../actions/catalogActions'
import { bindActionCreators } from 'redux'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { withNavigation } from 'react-navigation';


function bui(tree, list, a=[], count = 0) {
  tree.map((item, index) =>{
    let itm = list[item.id]
    a.push({...itm, count: count})
    if (itm.opened) {
      a = bui(item.children, list, a, count+1)
    }
  })
  return a
}

class Catalog extends React.Component {
  constructor (props) {
    super(props)
    this._renderItem = this._renderItem.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  state = {catalog: []}
  componentWillReceiveProps(nextProps) {
    let catalog = []
    console.log("props")
    catalog = bui(nextProps.catalog.tree, nextProps.catalog.list)
    this.setState({catalog: catalog})
  }
  handleClick(itemId) {
    //this.props.catalogActions.tougleCatalogItem(itemId)
    this.setState({catalog: [...this.state.catalog, {id:Math.random(), title: "HELLO"}, {id:Math.random(), title: "HELLO"},{id:Math.random(), title: "HELLO"},{id:Math.random(), title: "HELLO"},{id:Math.random(), title: "HELLO"},{id:Math.random(), title: "HELLO"},{id:Math.random(), title: "HELLO"},{id:Math.random(), title: "HELLO"}]})
  }
  _keyExtractor = (item, index) => {
    return item.id
  };
  _renderItem = ({item}) => {
    return (<Itm item={item} handleClick={this.handleClick} />)
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.catalog}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}

class Itm extends React.Component {
  shouldComponentUpdate(nextProps) {
    if( this.props.item.id === nextProps.item.id) {
      console.log(this.props.item.id),
      console.log(nextProps.item.id)
      console.log("RANVO")
    return false
    }
    else {
      console.log(this.props.item.id),
      console.log(nextProps.item.id)
    }

  }
  render() 
  {
  const { item, handleClick} = this.props
  return <View style={[styles.itemContainer]}>
          <TouchableNativeFeedback  onPress={() => handleClick(item.id)}>
        <View style={styles.container}>
          <View style={[styles.textContainer]}>
            <Text style={[styles.textStyle, {fontSize: 19}]}>{item.title.toUpperCase()}</Text>
          </View>
        </View>
        </TouchableNativeFeedback>
        </View>
      }
      }

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 19,
    fontWeight: "400"
  },
  itemContainer: {
  },
  container: {
    display: 'flex',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row"
  },
  textContainer: {
    flex: 1
  },
  iconContainer: {
    width: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

function mapStateToProps(state) {
  return {
    catalog: state.catalog
  }
}

function mapDispatchToProps(dispatch) {
  return {
    catalogActions: bindActionCreators(catalogActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)