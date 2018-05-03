import React from 'react';
import { StyleSheet, Text, View, Button, Animated, Easing, ScrollView, TouchableNativeFeedback, Image } from 'react-native';
import { StackNavigator, SafeAreaView} from 'react-navigation';
import { connect } from 'react-redux'
import * as catalogActions from '../../actions/catalogActions'
import { bindActionCreators } from 'redux'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import MainCarousel from '../../components/MainCarousel'
import RModal from '../../components/RModal'
import { SearchBar } from 'react-native-elements'

class HeadSearch extends React.Component {
  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
  }
    handleInput(e) {
    console.log(e)
  }
  componentDidMount() {
    this.search.focus()
  }
  render() {
    return <SearchBar
          ref={search => this.search = search}
          containerStyle={{backgroundColor: "#fff", borderBottomWidth: 0, borderTopWidth: 0}}
          inputStyle={{backgroundColor: '#ccc'}}
          onChangeText={(e) => this.handleInput(e)}
          onClearText={(e) => console.log('sds')}
          icon={{ type: 'font-awesome', name: 'search' }}
          placeholder='Поиск...' />
  }
}

class SearchScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerRight: (
        <TouchableNativeFeedback onPress={() => navigation.navigate('Cart')}>
          <View style={{alignItems: 'center', width: 60, paddingRight: 10, height: "100%", justifyContent: 'center'}}>
            <Icon name="bag" size={20} color="#222" />
          </View>
        </TouchableNativeFeedback>
      ),
      headerTitle: (
        <View style={{display: 'flex', width: '100%', alignContent: 'center', justifyContent:'center',}}>
          <HeadSearch/>
        </View>
      ),
      headerStyle: { backgroundColor: 'white', borderWidth: 0, borderBottomColor: 'white', elevation: 0, shadowOpacity: 0 },
    };
  };
  constructor(props) {
    super(props);
  }
    componentDidMount() {
  }
  render() {
    return (
        <ScrollView style={{backgroundColor: "#fff"}}>
          <Text>
            Search here
            </Text>
        </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    catalog: state.catalog
  }
}

function mapDispatchToProps(dispatch) {
  return {
    catalogActions: bindActionCreators(catalogActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchScreen)
