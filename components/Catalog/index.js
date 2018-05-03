import React from 'react'
import { Text, StyleSheet, View, TouchableNativeFeedback } from 'react-native'
import { connect } from 'react-redux'
import NestedListView, {NestedRow} from 'react-native-nested-listview'
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons'

class Catalog extends React.Component {
  render() {
    return ( <NestedListView
  data={this.props.catalog.tree}
  getChildrenName={(node) => 'children'}
  onNodePressed={(node) => {
    if (node.children.length === 0) {
    this.props.navigation.navigate('Group', {groupId: node.id, title: node.title})
    }
    }
  }
  renderNode={(node, level) => (
    <NestedRow
      level={level}
    >
      <Node title={node.title} has_children={node.has_children} opened={node.opened} level={level} />
    </NestedRow>
  )}
/>)
  }
}

const Node = (props) => {
  const { title, has_children, opened, level} = props
    const textStyles = {color: '#555', fontSize: 19 - level, lineHeight: 20}
    if (opened === true && has_children === true) {
      textStyles.fontWeight = "600"
    }
    return <View style={{display:'flex', flexDirection: 'row', marginRight: 10}}>
          { has_children &&
          <View style={{flex:1}}>
            <Text style={textStyles}>{title.toUpperCase()}</Text>
          </View>
           }
          { !has_children &&
          <View style={{flex:1, display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={textStyles}>{title}</Text> 
            <Text style={[textStyles, {marginLeft: 10, fontSize: 12, color: "#999"}]}>39</Text>
          </View>
           }
          {has_children && !opened &&
            <View style={{width: 30, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="arrow-down" size={14} color="#bbb" />
            </View>
          }
          {has_children && opened &&
            <View style={{width: 30, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="arrow-up" size={14} color="#bbb" />
            </View>
          }
      </View>
}



const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'rgb(255, 255, 255)', padding: 15},
  node: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgb(0, 0, 0)',
  },
})

function mapStateToProps(state) {
  return {
    catalog: state.catalog
  }
}

export default withNavigation(connect(mapStateToProps)(Catalog))