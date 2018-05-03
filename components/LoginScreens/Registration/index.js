import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, Dimensions, TextInput, TouchableOpacity } from 'react-native';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const BG_IMAGE = require('../../../assets/images/bg_screen4.jpg');

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{padding: 20, paddingBottom:0}}>
        <TextInput
          style={{borderColor: '#888', fontSize: 16, color: "#eee", borderWidth: 1, paddingLeft: 10, paddingRight: 10, paddingBottom: 5, paddingTop: 5, borderRadius: 15}}
          onChangeText={(text) => this.setState({text})}
          placeholder='Номер телефона'
          value={this.state.text}
          underlineColorAndroid='transparent'
        />
        </View>
        <View style={{padding: 20, paddingBottom:0}}>
        <TextInput
          style={{borderColor: '#888', fontSize: 16, color: "#eee", borderWidth: 1, paddingLeft: 10, paddingRight: 10, paddingBottom: 5, paddingTop: 5, borderRadius: 15}}
          onChangeText={(text) => this.setState({text})}
          placeholder='Пароль'
          value={this.state.text}
          underlineColorAndroid='transparent'
        />
        </View>
        <View style={{padding: 20, paddingBottom:0}}>
        <TextInput
          style={{borderColor: '#888', fontSize: 16, color: "#eee", borderWidth: 1, paddingLeft: 10, paddingRight: 10, paddingBottom: 5, paddingTop: 5, borderRadius: 15}}
          onChangeText={(text) => this.setState({text})}
          placeholder='Подтверждение пароля'
          value={this.state.text}
          underlineColorAndroid='transparent'
        />
        </View>
        <View style={{padding: 20, paddingBottom:0}}>
          <TouchableOpacity onPress={(e) => console.log("press")}>
            <View style={{borderColor: "#FF9800", borderRadius: 15, borderWidth:1, backgroundColor: "#FF9800", padding: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 16, fontWeight: '600', color: "#fff"}}>
                Регистрация
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  }
});